import React from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMessagesStore } from '../../store/messages.store';
import { useToolsStore } from '../../store/tools.store';

export function ChatFab() {
  const { clearMessages } = useMessagesStore();
  const { clearActiveTools } = useToolsStore();

  const handleNewChat = () => {
    clearMessages();
    clearActiveTools();
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleNewChat}
      className={`
        fixed right-6 bottom-6 z-50
        w-14 h-14 rounded-full
        bg-primary-600 dark:bg-primary-500
        text-white shadow-lg
        hover:bg-primary-700 dark:hover:bg-primary-600
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
        transition-colors duration-200
        flex items-center justify-center
      `}
      aria-label="New Chat"
    >
      <MessageSquarePlus size={24} />
    </motion.button>
  );
}