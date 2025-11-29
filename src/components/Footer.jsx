import React from 'react';

const Footer = () => {
  return (
    <footer className="custom-bg text-white text-center p-3">
      <div className="container">
        <p>
          Contact me at <a href="mailto:grantchen08@gmail.com" className="text-white">grantchen08@gmail.com</a>
        </p>
        <p>
          <a href="https://github.com/grantchen08" target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a>
        </p>
        <div className="print-only" style={{ marginTop: '10px' }}>
          <p>
            Live Portfolio: <a href="https://grantchen08.github.io/grant-chen-portfolio/" className="text-white">https://grantchen08.github.io/grant-chen-portfolio/</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
