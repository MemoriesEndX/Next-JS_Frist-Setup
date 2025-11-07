"use client"

import { useEffect, useState } from "react"

export default function PostsPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/api/posts-list")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📝 Daftar Postingan
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada postingan.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">ID</th>
                  <th className="py-3 px-4 text-left font-semibold">Judul</th>
                  <th className="py-3 px-4 text-left font-semibold">Konten</th>
                  <th className="py-3 px-4 text-left font-semibold">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post: any, index) => (
                  <tr
                    key={post.id}
                    className={`border-b hover:bg-indigo-50 transition ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 text-gray-700">{post.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {post.title}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{post.content}</td>
                    <td className="py-3 px-4 text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
