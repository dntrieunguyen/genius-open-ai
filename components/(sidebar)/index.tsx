'use client';
import React from 'react';
import { useSideBarStore } from '@/app/stores/sidebar-store';
import { cn } from '@/lib/utils';
import Logo from '../logo';
import SideBarToggle from './sidebar-toggle';

interface SideBarProps {
   className?: string;
   isProPlan?: boolean;
   userLimitCount: number;
}

const SideBar: React.FC<SideBarProps> = ({
   className,
   isProPlan,
   userLimitCount,
}) => {
   const { isMinimal } = useSideBarStore();
   return (
      <div className={cn('text-white h-20 pl-7 pr-6')}>
         <div className={cn('flex items-center justify-between w-full')}>
            {!isMinimal && <Logo></Logo>}
            <SideBarToggle></SideBarToggle>
         </div>
         <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
            {/* <Navbar></Navbar> */}
         </div>
         <div className={cn()}></div>
      </div>
   );
};

export default SideBar;
