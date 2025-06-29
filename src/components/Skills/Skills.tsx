import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  FileCode, 
  Cpu, 
  Database, 
  Server, 
  Figma, 
  Github,
  Braces,
  Palette,
  PenTool
} from 'lucide-react';
import SkillBar from './SkillBar/SkillBar';
import './Skills.css';

const Skills = () => {
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
          {/* Frontend Development */}
          <div className="skill-category fade-in">
            <h3 className="category-title">
              <Code size={22} />
              Frontend Development
            </h3>
            <div className="skill-list">
              <SkillBar 
                name="HTML5" 
                percentage={95} 
                icon={FileCode} 
                color="#E34F26" 
              />
              <SkillBar 
                name="CSS3" 
                percentage={90} 
                icon={Palette} 
                color="#1572B6" 
              />
              <SkillBar 
                name="JavaScript" 
                percentage={85} 
                icon={Braces} 
                color="#F7DF1E" 
              />
              <SkillBar 
                name="React.js" 
                percentage={80} 
                icon={Code} 
                color="#61DAFB" 
              />
            </div>
          </div>
          
          {/* Backend & Database */}
          <div className="skill-category fade-in">
            <h3 className="category-title">
              <Server size={22} />
              Backend & Database
            </h3>
            <div className="skill-list">
              <SkillBar 
                name="Node.js" 
                percentage={70} 
                icon={Server} 
                color="#339933" 
              />
              <SkillBar 
                name="Python" 
                percentage={75} 
                icon={Code} 
                color="#3776AB" 
              />
              <SkillBar 
                name="C" 
                percentage={50} 
                icon={Cpu} 
                color="#A8B9CC" 
              />
              <SkillBar 
                name="MongoDB" 
                percentage={60} 
                icon={Database} 
                color="#47A248" 
              />
              <SkillBar 
                name="SQL" 
                percentage={65} 
                icon={Database} 
                color="#4479A1" 
              />
            </div>
          </div>
          
          {/* Tools & Design */}
          <div className="skill-category fade-in">
            <h3 className="category-title">
              <PenTool size={22} />
              Tools & Design
            </h3>
            <div className="skill-list">
              <SkillBar 
                name="Figma" 
                percentage={90} 
                icon={Figma} 
                color="#F24E1E" 
              />
              <SkillBar 
                name="Git/GitHub" 
                percentage={78} 
                icon={Github} 
                color="#F05032" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;