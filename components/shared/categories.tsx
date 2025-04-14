'use client'
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  items: string[];
  selectedKey: string | null;
  onKeyChange: (key: string) => void;
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, selectedKey, onKeyChange, className }) => {
  const handleClick = React.useCallback(
    (name: string) => () => onKeyChange(name),
    [onKeyChange]
  );

  return (
    <nav className={cn('flex flex-wrap justify-center gap-2 bg-background rounded-2xl p-2', className)} aria-label="Keys">
      {items.map((name) => (
        <button
          key={name}
          className={cn(
            'px-4 py-2 text-sm font-mono rounded-md transition-colors duration-200',
            selectedKey === name ? 'bg-accent text-background' : 'bg-gray-200 hover:bg-gray-300'
          )}
          onClick={handleClick(name)}
          aria-pressed="false"
          aria-label={`Select category: ${name}`}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};

export default React.memo(Categories);