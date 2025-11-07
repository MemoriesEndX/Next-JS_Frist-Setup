import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.post.createMany({
    data: [
      { title: 'Post Pertama', content: 'Ini isi post pertama.' },
      { title: 'Post Kedua', content: 'Ini isi post kedua.' },
    ],
  })
  console.log('✅ Seeder berhasil dijalankan!')
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
