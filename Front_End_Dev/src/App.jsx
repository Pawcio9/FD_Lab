// Importy potrzebne do dzia³ania aplikacji
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// Komponent Navbar
function Navbar({ isLoggedIn, onLogout, isVisible }) {
  if (!isVisible) return null;
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isLoggedIn ? (
          <li><button onClick={onLogout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

// Komponent Home
function Home() {
  return (
    <div>
      <h1>Welcome to Our Application</h1>
      <p>This is a simple React application with routing functionality.</p>
    </div>
  );
}

// Komponent About
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This application demonstrates basic routing with React and React Router.</p>
    </div>
  );
}

// Komponent Contact
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

// Komponent 404 (NotFound)
function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}

// Komponent Login
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin();
      navigate('/');
    } else {
      alert("zly login");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// G³ówny komponent App
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const isNavbarVisible = location.pathname !== '/login';

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} isVisible={isNavbarVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// G³ówna funkcja renderuj¹ca aplikacjê
export default function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}
