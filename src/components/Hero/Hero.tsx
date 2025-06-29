import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* 3D-like Animated Background */}
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Foreground Content */}
      <div className="hero-content">
        <h1 className="hero-title fade-in-up">
          <span className="title-part">Ignite</span>
          <span className="title-part-accent">Web</span>
        </h1>
        
        <p className="hero-tagline fade-in-up">
          Your Vision, Our Code. Crafting Exceptional Web Experiences.
        </p>
        
        <div className="hero-cta fade-in-up">
          <button 
            className="cta-button primary" 
            onClick={() => scrollToSection('portfolio')}
          >
            View Portfolio
          </button>
          <button 
            className="cta-button secondary" 
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;