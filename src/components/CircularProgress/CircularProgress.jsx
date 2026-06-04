import { useState, useEffect } from 'react';
import './CircularProgress.css';

function CircularProgress({ name, level, isVisible }) {
  const [progress, setProgress] = useState(0);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return (
    <div className="circular-progress">
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-blue)" />
            <stop offset="100%" stopColor="var(--accent-indigo)" />
          </linearGradient>
        </defs>
        <circle
          className="progress-bg"
          cx="50"
          cy="50"
          r="45"
        />
        <circle
          className="progress-bar"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="progress-content">
        <span className="progress-value">{Math.round(progress)}%</span>
        <span className="progress-name">{name}</span>
      </div>
    </div>
  );
}

export default CircularProgress;
