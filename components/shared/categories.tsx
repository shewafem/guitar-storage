'use client'

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/components/store/category';
import React from 'react'

interface Props {
  items: string[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    
    <div className={cn('inline-flex gap-1 bg-background rounded-2xl', className)}>
      <button className={cn('px-3 cursor-pointer font-mono rounded-md', categoryActiveId === null && 'bg-accent text-background')}>Все</button>
      {items.map((name, index) => (
        <a
          className={cn(
            'flex h-11 rounded-md px-5 text-foreground font-mono',
            categoryActiveId === index && 'bg-accent text-background',
          )}
          href={`/${name}`}
          key={index}>
          <button className='cursor-pointer'>{name}</button>
        </a>
      ))}
    </div>
  );
};