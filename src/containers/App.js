import React from 'react'
import Header from './Header'
import AppContent from './AppContent'
import styles from '../styles/App.scss'

export default ({ children }) => (
  <div className={styles.rootWrapper}>
    <Header />
    <AppContent>
      {children}
    </AppContent>
  </div>
)
