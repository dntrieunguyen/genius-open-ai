'use client';
import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { useSideBarStore } from '@/app/stores/sidebar-store';

const Topbar = () => {
   const { handleOpenOrClose } = useSideBarStore();
   return (
      <div
         className={cn(
            'flex items-center p-4 justify-between static top-0 z-30',
            'lg:hidden',
         )}
      >
         <Logo></Logo>
         <Button variant="ghost" size="icon" onClick={handleOpenOrClose}>
            <Menu></Menu>
         </Button>
      </div>
   );
};

export default Topbar;
