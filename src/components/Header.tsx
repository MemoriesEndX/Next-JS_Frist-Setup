// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import ThemeSwither from "./ThemeSwither";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image
              src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
        </div>

        <div className="nav-links">
          <Link href="/">Home</Link>
           <Link href="/posts">Post</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <ThemeSwither />
       
      </nav>
    </header>
  );
}

export default Header;
