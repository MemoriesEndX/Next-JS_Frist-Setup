import Link from "next/link";
import { Post } from "@/types/post";


interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h2>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
