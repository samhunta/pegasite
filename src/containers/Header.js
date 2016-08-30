import React from 'react'
import { withState } from 'recompose'
import styles from '../styles/App.scss'
import MdClose from 'react-icons/lib/md/close'
import MdMenu from 'react-icons/lib/md/menu'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import MediaQuery from 'react-responsive'
import { Link, IndexLink } from 'react-router'

const enhance = withState('menuVisible', 'toggleMenu', 0)

const Navigation = ({ closeMenu, ...props }) => (
  <nav {...props}>
    <MdClose className={styles.modalCloseBtn} onClick={closeMenu} />
    <ul>
      <li onClick={closeMenu}>
        <IndexLink activeClassName={styles.active} to="/">About</IndexLink>
      </li>
      <li onClick={closeMenu}>
        <a href="https://github.com/pegabyte" target="_blank">Code <MdExitToApp /></a>
      </li>
      <li onClick={closeMenu}>
        <Link activeClassName={styles.active} to="/press">Press Kit</Link>
      </li>
      <li onClick={closeMenu}>
        <IndexLink activeClassName={styles.active} to="/careers">Careers</IndexLink>
      </li>
      <li onClick={closeMenu}>
        <Link activeClassName={styles.active} to="/consultation">Consultation</Link>
      </li>
    </ul>
  </nav>
)

const Hamburger = (props) => (
  <MdMenu {...props} className={styles.hamburger} />
)

export default enhance(({ menuVisible, toggleMenu, ...props }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <IndexLink to="/" className={styles.logo}><span /></IndexLink>
        <MediaQuery maxWidth={601} className={styles.mobileNav}>
          <Hamburger onClick={() => toggleMenu(1)} />
          <Navigation closeMenu={() => toggleMenu()} className={menuVisible ? styles.navigation : styles.hideSm} />
        </MediaQuery>
        <MediaQuery minWidth={600}>
          <Navigation className={styles.navigation} />
        </MediaQuery>
      </div>
    </div>
  </header>
))
