
import { CheckCircle } from 'lucide-react';
import useInView from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-space-accent mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="space-border p-4 rounded-lg">
                  <h4 className="font-semibold text-space-highlight">National Institute of Technology, Srinagar</h4>
                  <p className="text-sm text-gray-300">Bachelor of Technology in Information Technology</p>
                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>Aug. 2021 – July 2025</span>
                    <span>CGPA: 7.2</span>
                  </div>
                </div>
                
                <div className="space-border p-4 rounded-lg">
                  <h4 className="font-semibold text-space-highlight">Chandra Mauli Pratap Singh School</h4>
                  <p className="text-sm text-gray-300">Senior School Certificate Examination (State Board)</p>
                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>May 2020 – May 2021</span>
                    <span>Percentage: 93%</span>
                  </div>
                </div>
                
                <div className="space-border p-4 rounded-lg">
                  <h4 className="font-semibold text-space-highlight">Cloth Merchants Association School</h4>
                  <p className="text-sm text-gray-300">Secondary School Examination (CBSE)</p>
                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>May 2018 – May 2019</span>
                    <span>Percentage: 91%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-space-accent mt-1 flex-shrink-0" size={18} />
                  <span>JEE Main Top 4 Percentile: Ranked within the top 4 percentile in JEE Main.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-space-accent mt-1 flex-shrink-0" size={18} />
                  <span>300+ DSA Problems Solved: Solved over 300+ Data Structures and Algorithms (DSA) problems on platforms like LeetCode and GeeksforGeeks.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-space-accent mt-1 flex-shrink-0" size={18} />
                  <span>Volunteer at Tech Fest: Played a key role in organizing and managing a college tech fest, coordinating with multiple teams and ensuring smooth execution.</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-space-highlight">Phone:</span>
                  <span>+91 6265305788</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-space-highlight">Email:</span>
                  <a href="mailto:baba.patelshubham@gmail.com" className="hover:text-space-accent">
                    baba.patelshubham@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-space-highlight">LinkedIn:</span>
                  <a 
                    href="https://linkedin.com/in/shubham-patel-4bb923267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-space-accent"
                  >
                    linkedin.com/in/shubham-patel-4bb923267
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-space-highlight">GitHub:</span>
                  <a 
                    href="https://github.com/shubham-babaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-space-accent"
                  >
                    github.com/shubham-babaa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
