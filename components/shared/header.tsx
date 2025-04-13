'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between p-4">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={48} height={48} />
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Button variant='outline'  className="flex items-center gap-3">
            <User size={16}/>
            Войти
          </Button>
        </div>
      </Container>
    </header>
  );
};