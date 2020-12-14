import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { faGithub, faLinkedinIn, faLastfm } from '@fortawesome/free-brands-svg-icons'

import './style.css'

const FooterContainer = () => (
  <footer className="social-media">
    <Link
      to="https://github.com/analimazn/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </Link>
    <Link
      to="https://www.linkedin.com/in/analimazn/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </Link>
    <Link
      to="https://www.last.fm/user/anazzita"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLastfm} />
    </Link>
    <span>| by ana lima</span>
  </footer>
)

export default FooterContainer