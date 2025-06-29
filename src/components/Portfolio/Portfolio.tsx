import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Tech Store',
      description: 'A Tech e-commerce platform with improved user experience and conversion optimization. Implemented responsive design and modern checkout flow.',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: 'https://technovastore.netlify.app/',
    },
    {
      id: 2,
      title: 'Code Snippet Web-App',
      description: 'A comprehensive Code snippet Side for Fast and Easy Code Learners and Users',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: 'https://codesnippet-1.netlify.app/',
    },
    {
      id: 3,
      title: 'A Agengy Portfolio',
      description: 'An Agency Portfolio Which Help to get recognized By multiple Potential clients and Get Satisfied By the Agency Work.',
      imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: 'https://editify-media.netlify.app/',
    },
    {
      id: 4,
      title: 'An React Based Wallpaper Gallery',
      description: 'An Wallpaper Gallery that can be used for You devices wallpaper and make them More Attractive and Vibrant',
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: 'https://pixel-vault-app.netlify.app/',
    },
    {
      id: 5,
      title: 'A Tech Services Webapp',
      description: 'A Tech services Provider Which Has been Monitored and well maintained for a very long and got succeed also',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      link: 'https://github.com/NotFieldgamer/NexisCore',
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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Project+Image';
  };

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className={`portfolio-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="project-image"
                  onError={handleImageError}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a 
                  href={project.link} 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;