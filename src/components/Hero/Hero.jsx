import { useState, useEffect } from 'react';
import profileData from '../../data/profileData';
import SocialIcons from '../SocialIcons/SocialIcons';
import Klogo from '../../data/Picture/Klogo.png';
import './Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = profileData.typingTexts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % profileData.typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, isDeleting]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="hero-wave">👋</span>
            <span className="hero-hello">Hi, I&apos;m</span>
          </div>
          <h1 className="hero-name">{profileData.nama}</h1>
          <div className="hero-typing-wrapper">
            <span className="hero-typing">{displayText}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-description">{profileData.deskripsi}</p>
          <div className="hero-buttons">
            <a href="/project" className="btn btn-primary">
              <span>View Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/contact" className="btn btn-secondary">
              <span>Contact Me</span>
            </a>
          </div>
          <SocialIcons />
        </div>
        <div className="hero-image">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow"></div>
            <div className="hero-avatar-circle">
              <img src={Klogo} alt={profileData.nama} className="hero-avatar-img" />
            </div>
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar-ring ring-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
