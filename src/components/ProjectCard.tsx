import Link from 'next/link';

interface ProjectCardProps {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  demo: string;
  github: string;
}

export default function ProjectCard({
  titulo,
  descricao,
  tecnologias,
  demo,
  github,
}: ProjectCardProps) {
  return (
    <div className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{titulo}</h2>
      <p className="mb-2 text-gray-700 dark:text-gray-300">{descricao}</p>

      <ul className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
        {tecnologias.map((tech, i) => (
          <li key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <Link
          href={demo}
          target="_blank"
          className="px-4 py-2 rounded-md border border-highlight text-highlight font-medium hover:bg-highlight hover:text-white transition"
        >
          Demo
        </Link>
        <Link
          href={github}
          target="_blank"
          className="px-4 py-2 rounded-md border border-highlight text-highlight font-medium hover:bg-highlight hover:text-white transition"
        >
          Github
        </Link>
      </div>
    </div>
  );
}
