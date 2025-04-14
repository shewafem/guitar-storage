'use client';

import {ModeToggle} from '@/components/ui';
import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src={"/images/logo-dark.png"}
              alt="Logo"
              width={48}
              height={48}
            />
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link href="/login" className="flex items-center gap-3">
            <User size={16}/>
            Войти
          </Link>
        </div>
      </Container>
    </header>
  );
};