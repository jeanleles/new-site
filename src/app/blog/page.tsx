import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';

const mockPosts = [
  {
    id: 1,
    title: 'Como comecei na programação',
    image: '/angularcert.png',
    category: 'Carreira',
    date: '2024-12-01',
    slug: 'curso-angular-alura',
  },
  {
    id: 2,
    title: 'Entendendo o Next.js 14',
    image: '/audi.png',
    category: 'Next.js',
    date: '2024-11-15',
    slug: 'curso-angular-alura2',
  },
  {
    id: 3,
    title: 'Melhores práticas com Tailwind CSS',
    image: '/eng.png',  
    category: 'Front-end',
    date: '2024-10-28',
    slug: 'curso-angular-alura3',
  },
  {
    id: 4,
    title: 'Configurando o WSL',
    image: '/audi.png',
    category: 'Next.js',
    date: '2024-12-15',
    slug: 'curso-angular-alura4',
  },
];

export default function BlogPage() {
  return (
    <main className="w-full max-w-[768px] mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <input
        type="text"
        placeholder="Buscar post..."
        className="w-full p-2 mb-6 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {mockPosts.map((post) => (          
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
