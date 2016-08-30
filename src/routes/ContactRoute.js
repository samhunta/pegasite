import React from 'react'
import AndroidSend from 'react-icons/lib/io/android-send'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import MediaQuery from 'react-responsive'

export default () => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section>
        <div className={styles.hero}>
          <h1>Receive Estimate</h1>
          <p>Please fill out the form below for your <strong>free</strong> project consultation.</p>
        </div>

        <form className={styles.formGapped}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input type="text" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Were Your Parents Human?</label>
            <select defaultValue="" className={styles.formSelect}>
              <option value="" disabled>–––––</option>
              <option value="beep-boop">Beep Boop</option>
              <option value="destroy-humans">Woof Woof</option>
              <option value="meow">Meow</option>
              <option value="yes">Yeah</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Describe Your Project</label>
            <textarea
              placeholder="eg. A mobile app that notifies you of new movies in theaters"
              rows="10"
              className={styles.formTextarea}
            ></textarea>
          </div>
          <MediaQuery minWidth={600}>
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.btnLgPrimary}>
                <AndroidSend />
                Done
              </button>
            </div>
          </MediaQuery>
        </form>
      </Section>
    </div>
    <MediaQuery maxWidth={601}>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.btnLgPrimary}>
          <AndroidSend />
          Done
        </button>
      </div>
    </MediaQuery>
  </div>
)
