Oke! 🔥 Berikut versi **singkat dan rapi** dari README kamu — cocok untuk GitHub tapi tetap terlihat profesional 👇

---

# 🚀 Next.js First Setup (Tailwind + Prisma)

Project ini adalah **template awal** menggunakan **Next.js (App Router)** dengan integrasi **Tailwind CSS** dan **Prisma ORM** untuk CRUD sederhana.

---

## 🧩 Tech Stack

* **Next.js 15+**
* **Tailwind CSS**
* **Prisma ORM**
* **SQLite / PostgreSQL**
* **TypeScript**

---

## ⚙️ Setup

### 1️⃣ Clone & Install

```bash
git clone https://github.com/MemoriesEndX/Next-JS_Frist-Setup.git
cd Next-JS_Frist-Setup
npm install
```

### 2️⃣ Konfigurasi `.env`

```bash
DATABASE_URL="file:./dev.db"
```

### 3️⃣ Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

---

## 🧠 API Route

`/app/api/posts-list/route.ts`

```ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}
```

---

## 🎨 UI (Tailwind)

`/app/posts/page.tsx`

```tsx
"use client"
import { useEffect, useState } from "react"

export default function PostsPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/api/posts-list")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Daftar Postingan</h1>
      <table className="w-full border border-gray-300 rounded-xl overflow-hidden shadow-md">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="p-3 text-left">Judul</th>
            <th className="p-3 text-left">Konten</th>
            <th className="p-3 text-left">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p: any) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{p.title}</td>
              <td className="p-3">{p.content}</td>
              <td className="p-3 text-sm text-gray-500">
                {new Date(p.createdAt).toLocaleDateString("id-ID")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

---

## 🖥️ Jalankan

```bash
npm run dev
```

Akses: [http://localhost:3000](http://localhost:3000)

---

