import React from 'react'
import './footer.css'
import companyLogo from '../../assets/final_logo-B3ix3BYr.png'
import twitter from '../../assets/twitter.svg';
import telegram from '../../assets/telegram.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import marketcap from '../../assets/marketcap.svg'
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-bg'></div>
    <div className='footer-inner'>
    <div className='form-container'>
    <p className="form-title">Sign up to Qubetics</p>
    <div className='form'>
      <input type="email" placeholder='Enter your email'></input>
      <button className='custom-btn'> Submit </button>
    </div>
    </div>
    <div className='footer-info-container'>
      <div className='footer-info-section'>
        <div className='footer-company-info'>
        <img src={companyLogo} style={{width:"150px"}}></img>
        <p>Join the Qubetics crypto presale—the world's first Layer 1, Web3 aggregated ecosystem that unites leading blockchains like Bitcoin, Ethereum, and Solana. Our platform is designed for innovative applications set to revolutionize blockchain utilization.
        <br></br>
        <br></br>
        Qubetics Labs LLC
        <br></br>
Company No: FSC/200/LLC 2233/24
<br></br>
Registered Office: 301 Chetumal Street, Belize City, Belize
<br></br>
support@qubetics.com</p>
        </div>
        <div className='footer-company-info-links' >
        <div className='footer-company-links'>
        <p id='footer-links-title'>About</p>
        <div className='links'>
          <a>Our Vision</a>
          <a>Tokenomics</a>
          <a>Roadmap</a>
          <a>Blogs</a>
          <a>Whitepaper</a>
         <a>Q&A</a>
        <a>How to Buy</a>
        </div>
        </div>
        <div className='footer-company-links'>
        <p id='footer-links-title'>Features</p>
        <div className='links'>
          <a>Wallet</a>
          <a>Banks & Institutions</a>
          <a>QUSD</a>
          <a>QubeQode</a>
          <a>DVPN</a>
        </div>
        </div>
        <div className='footer-company-links'>
        <p id='footer-links-title'>Legal</p>
        <div className='links'>
          <a>Terms of Use</a>
          <a>Cookies Policy</a>
          <a>Disclaimer</a>
          <a>Press Kit</a>
          <a>Contact</a>
        </div>
        </div>
        </div>
        <div>
        </div>
      </div>
      <div className='footer-social-section'>
      <p>Get in touch!</p>
      <div className='footer-social-icon-section'>
      <a>
        <img src={twitter} alt='social-icon' id='social-icon'></img>
      </a>
      <a>
        <img src={telegram} alt='social-icon' id='social-icon'></img>
      </a>
      <a>
        <img src={youtube} alt='social-icon' id='social-icon'></img>
      </a>
      <a>
        <img src={instagram} alt='social-icon' id='social-icon'></img>
      </a>
      <a>
        <img src={marketcap} alt='social-icon' id='social-icon'></img>
      </a>
      </div>
      </div>
    </div>
    </div> 
    <div className='footer-bottom-section'>
          <p>©2024 Copyright Qubetics. All rights reserved</p> 
    </div> 
    </div> 
    </>
  )
}

export default Footer
