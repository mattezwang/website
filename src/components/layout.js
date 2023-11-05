import * as React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navFooterLinks,
  navFooterLinkItem,
  navFooterLinkText
} from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <body>
      <h2>Matthew Wang</h2>
      <nav className = "topNav">
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/portfolio" className={navLinkText}>
              Portfolio
            </Link>
          </li>


          <li className={navLinkItem}>
          <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
          </li>


        </ul>
      </nav>
      <main>
        {children}
      </main>

          <nav className = "footer">
            <ul className={navFooterLinks}>
              <li className={navFooterLinkItem}>
                GitHub
              </li>
              <li className={navFooterLinkItem}>
                LinkedIn
              </li>
            </ul>
          </nav>

      </body>
    </div>
  )
}

export default Layout