'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [zoom, setZoom] = useState(100);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Muhammad_Anas_Qadri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 dark:border-gray-800">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Resume
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Muhammad Anas Qadri - Full Stack Developer
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <div className="hidden md:flex items-center gap-2 mr-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleZoomOut}
                    disabled={zoom <= 50}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium min-w-[3rem] text-center">
                    {zoom}%
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleZoomIn}
                    disabled={zoom >= 150}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>

                {/* Download Button */}
                <Button
                  onClick={handleDownload}
                  className="gap-2"
                  size="sm"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>

                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-950 p-4">
              <div className="max-w-4xl mx-auto">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full min-h-[600px] rounded-lg shadow-lg bg-white"
                  style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                  title="Resume PDF"
                />
              </div>
            </div>

            {/* Mobile Download Button */}
            <div className="md:hidden p-4 border-t border-gray-200 dark:border-gray-800">
              <Button
                onClick={handleDownload}
                className="w-full gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
