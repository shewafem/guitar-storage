import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SelectSuffix } from './select-suffix';

interface Props {
  keys: string[];
  suffixes: string[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ keys, suffixes, className }) => {
  return (
    <div className={cn('sticky top-0 bg-background py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex items-center justify-between ">
        <Categories items={keys} />
        <SelectSuffix items={suffixes}/>
      </Container>
    </div>
  );
};