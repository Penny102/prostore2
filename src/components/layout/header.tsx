// src/components/layout/header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-xl font-bold tracking-tight'>
            Prostore<span className='text-primary'>2</span>
          </span>
        </Link>

        {/* Navegación (Oculta en móviles, visible en pantallas medianas) */}
        <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
          <Link href='/shop' className='transition-colors hover:text-primary'>
            Shop
          </Link>
          <Link
            href='/categories'
            className='transition-colors hover:text-primary'
          >
            Kategorien
          </Link>
          <Link href='/about' className='transition-colors hover:text-primary'>
            Über uns
          </Link>
        </nav>

        {/* Contenedor de Acciones (SIEMPRE visible) */}
        <div className='flex items-center gap-3'>
          {/* Aquí se renderiza nuestro botón del sol/luna */}
          <ModeToggle />

          <Button
            render={<Link href='/cart' />}
            nativeButton={false}
            variant='outline'
          >
            Warenkorb (0)
          </Button>

          <Button render={<Link href='/login' />} nativeButton={false}>
            Anmelden
          </Button>
        </div>
      </div>
    </header>
  );
}
