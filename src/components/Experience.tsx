
import { Briefcase, Calendar } from 'lucide-react';
import useInView from '../hooks/useInView';

const Experience = () => {
  const [ref, isInView] = useInView({ triggerOnce: true });

  return (
    <section id="experience" className="py-20 px-4 bg-space-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <div className="w-24 h-1 bg-space-accent mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref}
          className={`relative transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-space-accent bg-opacity-30 z-0"></div>

          {/* Experience item */}
          <div className="relative z-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-10 md:mb-0">
              <div className="glass-card p-6 rounded-lg hover:border-space-accent transition-all duration-300 mt-8 md:mt-0">
                <div className="flex items-center mb-3 md:justify-end">
                  <Briefcase size={18} className="text-space-accent mr-2 md:order-2 md:ml-2 md:mr-0" />
                  <h3 className="text-xl font-bold">SDE Intern</h3>
                </div>
                <h4 className="text-space-highlight font-medium">Inspeq AI</h4>
                <div className="flex items-center my-2 md:justify-end">
                  <Calendar size={16} className="text-gray-400 mr-2 md:order-2 md:ml-2 md:mr-0" />
                  <span className="text-sm text-gray-400">Dec. 2023 – Jun. 2024</span>
                </div>
                <p className="text-sm text-gray-300 italic">Frontend, Backend, Chrome Extension Development</p>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="glass-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-space-accent mr-2">•</span>
                    <span>Built web applications using Next.js, reducing page load times by 30% through server-side rendering and static site generation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-space-accent mr-2">•</span>
                    <span>Designed and implemented responsive UI components using Ant Design, improving user engagement by 25%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-space-accent mr-2">•</span>
                    <span>Developed 10+ RESTful APIs with FastAPI, reducing database query response times by 40% for a PostgreSQL database with 100K+ records.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-space-accent mr-2">•</span>
                    <span>Integrated backend APIs with Chrome extensions, achieving 95% compatibility with Chrome updates.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-space-accent mr-2">•</span>
                    <span>Streamlined development workflows, increasing team efficiency by 20%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-space-accent mr-2">•</span>
                    <span>Earned an Internship Certificate for outstanding performance and contributions.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 top-8 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-space-accent z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
