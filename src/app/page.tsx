import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt, FaNodeJs, FaVuejs } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header / Navbar */}
      <header className="py-6 px-4 md:px-8 flex justify-center md:justify-between items-center border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-10">
        <nav>
          <ul className="flex gap-4 md:gap-6">
            <li><a href="#about" className="text-sm md:text-base hover:underline">Sobre mí</a></li>
            <li><a href="#experience" className="text-sm md:text-base hover:underline">Experiencia</a></li>
            <li><a href="#projects" className="text-sm md:text-base hover:underline">Proyectos</a></li>
            <li><a href="#skills" className="text-sm md:text-base hover:underline">Habilidades</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-20 px-4 md:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Juan Gutiérrez</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">Software Developer</h2>
        <p className="text-xl max-w-2xl mb-8">
          Desarrollador especializado en tecnologías web modernas, con enfoque en la creación de aplicaciones
          escalables y con experiencia en el ciclo completo de desarrollo.
        </p>
        <div className="flex gap-4">
          <a
            className="bg-black text-white dark:bg-white dark:text-black py-3 px-8 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contáctame
          </a>
          <a
            href="#projects"
            className="border border-black dark:border-white py-3 px-8 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Proyectos
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden">
              {/* Puedes añadir tu foto aquí */}
              <Image
                src="/images/juan_portfolio.png"
                alt="Juan Gutiérrez"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <div>
              <p className="mb-4">
                Soy un desarrollador de software con experiencia en el desarrollo web frontend,
                especializado en React, Next.js y TypeScript. Mi enfoque se centra en la creación
                de aplicaciones web modernas, interactivas y responsivas con especial atención al detalle.
              </p>
              <p className="mb-4">
                Cuento con experiencia en el desarrollo de aplicaciones web empresariales,
                portales de productos financieros y herramientas de gestión. Mi objetivo es
                combinar funcionalidad y diseño para crear experiencias de usuario excepcionales.
              </p>
              <p>
                Tengo un fuerte interés en las nuevas tecnologías y metodologías de desarrollo,
                lo que me mantiene en constante aprendizaje y crecimiento profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Laboral</h2>

          {/* DeCampoACampo */}
          <div className="mb-12 relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 pb-2">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-black dark:bg-white rounded-full"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-2xl font-bold">DeCampoACampo</h3>
              <span className="text-gray-600 dark:text-gray-400">Ago. 2023 - Actualidad</span>
            </div>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-4">Frontend Developer</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Migracion de sistema de compra y venta de hacienda</li>
              <li>Utilizacion de React.Js con Typescript para la creacion del sitio</li>
              <li>Creacion de libreria de componentes personalizada utilizando Styled Components</li>
            </ul>
          </div>

          {/* Global Task */}
          <div className="mb-12 relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 pb-2">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-black dark:bg-white rounded-full"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-2xl font-bold">Global Task</h3>
              <span className="text-gray-600 dark:text-gray-400">Nov. 2023 - Ago. 2024</span>
            </div>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-4">Frontend Developer</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarrollo de portal de productos y herramientas financieras utilizando NextJS con TypeScript</li>
              <li>Desarrollo de BackOffice para gestionar el portal utilizando ReactJS con Typescript</li>
            </ul>
          </div>

          {/* FK TECH */}
          <div className="mb-12 relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 pb-2">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-black dark:bg-white rounded-full"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-2xl font-bold">FK TECH</h3>
              <span className="text-gray-600 dark:text-gray-400">May. 2022 - Oct. 2023</span>
            </div>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-4">FullStack Developer</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Creación y desarrollo de e-commerce para compañia de venta de Gift Cards utilizando NextJS con Typescript y MaterialUI</li>
              <li>Creación de Tests unitarios utilizando React Testing Library y Jest</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project Card 1 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/oh_gift_card.jpg"
                  alt="Oh Gift Card Project"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Oh Gift Card</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Sistema de administración para tiendas online con gestión de inventario y analíticas de ventas.

                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">React</span>
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Next.Js</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-medium hover:underline">Ver detalles</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src="/images/decampoacampo.jpg"
                  alt="Oh Gift Card Project"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">De Campo A Campo</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Aplicacion web y mobile para la compra y venta de hacienda en el mercado argentino.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">React.js</span>
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Typescript</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-medium hover:underline">Ver detalles</a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src="/images/stradegy.jpg"
                  alt="Oh Gift Card Project"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Portal de Productos Financieros</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Portal web para visualización y gestión de productos financieros desarrollado con Next.js, TypeScript y TailwindCSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Next.Js</span>
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">TypeScript</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-sm font-medium hover:underline">Ver detalles</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Habilidades técnicas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <RiReactjsFill size={30} color="#61DAFB" />
              </div>
              <h3 className="font-medium">ReactJS</h3>
            </div>
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <RiNextjsFill size={32} color="currentColor" />
              </div>
              <h3 className="font-medium">NextJS</h3>
            </div>
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <BiLogoTypescript size={30} color="#3178C6" />
              </div>
              <h3 className="font-medium">TypeScript</h3>
            </div>
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <FaNodeJs size={30} color="#339933" />
              </div>
              <h3 className="font-medium">NodeJS</h3>
            </div>
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <FaVuejs size={30} color="#4FC08D" />
              </div>
              <h3 className="font-medium">VueJS</h3>
            </div>
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <BiLogoPostgresql size={30} color="#336791" />
              </div>
              <h3 className="font-medium">PostgreSQL</h3>
            </div>
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <SiMongodb size={30} color="#47A248" />
              </div>
              <h3 className="font-medium">MongoDB</h3>
            </div>
            <div className="p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <FaGitAlt size={30} color="#F05032" />
              </div>
              <h3 className="font-medium">Git</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 text-center border-t bg-gray-800 border-gray-200 dark:border-gray-800 ">
        <p>© {new Date().getFullYear()} Juan Gutiérrez. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://linkedin.com/in/gutierrezjuan412" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-80">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-80">
            <FaGithub />
          </a>
          <a href="mailto:gutierrezjuan.412@gmail.com" className="text-xl hover:opacity-80">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
}