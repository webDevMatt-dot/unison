import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  if (loading) {
    return (
      <div className="splash">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Unison Logo" className="splash-logo" />
      </div>
    );
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-small' : ''}`}>
        <div className="nav-logo">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Unison Logo" className="nav-logo-img" />
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </button>
        <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <main className="landing" id="home">
        <h1>Welcome to Unison 🌍</h1>
        <p>This is your beautiful landing page.</p>
        <p>Scroll down to see the navbar shrink!</p>
        <div style={{ height: '1500px' }}></div>
      </main>
    </>
  );
}

export default App;