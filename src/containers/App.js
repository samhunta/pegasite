import React from 'react'
import Header from './Header'
import AppContent from './AppContent'
import styles from '../styles/App.scss'
import { StickyContainer, Sticky } from 'react-sticky'

export default ({ children }) => (
  <div className={styles.rootWrapper}>
    <StickyContainer>
      <Sticky stickyClassName={styles.navigationSticky} topOffset={10}>
        <Header />
      </Sticky>
      <AppContent>
        {children}
      </AppContent>
    </StickyContainer>
  </div>
)
