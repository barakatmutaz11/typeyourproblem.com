```typescript
import React from 'react';
import { Message } from '../../types';
import { useToolsStore } from '../../store/tools.store';
import { formatDistanceToNow } from '../../utils/date';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { tools } = useToolsStore();
  const tool = message.toolId ? tools.find(t => t.id === message.toolId) : null;
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && tool && (
        <div className={`w-8 h-8 rounded-full ${tool.color} flex items-center justify-center flex-shrink-0`}>
          <tool.icon size={16} className="text-white" />
        </div>
      )}
      
      <div className={`max-w-[60%] ${isUser ? 'text-right' : ''}`}>
        {tool && !isUser && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {tool.name}
          </div>
        )}
        
        <div className={`
          inline-block rounded-lg overflow-hidden
          ${isUser 
            ? 'bg-primary-600 dark:bg-primary-500 text-white' 
            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
          }
        `}>
          {message.attachments?.map((attachment, index) => (
            <div key={index} className="mb-2">
              {attachment.type === 'image' && (
                <img 
                  src={attachment.content}
                  alt="Attached"
                  className="max-h-[120px] w-auto object-contain"
                />
              )}
            </div>
          ))}
          
          {message.content && (
            <div className="p-4">
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          )}
          
          <div className="px-4 pb-2 text-xs opacity-75">
            {formatDistanceToNow(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
}
```