
import { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import useInView from '../hooks/useInView';
import { toast } from 'sonner';

const Contact = () => {
  const [ref, isInView] = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <div className="w-24 h-1 bg-space-accent mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-space-highlight">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-space-accent bg-opacity-20 p-3 rounded-full">
                    <Phone size={20} className="text-space-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-300">+91 6265305788</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-space-accent bg-opacity-20 p-3 rounded-full">
                    <Mail size={20} className="text-space-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:baba.patelshubham@gmail.com" className="text-gray-300 hover:text-space-accent">
                      baba.patelshubham@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-space-accent bg-opacity-20 p-3 rounded-full">
                    <MapPin size={20} className="text-space-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-300">Srinagar, Jammu and Kashmir, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-space-highlight">Social Profiles</h3>
              
              <div className="flex space-x-6">
                <a 
                  href="https://linkedin.com/in/shubham-patel-4bb923267" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-space-accent bg-opacity-20 p-3 rounded-full hover:bg-opacity-40 transition-all duration-300"
                >
                  <Linkedin size={24} className="text-space-accent" />
                </a>
                <a 
                  href="https://github.com/shubham-babaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-space-accent bg-opacity-20 p-3 rounded-full hover:bg-opacity-40 transition-all duration-300"
                >
                  <GitHub size={24} className="text-space-accent" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg space-border bg-transparent focus:border-space-accent focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg space-border bg-transparent focus:border-space-accent focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg space-border bg-transparent focus:border-space-accent focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-space-accent text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
