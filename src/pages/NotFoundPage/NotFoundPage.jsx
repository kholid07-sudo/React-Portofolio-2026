import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-glow"></div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-message">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="notfound-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
