import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

// GET: ambil semua post
export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

// POST: tambah post baru
export async function POST(request: Request) {
  const { title, content } = await request.json()
  const newPost = await prisma.post.create({
    data: { title, content },
  })
  return NextResponse.json(newPost)
}
