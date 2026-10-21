// prisma.config.ts
import 'dotenv/config'; // Carga automáticamente tu archivo .env
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Aquí es donde Prisma 7 lee la URL de Vercel de manera segura
    url: env('DATABASE_URL'),
  },
});
