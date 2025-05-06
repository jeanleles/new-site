import BlogPostCard from './BlogPostCard';

const recentPosts = [
  {
    id: 4,
    title: 'Dominando o TypeScript no Front-end',
    image: '/audi.png',
    category: 'TypeScript',
    date: '2025-04-20',
    slug: 'audio-no-html5',
  },
  {
    id: 5,
    title: 'Hospedando sites com Vercel',
    image: '/angularcert.png',
    category: 'DevOps',
    date: '2025-04-10',
    slug: 'curso-angular-alura',
  },
  {
    id: 6,
    title: 'Dark mode com Tailwind e Next.js',
    image: '/eng.png',
    category: 'UI/UX',
    date: '2025-03-25',
    slug: 'curso-angular-alura3',
  },
  {
    id: 7,
    title: 'Configurando o WSL',
    image: '/audi.png',
    category: 'Next.js',
    date: '2024-12-15',
    slug: 'curso-angular-alura2',
  },
];

export default function RecentPosts() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Últimos Posts</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {recentPosts.map((post) => (
          <BlogPostCard key={post.slug} {...post} />
        ))}
      </div>
      <div className="mt-6">
        <a
          href="/blog"
          className="text-highlight font-semibold hover:underline"
        >
          Ver mais posts
        </a>
      </div>
    </section>
  );
}
