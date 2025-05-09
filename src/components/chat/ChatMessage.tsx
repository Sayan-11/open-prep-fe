import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isNew?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, isNew = false }) => {
  const isUser = role === 'user';
  
  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: 20 } : undefined}
      animate={isNew ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[85%]`}>  
        <div
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
            isUser ? 'bg-blue-100 ml-2' : 'bg-purple-100 mr-2'
          }`}
        >
          {isUser ? (
            <User size={16} className="text-blue-600" />
          ) : (
            <Bot size={16} className="text-purple-600" />
          )}
        </div>

        <div
          className={`px-4 py-3 rounded-lg ${
            isUser
              ? 'bg-blue-600 text-white rounded-tr-none'
              : 'bg-gray-100 text-gray-800 rounded-tl-none'
          }`}
        >
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p className="my-2 leading-tight" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
