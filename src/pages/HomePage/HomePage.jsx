import { useState, useEffect, useRef } from 'react';
import Hero from '../../components/Hero/Hero';
import CircularProgress from '../../components/CircularProgress/CircularProgress';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import profileData from '../../data/profileData';
import './HomePage.css';

function HomePage() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <Hero />

      <section className="skills-section" ref={skillsRef} id="skills">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </ScrollReveal>
          <div className="skills-row">
            {profileData.skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 100}>
                <CircularProgress
                  name={skill.name}
                  level={skill.level}
                  isVisible={skillsVisible}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
