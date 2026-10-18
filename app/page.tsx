import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="certifications" title="Certifications">
          <Certifications />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}