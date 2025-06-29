import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Figma, 
  Database, 
  Globe, 
  Lightbulb, 
  Wrench
} from 'lucide-react';
import './Services.css';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services: Service[] = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Custom, responsive websites built with modern frameworks like React. Focus on performance, accessibility, and cross-browser compatibility.',
      icon: <Code size={48} color="var(--color-accent-indigo)" />,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that balance aesthetics with functionality. Includes wireframing, prototyping, and user testing.',
      icon: <Figma size={48} color="var(--color-accent-violet)" />,
    },
    {
      id: 3,
      title: 'Backend Integration',
      description: 'Seamless integration of frontend interfaces with backend systems. API development, database design, and server-side logic implementation.',
      icon: <Database size={48} color="var(--color-accent-indigo)" />,
    },
    {
      id: 4,
      title: 'Responsive Web Design',
      description: 'Websites that look and function beautifully across all devices and screen sizes. Mobile-first approach with fluid layouts and optimized assets.',
      icon: <Globe size={48} color="var(--color-accent-violet)" />,
    },
    {
      id: 5,
      title: 'Website Maintenance',
      description: 'Ongoing support and maintenance to keep your website secure, up-to-date, and performing optimally. Regular updates, backups, and monitoring.',
      icon: <Wrench size={48} color="var(--color-accent-indigo)" />,
    },
    {
      id: 6,
      title: 'Consulting & Strategy',
      description: 'Expert advice on web technology choices, development roadmaps, and digital strategy. Solutions tailored to your specific business needs and goals.',
      icon: <Lightbulb size={48} color="var(--color-accent-violet)" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Services</h2>
        
        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;