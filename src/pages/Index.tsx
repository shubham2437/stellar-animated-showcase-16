
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Preload animations and transitions
    const preloadAnimations = () => {
      document.body.classList.add('preloaded');
    };

    window.addEventListener('load', preloadAnimations);
    
    // Scroll to top button visibility
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById('scroll-to-top');
      if (scrollToTopBtn) {
        if (window.scrollY > 500) {
          scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
          scrollToTopBtn.classList.add('opacity-100');
        } else {
          scrollToTopBtn.classList.remove('opacity-100');
          scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('load', preloadAnimations);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Scroll to top button */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-space-accent rounded-full opacity-0 pointer-events-none transition-all duration-300 shadow-lg shadow-space-accent/20 hover:bg-opacity-90 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
      
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Shubham Patel. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default Index;
