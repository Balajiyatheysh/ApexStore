import { Facebook, Favorite, Instagram, Pinterest } from '@mui/icons-material'
import React from 'react'
import './Footer.css';
import logo from "../../assets/logo/apex-legends-symbol-white.png"


export const Footer = () => {
  return (
    <div>
      <footer className="home-page-footer">
            <div className='logo'><img className="store-logo" src={logo} alt="logo"/></div>
            <p>Made with <Favorite className='fav-icon'/> by <strong>BOSSMONKEY</strong> </p>
                <div className='icons'>
                <Instagram className="social-icons"/>
                <Pinterest className="social-icons"/>
                <Facebook className="social-icons"/>
                </div>
        </footer>
    </div>
  )
}