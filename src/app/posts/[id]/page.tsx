import { getDetailPost } from "@/lib/api";

interface PageProps {
  params: {
    id: string; // Next.js selalu mengirim param sebagai string
  };
}

export default async function Page({ params }: PageProps) {
  const id = Number(params.id); // ubah ke number
  const post = await getDetailPost(id); // panggil API detail

  console.log("Post detail:", post);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Detail</h1>
      <p><strong>Post ID:</strong> {id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
}
