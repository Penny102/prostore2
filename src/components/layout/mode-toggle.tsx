'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant='outline'
      onClick={toggleTheme}
      aria-label='Theme umschalten'
      className='w-10 h-10 flex items-center justify-center rounded-md border border-border bg-background cursor-pointer relative'
    >
      {/* El sol se oculta en modo claro y se muestra en modo oscuro */}
      <Sun className='h-5 w-5 text-yellow-500 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 absolute' />

      {/* La luna se muestra en modo claro y se oculta en modo oscuro */}
      <Moon className='h-5 w-5 text-slate-700 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90 absolute' />
    </Button>
  );
}
