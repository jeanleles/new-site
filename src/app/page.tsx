//import GithubCalendar from "@/components/GithubCalendar";
import RecentPosts from "@/components/RecentPosts";
import Staks from "@/components/Stacks";

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Olá, eu sou o <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Jean Leles</span> 👋
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Sou Analista de Sistemas apaixonado por tecnologia, programação e soluções criativas.
      </p>
      <div>
        <a
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Saiba mais sobre mim
        </a>
      </div>
      <Staks />
      <RecentPosts />
    </section>
  );
}
