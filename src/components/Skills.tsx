
import { useState } from 'react';
import useInView from '../hooks/useInView';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-10
}

const Skills = () => {
  const [ref, isInView] = useInView({ triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState<string>('Programming Languages');

  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 9 },
        { name: 'C++', level: 8 },
        { name: 'JavaScript', level: 9 },
        { name: 'HTML', level: 10 },
        { name: 'CSS', level: 9 }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 9 },
        { name: 'Next.js', level: 8 },
        { name: 'FastAPI', level: 7 },
        { name: 'Express.js', level: 8 },
        { name: 'Tailwind CSS', level: 9 }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MongoDB', level: 8 },
        { name: 'MySQL', level: 7 }
      ]
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 8 },
        { name: 'Docker', level: 7 },
        { name: 'VS Code', level: 9 },
        { name: 'Postman', level: 8 },
        { name: 'Chrome API', level: 7 }
      ]
    },
    {
      name: 'Concepts',
      skills: [
        { name: 'RESTful APIs', level: 9 },
        { name: 'Server-Side Rendering', level: 8 },
        { name: 'Responsive Design', level: 9 },
        { name: 'State Management', level: 8 }
      ]
    }
  ];

  const activeSkills = skillCategories.find(category => category.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 px-4 bg-space-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Skills</h2>
          <div className="w-24 h-1 bg-space-accent mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-space-accent text-white shadow-lg shadow-space-accent/20'
                    : 'space-border hover:border-space-accent'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="glass-card p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-8 text-center text-space-highlight">{activeCategory}</h3>
            
            <div className="space-y-6">
              {activeSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-space-highlight">{skill.level * 10}%</span>
                  </div>
                  <div className="h-2 bg-space-blue bg-opacity-20 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-space-accent animate-pulse-glow"
                      style={{ 
                        width: `${skill.level * 10}%`,
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
