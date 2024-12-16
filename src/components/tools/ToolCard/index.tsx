import React from 'react';
import { AITool } from '../../../types';
import { ToolIcon } from './ToolIcon';
import { ToolInfo } from './ToolInfo';
import { ToolActions } from './ToolActions';
import { useToolCard } from './useToolCard';

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { isHovered, dragHandlers, handleMouseEnter, handleMouseLeave } = useToolCard();

  return (
    <div 
      {...dragHandlers}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border 
        transition-all duration-200 ease-in-out
        ${isHovered ? 'shadow-md border-primary-200 dark:border-primary-700 scale-[1.02]' : 'border-gray-100 dark:border-gray-700'}
        cursor-move
      `}
    >
      <div className="flex items-center gap-3">
        <ToolIcon tool={tool} isHovered={isHovered} />
        <div className="flex-1">
          <ToolInfo tool={tool} />
          <ToolActions tool={tool} isHovered={isHovered} />
        </div>
      </div>
    </div>
  );
}