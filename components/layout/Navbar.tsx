'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Experience', href: 'experience' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Hackathons', href: 'hackathons' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIXED SCROLL FUNCTION
  const handleScrollToSection = (id: string) => {
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // navbar height offset
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg border-b border-slate-800/50'
          : 'bg-slate-950/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
              MA
            </div>
            <span className="font-bold text-xl hidden md:block text-gray-100">
              AnasTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.href)}
                className="px-2 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-800/50"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 gap-2"
              asChild
            >
              <a
                href="https://github.com/Anas-Rajput12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </Button>

            <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/resume">
                <FileText className="w-4 h-4" />
                Resume
              </Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-t border-slate-800/50"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800/50 space-y-2">
                <Button variant="outline" size="sm" className="w-full border-slate-700 text-gray-300 hover:bg-slate-800/50 hover:text-blue-400 gap-2" asChild>
                
                  <a href="https://github.com/Anas-Rajput12" target="_blank" rel="noopener noreferrer"> <FaGithub className="w-4 h-4" /> GitHub </a>
                  
                </Button>

                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/resume" onClick={() => setIsOpen(false)}>
                    <FileText className="w-4 h-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
