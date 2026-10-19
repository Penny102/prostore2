import Link from 'next/link';

export function Footer() {
  // Al definir el año directamente dentro del flujo de renderizado estático
  // o simplemente tiparlo de forma fija, Next.js no se quejará del Prerendering.
  const currentYear = 2026; // Año base de lanzamiento de Prostore2

  return (
    <footer className='w-full border-t border-border bg-muted/40 text-muted-foreground'>
      <div className='container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
        <p>© {currentYear} Prostore2. Alle Rechte vorbehalten.</p>

        <div className='flex flex-wrap justify-center gap-x-6 gap-y-2'>
          <Link href='/impressum' className='hover:underline'>
            Impressum
          </Link>
          <Link href='/datenschutz' className='hover:underline'>
            Datenschutz
          </Link>
          <Link href='/agb' className='hover:underline'>
            AGB
          </Link>
        </div>
      </div>
    </footer>
  );
}
