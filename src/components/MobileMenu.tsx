'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Link from 'next/link';

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    navRef.current = document.querySelector('header nav');

    const handleScroll = () => {
      if (navRef.current) {
        const navBottom = navRef.current.getBoundingClientRect().bottom;
        setShouldShowButton(navBottom < 0);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!shouldShowButton) {
      setShowMenu(false);
    }
  }, [shouldShowButton]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[768px] z-50 px-4">
      <div className="relative flex justify-end">
        <AnimatePresence>
          {shouldShowButton && (
            <motion.button
              aria-label={showMenu ? "Fechar menu" : "Abrir menu"}
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setShowMenu(!showMenu)}
              className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 shadow-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: showMenu ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              ref={menuRef}
              role="menu"
              aria-label="Menu de navegação"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute top-12 right-0 w-[200px] bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-50"
            >
              <ul className="flex flex-col p-4 gap-4 text-gray-800 dark:text-gray-200" role="menu">
                <li role="menuitem" onClick={() => setShowMenu(false)}>
                  <Link href="/" className="block px-2 py-1 -mx-2 -my-1 rounded-md hover:text-blue-500 hover:underline hover:decoration-2 hover:underline-offset-2 hover:decoration-blue-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li role="menuitem" onClick={() => setShowMenu(false)}>
                  <Link href="/about" className="block px-2 py-1 -mx-2 -my-1 rounded-md hover:text-blue-500 hover:underline hover:decoration-2 hover:underline-offset-2 hover:decoration-blue-500 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li role="menuitem" onClick={() => setShowMenu(false)}>
                  <Link href="/projects" className="block px-2 py-1 -mx-2 -my-1 rounded-md hover:text-blue-500 hover:underline hover:decoration-2 hover:underline-offset-2 hover:decoration-blue-500 transition-colors">
                    Projetos
                  </Link>
                </li>
                <li role="menuitem" onClick={() => setShowMenu(false)}>
                  <Link href="/blog" className="block px-2 py-1 -mx-2 -my-1 rounded-md hover:text-blue-500 hover:underline hover:decoration-2 hover:underline-offset-2 hover:decoration-blue-500 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>

              <hr className="border-gray-300 dark:border-gray-700 mx-4" />

              <div className="flex justify-center gap-4 py-3 text-xl text-gray-600 dark:text-gray-300">
                <a href="https://linkedin.com/in/jeanleles" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/jeanleles" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/jeanleles" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:text-blue-500 transition-colors">
                  <FaXTwitter />
                </a>
              </div>

              <hr className="border-gray-300 dark:border-gray-700 mx-4" />

              <div className="flex justify-center items-center gap-4 py-3">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
