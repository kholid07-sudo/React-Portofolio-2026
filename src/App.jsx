import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import FloatingNavbar from './components/FloatingNavbar/FloatingNavbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <FloatingNavbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
