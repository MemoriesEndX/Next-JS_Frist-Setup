import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostList from "@/components/PostsList";



export default async function Home() {
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di NextJS News</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dolor,
          illum neque voluptatum culpa placeat repudiandae dolorum, velit nemo
          quas enim ea dolorem assumenda porro saepe sit. Officiis, officia eos.
        </p>
      </div>

      <PostList posts={posts}/>

  
    </>
  );
}
