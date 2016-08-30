import React from 'react'
import AndroidSend from 'react-icons/lib/io/android-send'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'

export default ({ children, params }) => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section>
        {<div key="title" className={styles.hero}>
          <h1>Careers</h1>
          <p>Pegabyte is hiring top talent.</p>
        </div>}
      </Section>
      <Section>
        {children}
      </Section>
    </div>
  </div>
)
