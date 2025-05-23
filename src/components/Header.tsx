'use client';

import Link from "next/link";
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  return (
    <header className="flex flex-col w-full max-w-[768px] mx-auto p-4 gap-6 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/jean.jpg"
            alt="Jean Leles"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="text-left">
            <h1 className="text-2xl font-bold">Jean Leles</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Analista de Sistemas | Desenvolvedor Web
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-2xl text-gray-700 dark:text-gray-300">
          <a href="https://linkedin.com/in/jeanleles" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jeanleles" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithub />
          </a>
          <a href="https://twitter.com/jeanleles" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <FaXTwitter />
          </a>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-700" />

      <nav className="flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-4">
          <ul className="flex gap-6 text-gray-700 dark:text-gray-300 text-md">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Sobre</Link></li>
            <li><Link href="/projects">Projetos</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
