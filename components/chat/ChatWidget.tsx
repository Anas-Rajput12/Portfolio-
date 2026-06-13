'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '@/lib/rag/constants';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  // ✅ FIX: Use a ref to always have the latest messages without stale closure issues
  const messagesRef = useRef<Message[]>([]);

  // ✅ Keep the ref in sync with state on every render
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
    };

    // ✅ Use the state updater function to get the most current messages
    setMessages((currentMessages) => {
      const allMessages = [...currentMessages, userMessage];
      // ✅ Also update ref immediately so it's in sync before any async work
      messagesRef.current = allMessages;
      return allMessages;
    });

    setInputValue('');
    setIsLoading(true);

    const assistantId = (Date.now() + 1).toString();

    // Wait a tiny bit to ensure state update has completed
    await new Promise(resolve => setTimeout(resolve, 0));

    try {
      // ✅ Get the latest messages from ref (includes the user message we just added)
      const messagesToSend = messagesRef.current;

      // 🐛 DEBUG: Log what we're sending to the API
      console.log('📤 Sending to API:', {
        messageCount: messagesToSend.length,
        messages: messagesToSend.map((msg) => ({
          role: msg.role,
          content: msg.content.substring(0, 50) + '...',
        })),
      });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // ✅ Send the full conversation history to the API
          messages: messagesToSend.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Failed to get response: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('No response body received');
      }

      // Add empty assistant placeholder
      const assistantPlaceholder: Message = {
        id: assistantId,
        role: 'assistant',
        content: '',
      };
      setMessages((prev) => [...prev, assistantPlaceholder]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        if (value) {
          const text = decoder.decode(value, { stream: true });

          // Parse AI SDK data stream format: lines starting with "0:"
          const lines = text.split('\n').filter((line) => line.trim());
          for (const line of lines) {
            if (line.startsWith('0:')) {
              try {
                const jsonPart = line.substring(2);
                const content = JSON.parse(jsonPart);
                assistantMessage += content;
              } catch (e) {
                console.error('Failed to parse chunk:', line, e);
              }
            }
          }

          // Update the assistant bubble with accumulated content
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId
                ? { ...msg, content: assistantMessage }
                : msg
            )
          );
        }
      }

      // ✅ FIX: After stream completes, update both state and ref
      if (assistantMessage) {
        // Final state update to ensure UI is in sync
        setMessages((prev) => {
          const updated = prev.map((msg) =>
            msg.id === assistantId
              ? { ...msg, content: assistantMessage }
              : msg
          );
          // Sync ref with the final state
          messagesRef.current = updated;
          return updated;
        });
      } else {
        // No content received — show error in the placeholder bubble
        const errorContent = 'Sorry, I received an empty response. Please try again.';

        setMessages((prev) => {
          const updated = prev.map((msg) =>
            msg.id === assistantId ? { ...msg, content: errorContent } : msg
          );
          // Sync ref with the error state
          messagesRef.current = updated;
          return updated;
        });
      }
    } catch (error) {
      console.error('Chat error:', error);

      // ✅ Show a proper error message
      const errorContent = 'Sorry, I encountered an error. Please try again.';

      setMessages((prev : any) => {
        // Replace placeholder if it exists, otherwise append
        const hasPlaceholder = prev.some((m : any) => m.id === assistantId);
        let updated;

        if (hasPlaceholder) {
          updated = prev.map((msg : any) =>
            msg.id === assistantId ? { ...msg, content: errorContent } : msg
          );
        } else {
          updated = [...prev, { id: assistantId, role: 'assistant', content: errorContent }];
        }

        // Sync ref with the error state
        messagesRef.current = updated;
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-2 border-white"
        >
          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          ) : (
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] h-[500px] md:h-[600px]"
          >
            <Card className="h-full flex flex-col shadow-2xl bg-white border-2 border-slate-200">

              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" />
                  <CardTitle className="text-white text-lg md:text-xl">
                    Ask Anas AI
                  </CardTitle>
                </div>
                <p className="text-sm text-white/90 mt-2">
                  Ask me anything about my skills, projects, and experience!
                </p>
              </CardHeader>

              {/* Body */}
              <CardContent className="flex-1 flex flex-col p-3 md:p-4 overflow-hidden bg-slate-50">

                {/* Messages */}
                <div className="flex-1 overflow-y-auto mb-3 md:mb-4 space-y-3 md:space-y-4">

                  {messages.length === 0 && (
                    <div className="space-y-2">
                      <p className="text-sm text-slate-600 mb-3 font-medium">
                        Try asking:
                      </p>
                      {SUGGESTED_QUESTIONS.slice(0, 4).map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          className="w-full text-left p-2.5 md:p-3 text-xs md:text-sm bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all shadow-sm hover:shadow"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  )}

                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-2.5 md:p-3 rounded-lg shadow-sm ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-slate-200 text-slate-800'
                        }`}
                      >
                        <p className="text-xs md:text-sm whitespace-pre-wrap leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:150ms]" />
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:300ms]" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleFormSubmit} className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    className="flex-1 bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>

                <p className="text-xs text-slate-500 mt-2 text-center">
                  Powered by AI • Responses may vary
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
