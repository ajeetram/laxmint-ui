import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/EdubukLogoClean.png';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const navData = [
    { name: 'Wallet', path: '/wallet' },
    { name: 'Banks & Institutions', path: '/bank' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'Q&A', path: '/q&a' },
    { name: 'How To Buy', path: '/htob' },
    { name: 'Whitepaper', path: '/whitepaper' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        {navData.map((link, index) => (
          <Link key={index} to={link.path} className="nav-link">
            {link.name}
          </Link>
        ))}
      </div>
      <div className='btn-section'>
      <button className="custom-btn" id="button-gradient">Connect Wallet</button>
      <div id="nav-hamburger" className={isSidebarOpen ? 'open' : ''} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} navData={navData} />
    </nav>
  );
};

const Sidebar = ({ isOpen, navData }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        {navData.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
