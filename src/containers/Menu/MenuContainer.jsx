import React from 'react'

import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import ToggleComponent from '../../components/Toggle'

import './style.css'

const MenuContainer = ({ data }) => (
  <div className="menu-container">
    <span className="logo">a.</span>
    <menu>
      <ul>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/blog">notes</Link>
        </li>
        <li>
          <AnchorLink to="/#contact">contact</AnchorLink>
        </li>
      </ul>
    </menu>
    <ToggleComponent />
  </div>
)

export default MenuContainer