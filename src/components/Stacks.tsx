'use client';

import Image from 'next/image';

const staks = [
  { name: 'HTML5', logo: '/images/staks/html5.svg' },
  { name: 'CSS3', logo: '/images/staks/css3.svg' },
  { name: 'JavaScript', logo: '/images/staks/javascript.svg' },
  { name: 'Typescript', logo: '/images/staks/typescript.svg' },
  { name: 'Angular', logo: '/images/staks/angular.svg' },
  { name: 'React', logo: '/images/staks/react.svg' },
  { name: 'Next.js', logo: '/images/staks/nextjs.svg' },
  { name: 'GraphQL', logo: '/images/staks/graphql.svg' },
  { name: 'Node.js', logo: '/images/staks/nodejs.svg' },
  { name: 'Tailwind', logo: '/images/staks/tailwindcss.svg' },
  { name: 'MySQL', logo: '/images/staks/mysql.svg' },
  { name: 'WordPress', logo: '/images/staks/wordpress.svg' },
  { name: 'Git', logo: '/images/staks/git.svg' },
  { name: 'Figma', logo: '/images/staks/figma.svg' },
  { name: 'Power BI', logo: '/images/staks/powerbi.svg' },
];

export default function Staks() {
  return (
    <section className="mt-12">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Minhas staks
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {staks.map((stak) => (
          <div
            key={stak.name}
            className="group flex gap-2 items-center justify-center px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md transition-all duration-300 hover:border-[#00DF89]"
          >
            <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={stak.logo}
                alt={stak.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-center text-sm text-gray-800 dark:text-gray-200">
              {stak.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
