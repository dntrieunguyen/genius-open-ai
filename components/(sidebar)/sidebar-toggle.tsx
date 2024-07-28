import { useSideBarStore } from '@/app/stores/sidebar-store';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const SideBarToggle = () => {
   const { isMinimal, handleChangeSideBar, handleOpenOrClose } =
      useSideBarStore();
   return (
      <>
         <div
            className={cn('cursor-pointer hidden', 'lg:block')}
            onClick={handleChangeSideBar}
            is-navbar-minimal={isMinimal ? 'true' : undefined}
         >
            <Image
               src={`/icon/menu-${isMinimal ? 'open' : 'close'}.svg`}
               width={24}
               height={24}
               alt="navbar icon"
            ></Image>
         </div>
         <Button
            variant="ghost"
            className="lg:hidden"
            size="icon"
            onClick={handleOpenOrClose}
         ></Button>
      </>
   );
};

export default SideBarToggle;
