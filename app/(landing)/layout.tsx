import React from 'react';

import Topbar from '@/components/topbar';
import { cn } from '@/lib/utils';
import SideBar from '@/components/(sidebar)';

const LandingLayout = (props: { children: React.ReactNode }) => {
   return (
      <section>
         {/* <TopBar></TopBar> */}
         <header>
            <nav>
               <Topbar></Topbar>
            </nav>
         </header>
         <main
            className={cn(
               'lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&has([is-navbar-minimal]):lg:pl-20]',
            )}
         >
            {props.children}
            <SideBar userLimitCount={0}></SideBar>
         </main>
         <footer>footer</footer>
         {/* <Footer></Footer> */}
      </section>
   );
};

export default LandingLayout;
