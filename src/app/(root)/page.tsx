import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center py-24 px-4 text-center gap-4'>
      <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl text-balance'>
        Willkommen bei Prostore2 🚀
      </h1>
      <p className='max-w-[600px] text-muted-foreground text-base sm:text-lg'>
        Entdecke die besten Produkte auf einer modernen Plattform, gebaut mit
        Next.js 15, React 19 und Base UI.
      </p>
      <div className='mt-4'>
        <Button render={<Link href='/shop' />} nativeButton={false}>
          Jetzt shoppen
        </Button>
      </div>
    </main>
  );
}
