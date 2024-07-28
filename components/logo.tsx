import { cn } from '@/lib/utils';
import { Brain } from 'lucide-react';
import { Poppins } from 'next/font/google';

interface LogoProps {
   className?: string;
}

const poppins = Poppins({ weight: '700', subsets: ['latin'] });

const Logo: React.FC<LogoProps> = ({ className }) => {
   return (
      <div className={cn('flex items-center', className)}>
         <span className={cn('ml-2 font-bold text-3xl', poppins.className)}>
            <Brain></Brain>
            Genius
         </span>
      </div>
   );
};

export default Logo;
