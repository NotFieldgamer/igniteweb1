import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          
          
          <div className="about-text fade-in-up">
            <p>
              Hello! I'm a <span className="highlight">passionate freelance developer</span> with a focus on creating beautiful, functional, and user-centered digital experiences. With over 5 years of experience in the field, I've had the privilege of working on a diverse range of projects that have sharpened my skills and broadened my perspective.
            </p>
            
            <p>
              My expertise lies primarily in <span className="highlight">frontend development</span>, where I excel at transforming designs into responsive, interactive interfaces. I'm proficient in modern JavaScript frameworks, particularly <span className="highlight-alt">React.js</span>, and I stay up-to-date with the latest web technologies and best practices.
            </p>
            
            <p>
              While frontend is my specialty, I'm also comfortable with <span className="highlight">backend development</span> using Node.js and Python. I believe in creating holistic solutions that address both user needs and business goals. My experience with <span className="highlight-alt">Figma</span> allows me to collaborate effectively with designers and understand the nuances of implementing complex UI/UX designs.
            </p>
            
            <p>
              I'm passionate about creating web experiences that are not only visually appealing but also accessible, performant, and maintainable. Whether you need a complete web application, a portfolio site, or technical consultation, I'm here to help bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;