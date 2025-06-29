import { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import './SkillBar.css';

interface SkillBarProps {
  name: string;
  percentage: number;
  icon: LucideIcon;
  color?: string;
}

const SkillBar = ({ name, percentage, icon: Icon, color }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef<HTMLDivElement>(null);

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

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, []);

  return (
    <div className="skill-bar" ref={skillBarRef}>
      <div className="skill-info">
        <div className="skill-name">
          <Icon size={18} color={color || 'currentColor'} />
          <span>{name}</span>
        </div>
        <div className="skill-percentage">{percentage}%</div>
      </div>
      <div className="skill-progress">
        <div 
          className={`skill-progress-fill ${isVisible ? 'animate' : ''}`}
          style={{ 
            '--skill-width': `${percentage}%`,
            background: color ? `linear-gradient(to right, ${color}, ${color}aa)` : undefined
          } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;