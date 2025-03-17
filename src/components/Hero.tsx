
import { useEffect, useState } from 'react';
import GlowingText from './GlowingText';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4">
      <div 
        className={`text-center max-w-3xl mx-auto transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="inline-block mb-3 px-4 py-1 rounded-full bg-opacity-30 backdrop-blur-sm space-border">
          <span className="text-sm text-space-highlight">Software Engineer</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block">Hi, I'm </span>
          <GlowingText text="Shubham Patel" size="6xl" className="text-gradient" />
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate software engineer specializing in front-end and back-end development. 
          Creating elegant solutions with modern technologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-space-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 animate-pulse-glow"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 space-border rounded-lg hover:border-space-accent transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-white opacity-70 hover:opacity-100 transition-opacity">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-space-purple opacity-30 animate-pulse-glow blur-xl"></div>
      <div className="absolute bottom-1/3 right-10 w-24 h-24 rounded-full bg-space-blue opacity-20 animate-pulse-glow blur-xl"></div>
    </section>
  );
};

export default Hero;
