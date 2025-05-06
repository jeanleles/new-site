import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export default function BlogPostCard({
  title,
  image,
  category,
  date,
  slug,
}: BlogPostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <Link href={`/blog/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="w-full h-36 object-cover"
        />
      </Link>
      <div className="p-4 space-y-2">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white hover:text-[var(--highlight)] transition-colors">
            {title}
          </h2>
        </Link>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 mt-2 px-2 py-1 rounded">
          {category}
        </span>
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      </div>
    </article>
  );
}
