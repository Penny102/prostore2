import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className='flex min-h-[60vh] flex-col items-center justify-center text-center px-4 gap-4'>
      <h1 className='text-6xl font-extrabold tracking-tight text-primary'>
        404
      </h1>
      <h2 className='text-2xl font-bold tracking-tight'>
        Seite nicht gefunden
      </h2>
      <p className='max-w-[400px] text-muted-foreground text-sm'>
        Die gesuchte Seite existiert leider nicht oder wurde verschoben.
      </p>
      <div className='mt-2'>
        <Button render={<Link href='/' />} nativeButton={false}>
          Zurück zur Startseite
        </Button>
      </div>
    </main>
  );
}
