import 'dotenv/config'; // Pastikan dotenv dimuat
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: env('DATABASE_URL'), // Mengambil DATABASE_URL dari .env
  },
});
