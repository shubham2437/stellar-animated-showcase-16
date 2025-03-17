
import { Github, ExternalLink } from 'lucide-react';
import useInView from '../hooks/useInView';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  points: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [ref, isInView] = useInView({ triggerOnce: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Task Manager Application",
      description: "A comprehensive task management solution with persistent storage",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js"],
      points: [
        "Developed a task management application supporting 5,000+ tasks with MongoDB for persistent storage.",
        "Implemented RESTful APIs using Express.js and Node.js, achieving 98% uptime for CRUD operations.",
        "Improved application performance by 35% using Next.js for client-side routing.",
        "Designed an intuitive interface, enhancing usability across desktop and mobile platforms."
      ],
      github: "https://github.com/shubham-babaa/task-manager",
    },
    {
      title: "Hunger Begins",
      description: "A pizza booking website with order management and user interaction",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Redux", "API"],
      points: [
        "Created a pizza booking site with features like order creation, cart management, and user interaction.",
        "Used React and Redux to manage state and ensure a smooth user experience.",
        "Designed the UI with Tailwind CSS, achieving a consistent and responsive design.",
        "Integrated APIs to fetch and display real-time data, improving functionality."
      ],
      github: "https://github.com/shubham-babaa/hunger-begins",
      demo: "https://hunger-begins.example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Projects</h2>
          <div className="w-24 h-1 bg-space-accent mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-lg overflow-hidden relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-space-highlight">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-3 py-1 rounded-full space-border text-space-stardust"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2 text-sm mb-10">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-space-accent mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end space-x-4 backdrop-blur-sm bg-opacity-80 bg-space-dark">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-space-accent transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-space-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                {/* Animated border when hovered */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 border-2 border-space-accent rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
