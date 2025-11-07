import Image from "next/image";
import Link from "next/link";
import { getAllPost } from "@/lib/api";
import PostList from "@/components/PostsList";



export default async function Page() {
  const posts = await getAllPost();

  return (
    <>
      <div className="main-heading">
        <h2>Daftar Tulisan</h2>
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
