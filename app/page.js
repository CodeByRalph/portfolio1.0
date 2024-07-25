import Hero from '@/components/Hero'
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  // Socials
  // Linkedin, Github,
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
