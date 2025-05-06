'use client';

import { useState } from 'react';

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    // ...
  };

  return (
    <button 
      onClick={toggleLanguage} 
      className="text-sm text-gray-700 dark:text-gray-300 border p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {language === 'pt' ? 'PT' : 'EN'}
    </button>
  );
}
