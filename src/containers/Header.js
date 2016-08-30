import React from 'react'
import { withState } from 'recompose'
import styles from '../styles/App.scss'
import MdClose from 'react-icons/lib/md/close'
import MediaQuery from 'react-responsive'
import { Link, IndexLink } from 'react-router'

const enhance = withState('menuVisible', 'toggleMenu', 0)

const Navigation = (props) => (
  <nav {...props}>
    <MdClose className={styles.modalCloseBtn} />
    <ul>
      <li>
        <IndexLink activeClassName={styles.active} to="/">About</IndexLink>
      </li>
      <li>
        <a href="https://github.com/pegabyte" target="_blank">Code</a>
      </li>
      <li>
        <Link activeClassName={styles.active} to="/press">Press Kit</Link>
      </li>
      <li>
        <Link activeClassName={styles.active} to="/careers">Careers</Link>
      </li>
      <li>
        <Link activeClassName={styles.active} to="/consultation">Consultation</Link>
      </li>
    </ul>
  </nav>
)

const Hamburger = (props) => (
  <div {...props} className={styles.hamburger} />
)

export default enhance(({ menuVisible, toggleMenu, ...props }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <IndexLink to="/" className={styles.logo}><span /></IndexLink>
        <MediaQuery maxWidth={601}>
          <Hamburger onClick={() => toggleMenu(1)} />
          <Navigation className={menuVisible ? styles.navigation : styles.hideSm} />
        </MediaQuery>
        <MediaQuery minWidth={600}>
          <Navigation className={styles.navigation} />
        </MediaQuery>
      </div>
    </div>
  </header>
))
