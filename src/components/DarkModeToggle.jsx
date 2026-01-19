import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: darkMode ? '#4a5568' : '#e2e8f0',
        color: darkMode ? '#f7fafc' : '#1a202c',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        marginRight: '20px'
      }}
    >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
