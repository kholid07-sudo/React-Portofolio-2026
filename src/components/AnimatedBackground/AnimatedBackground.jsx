import './AnimatedBackground.css';

function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedBackground;
