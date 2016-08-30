import React from 'react'
import AndroidSend from 'react-icons/lib/io/android-send'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import MediaQuery from 'react-responsive'
import GoFileMedia from 'react-icons/lib/go/file-media'

export default () => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section>
        <div className={styles.hero}>
          <h1>Press Kit</h1>
          <p>Images, documents, resources, etc.</p>
        </div>
      </Section>
      <Section>
        <div className={styles.selectListCompact}>
          <a href="/press-kit/logo.png" target="_blank" className={styles.selectListItem}>
            <div className={styles.selectListContent}>
              <h5>
                <GoFileMedia />
                logo.png
              </h5>
              <p>73KB • 361x308</p>
            </div>
            <button type="button" className={styles.selectListBtn}>
              Download
            </button>
          </a>
        </div>
      </Section>
    </div>
  </div>
)
