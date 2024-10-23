import { useState, useEffect } from 'react';

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode); 
  }, []);

  // Toggle the dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode); 
    localStorage.setItem('darkMode', !darkMode); 
  };

  return (
    <button onClick={toggleDarkMode} className="btn-dark-mode">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
