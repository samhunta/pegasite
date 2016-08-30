import React from 'react'
import EasyTransition from 'react-easy-transition'
import styles from '../styles/App.scss'

export default ({ children }) => (
  <EasyTransition
    path={window.location.pathname}
    transition="opacity 0.1s ease-in, transform 0.1s ease-in"
    initialStyle={{
      opacity: 0,
      transform: 'translateX(5rem)',
    }}
    finalStyle={{
      opacity: 1,
      transform: 'translateX(0)',
    }}
    leaveStyle={{
      opacity: 0,
      transform: 'translateX(-5rem)',
    }}
  >
    <div className={styles.section}>
      {children}
    </div>
  </EasyTransition>
)
