'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <Link href="/">Jean Leles</Link>
      </div>
      <div className="flex space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contato">Contato</Link>
      </div>
    </nav>
  );
};

export default Navbar;
