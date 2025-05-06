// app/about/page.tsx
import Image from 'next/image';
import Staks from "@/components/Stacks";
import Courses from '@/components/Courses';

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col justify-center gap-6">    
        <div className="flex flex-col gap-4 max-w-2xl">
          <Image
            src="/jean.jpg"
            alt="Jean Leles"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold">Jean Leles</h1>
          <p className="text-gray-600 dark:text-gray-300">
          Sou formado em Ciência da Computação pela PUC-Goiás e tenho pós-graduação em Segurança da Informação pela Faculdade Descomplica. 
          Atualmente trabalho como Analista de Sistemas, atuando como desenvolvedor web front-end com foco em Angular e Java.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
          Com 9 anos de experiência nas áreas de Cyber Security e infraestrutura de TI. E desenvolvi websites e aplicações web para empresas de pequeno 
          e médio porte, usando tecnologias como HTML5, CSS3, Javascript, React, Next.js, Node.js, GraphQL e WordPress.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
          Sou um apaixonado por tecnologia, constantemente buscando aprender algo novo e me aprofundar nas áreas em que atuo!
          </p>
        </div>
        <div>
          <a
            href="/cv"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Meu CV
          </a>
        </div>
      </section>
      <Staks />
      <Courses />
    </>
  );
}
