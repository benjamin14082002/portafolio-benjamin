import { motion } from 'framer-motion'; // Ajustado de 'motion/react' a 'framer-motion' si usas la v10+
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Globe, Server, Database, Cpu, Layout, Layers } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-xs">
            BA
          </div>
          <span>
            Benjamín<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a>
          <a href="#tecnologias" className="hover:text-white transition-colors">Tecnologías</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">Full-Stack</span> con visión de ingeniería
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Soy <span className="text-white font-semibold">Benjamín Acevedo</span>. Desarrollo ecosistemas digitales escalables, uniendo backends robustos en Django con experiencias de usuario dinámicas desde <span className="text-white">Maipú, Chile</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#proyectos" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-orange-600 rounded-full hover:from-purple-500 hover:to-orange-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-1">
            Explorar Proyectos
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm">
            Hablemos
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-4">
            <span className="w-8 h-[2px] bg-purple-500 rounded-full"></span>
            Sobre Mí
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-6">
            <p className="leading-relaxed">
              Soy un desarrollador de software de <span className="text-white font-medium">Maipú</span> enfocado en transformar ideas en soluciones técnicas sólidas. Mi prioridad es construir arquitecturas limpias y escalables, con especial atención al detalle en cada línea de código.
            </p>
            <p className="leading-relaxed">
              Recientemente he centrado mi energía en el desarrollo de <span className="text-purple-400 font-semibold">Divina Artesanía</span>, un ecosistema full-stack donde logré conectar un backend robusto en Django con una interfaz moderna y eficiente.
            </p>
            <p className="leading-relaxed">
              Me apasiona el desafío de resolver problemas complejos y crear herramientas que no solo funcionen, sino que sean intuitivas y aporten valor real a los usuarios finales.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechStack() {
  const skills = [
    {
      name: "Frontend",
      techs: ["React", "TypeScript", "Tailwind CSS", "Ionic"],
      icon: <Layout className="w-5 h-5" color="#a855f7" />
    },
    {
      name: "Backend & OOP",
      techs: ["Python", "Django", "Java", "Node.js"],
      icon: <Server className="w-5 h-5" color="#f97316" />
    },
    {
      name: "Ciberseguridad",
      techs: ["Kali Linux", "Pentesting", "Seguridad Web"],
      icon: <Layers className="w-5 h-5" color="#a855f7" />
    },
    {
      name: "Infraestructura",
      techs: ["Git", "PostgreSQL", "Linux", "Vercel"],
      icon: <Database className="w-5 h-5" color="#f97316" />
    }
  ];

  return (
    <section id="tecnologias" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Stack Tecnológico</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:border-purple-500/40 hover:bg-zinc-900/60 transition-all group relative overflow-hidden"
            >
              {/* Sutil resplandor de fondo al hacer hover */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-colors" />

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-zinc-800/50 rounded-lg group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{skill.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.techs.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wider px-2.5 py-1 bg-zinc-950 text-zinc-400 rounded-md border border-zinc-800 group-hover:border-zinc-700 group-hover:text-zinc-200 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Proyectos Destacados</h2>
          <p className="text-xl text-zinc-400">El ecosistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 font-bold">Divina Artesanía</span></p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group relative bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="h-64 bg-zinc-800 relative overflow-hidden">
              <img src="https://picsum.photos/seed/django-web/800/600?blur=2" alt="Plataforma Web Django" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all group-hover:scale-105 duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Server className="w-3.5 h-3.5" /> Web/Django
              </div>
            </div>

            <div className="p-8 relative z-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                Plataforma Web
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed flex-1">
                Backend robusto y catálogo principal de Divina Artesanía. Desarrollado en Django para gestionar inventarios, usuarios y transacciones de forma segura y eficiente.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 rounded-full text-xs font-semibold border border-purple-500/20">Django</span>
                <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20">Python</span>
                <span className="px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-xs font-semibold border border-zinc-700">PostgreSQL</span>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/benjamin14082002/Divina-Artesania-Django" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 text-white rounded-xl font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700">
                  <Code className="w-4 h-4" /> Código
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="group relative bg-zinc-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="h-64 bg-zinc-800 relative overflow-hidden">
              <img src="https://picsum.photos/seed/ionic-app/800/600?blur=2" alt="Aplicación Móvil Ionic" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all group-hover:scale-105 duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Smartphone className="w-3.5 h-3.5" /> App/Ionic
              </div>
            </div>

            <div className="p-8 relative z-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                Aplicación Móvil
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed flex-1">
                Extensión móvil para clientes finales. Permite explorar el catálogo completo de productos y realizar pedidos directamente desde dispositivos Android e iOS.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-orange-500/10 text-orange-400 rounded-full text-xs font-semibold border border-orange-500/20">Ionic</span>
                <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20">TypeScript</span>
                <span className="px-3 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold border border-blue-600/20">React</span>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/benjamin14082002/Divina-Artesania-Django" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 text-white rounded-xl font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700">
                  <Code className="w-4 h-4" /> Código
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    { title: "Ingeniería Civil Informática", company: "3er Año", period: "En curso" },
    { title: "Curso Business Intelligence", company: "Certificación de Verano", period: "2026" },
    { title: "Proyecto Divina Artesanía", company: "Full-Stack Developer", period: "2025 - Actualidad" },
  ];

  return (
    <section className="py-20 px-6 bg-zinc-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
          <Layers className="text-orange-500" /> Trayectoria y Educación
        </h2>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between items-center p-4 border-l-2 border-purple-500 bg-white/5 rounded-r-xl">
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.company}</p>
              </div>
              <span className="text-xs font-mono text-purple-400">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const formAction = "https://formspree.io/f/mjgedqgq";

  return (
    <section id="contacto" className="py-32 px-6 bg-zinc-900/30 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ponte en Contacto</h2>
          <p className="text-xl text-zinc-400">¿Tienes un proyecto en mente o simplemente quieres saludar?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form
              action={formAction}
              method="POST"
              className="space-y-6 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2 ml-1">Nombre</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-zinc-600"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2 ml-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-zinc-600"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2 ml-1">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none placeholder:text-zinc-600"
                  placeholder="¿En qué te puedo ayudar?"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-xl font-bold hover:from-purple-500 hover:to-orange-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Mis Redes</h3>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/benjamin14082002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-purple-500/50 hover:bg-zinc-900 transition-all group hover:-translate-y-1">
                <div className="p-3.5 bg-black rounded-xl group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors text-zinc-400">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white mb-0.5">GitHub</div>
                  <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">@benjamin14082002</div>
                </div>
              </a>
              <a href="mailto:benjaacevedoleon@gmail.com" className="flex items-center gap-5 p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-orange-500/50 hover:bg-zinc-900 transition-all group hover:-translate-y-1">
                <div className="p-3.5 bg-black rounded-xl group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-colors text-zinc-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white mb-0.5">Email</div>
                  <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">benjaacevedoleon@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/10 text-zinc-500 text-sm">
      <p>© {new Date().getFullYear()} Portafolio. Construido con React & Tailwind.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}