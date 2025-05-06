'use client';

import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-xl text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-colors"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}
