'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

type Course = {
  title: string;
  institution: string;
  year: number;
  category: string;
};

const courses: Course[] = [
  // Graduação
  { title: 'Ciência da Computação', institution: 'PUC-Goiás', year: 2015, category: 'Graduação' },
  { title: 'Engenharia de Software', institution: 'UniCesumar', year: 2020, category: 'Graduação' },

  // Front-end
  { title: 'Curso de React Avançado', institution: 'Alura', year: 2023, category: 'Front-end' },
  { title: 'Next.js na Prática', institution: 'Rocketseat', year: 2024, category: 'Front-end' },
  { title: 'TypeScript do Zero ao Avançado', institution: 'Udemy', year: 2023, category: 'Front-end' },

  // Back-end
  { title: 'Node.js com Express', institution: 'Alura', year: 2023, category: 'Back-end' },
  { title: 'Java Spring Boot', institution: 'Udemy', year: 2022, category: 'Back-end' },
  { title: 'GraphQL com Node.js', institution: 'Rocketseat', year: 2023, category: 'Back-end' },

  // UI/UX
  { title: 'UI Design com Figma', institution: 'Origamid', year: 2023, category: 'UI/UX' },
  { title: 'UX Writing', institution: 'Coursera', year: 2022, category: 'UI/UX' },

  // Análise de Dados
  { title: 'Power BI Completo', institution: 'Data Science Academy', year: 2023, category: 'Análise de Dados' },
  { title: 'Python para Análise de Dados', institution: 'Alura', year: 2022, category: 'Análise de Dados' },

  // Design
  { title: 'Design Gráfico', institution: 'Domestika', year: 2022, category: 'Design' },
  { title: 'Motion Design', institution: 'School of Motion', year: 2023, category: 'Design' },

  // IA
  { title: 'Machine Learning com Python', institution: 'Coursera', year: 2023, category: 'IA' },
  { title: 'Deep Learning', institution: 'Udemy', year: 2022, category: 'IA' },

  // Cybersecurity
  { title: 'Pós-Graduação em Segurança da Informação', institution: 'Faculdade Descomplica', year: 2021, category: 'Cybersecurity' },
  { title: 'Ethical Hacking', institution: 'TryHackMe', year: 2023, category: 'Cybersecurity' },

  // Outros
  { title: 'Gestão de Projetos', institution: 'PMI', year: 2022, category: 'Outros' },
  { title: 'Inglês Técnico', institution: 'Cultura Inglesa', year: 2023, category: 'Outros' },
];

const categories = [
  'Graduação',
  'Front-end',
  'Back-end',
  'UI/UX',
  'Análise de Dados',
  'Design',
  'IA',
  'Cybersecurity',
  'Outros',
];

export default function Courses() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="flex flex-col gap-4 mt-12">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Meus Cursos</h2>

      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category} className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full px-4 py-3 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="font-semibold text-gray-800 dark:text-white">{category}</span>
              <FiChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${openCategory === category ? 'transform rotate-180' : ''
                  }`}
              />
            </button>

            <AnimatePresence>
              {openCategory === category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-3 space-y-3 bg-gray-50 dark:bg-gray-800">
                    {courses
                      .filter((course) => course.category === category)
                      .map((course, index) => (
                        <div
                          key={index}
                          className="p-2 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
                        >
                          <h4 className="text-md font-semibold text-gray-800 dark:text-white">
                            {course.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {course.institution} &middot; {course.year}
                          </p>
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
