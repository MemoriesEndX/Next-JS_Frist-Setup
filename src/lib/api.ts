import { Post } from "../types/post";

// Ambil 5 post terakhir
export async function getLastPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const posts = await res.json();
  console.log(posts);
  return posts;
}

// Ambil detail post berdasarkan ID
export async function getDetailPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post detail");
  const post = await res.json();
  console.log(post);
  return post;
}

// Ambil 5 post terakhir
export async function getAllPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const posts = await res.json();
  console.log(posts);
  return posts;
}

