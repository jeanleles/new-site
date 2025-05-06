'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const projetosData = [
  {
    titulo: 'Runnapp',
    descricao: 'Aplicação para leitura e análise de arquivos GPX de treinos de corrida.',
    tecnologias: ['Next.js', 'React', 'Tailwind', 'GPX.js'],
    demo: 'https://runnapp.vercel.app',
    github: 'https://github.com/jeanleles/runnapp',
  },
  {
    titulo: 'Portfólio Pessoal',
    descricao: 'Meu site pessoal com blog, projetos e currículo.',
    tecnologias: ['Next.js', 'Typescript', 'Tailwind', 'Vercel'],
    demo: 'https://jeanleles.dev',
    github: 'https://github.com/jeanleles/portfolio',
  },
];

export default function ProjetosPage() {
  const [busca, setBusca] = useState('');

  const projetosFiltrados = projetosData.filter((projeto) =>
    projeto.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="max-w-[768px] mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Projetos</h1>

      <input
        type="text"
        placeholder="Buscar projeto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full px-4 py-2 mb-8 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      />

      <div className="flex flex-col gap-6">
        {projetosFiltrados.map((projeto, index) => (
          <ProjectCard key={index} {...projeto} />
        ))}
      </div>
      <div className="mt-12">
        <a
          href="https://github.com/jeanleles?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Mais projetos no Github
        </a>
      </div>
    </section>
  );
}
