'use client';

import React from 'react';

type Course = {
  title: string;
  institution: string;
  year: number;
};

const courses: Course[] = [
  { title: 'Ciência da Computação', institution: 'PUC-Goiás', year: 2015 },
  { title: 'Pós-Graduação em Segurança da Informação', institution: 'Faculdade Descomplica', year: 2021 },
  { title: 'Curso de React Avançado', institution: 'Alura', year: 2023 },
  { title: 'Next.js na Prática', institution: 'Rocketseat', year: 2024 },
];

export default function Courses() {
  return (
    <section className="flex flex-col gap-4 mt-12">
      <h2 className="text-xl font-bold text-highlight">Meus Cursos</h2>
      {courses.map((course, index) => (
        <div
          key={index}
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {course.institution} &middot; {course.year}
          </p>
        </div>
      ))}
    </section>
  );
}
