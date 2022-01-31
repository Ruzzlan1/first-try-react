import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="facebook.com">
          <FaFacebookF />
        </a>
        <a href="twitter.com">
          <FaTwitter />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="github.com">
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
export default Footer
