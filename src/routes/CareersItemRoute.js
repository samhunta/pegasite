import React from 'react'
import { Link } from 'react-router'
import findIndex from 'lodash/findIndex'
import { mapProps } from 'recompose'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import MdAttachment from 'react-icons/lib/md/attachment'
import MdCheck from 'react-icons/lib/md/check'
import { compose } from 'recompose'
import MediaQuery from 'react-responsive'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import careers from '../data/careers.json'

const redefineProps = mapProps(props => ({
  ...props,
  item: careers[findIndex(careers, ['id', props.params.item])],
}))

const enhance = compose(redefineProps)

export default enhance(({ item }) => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section>
        <div className={styles.hero}>
          <h3><Link to="/careers"><TiArrowBackOutline /></Link> {item.name}</h3>
          <p>{item.shortDescription}</p>
        </div>
        <form className={styles.formGapped}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input type="text" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input type="email" className={styles.formInput} />
          </div>
          {item.skills &&
            <div className={styles.formGroup}>
            <label className={styles.formLabel}>Your Experience</label>
              <ul className={styles.formChecklist}>
                {item.skills.map((careerItem, itemIndex) =>
                  <li key={careerItem}>
                    <label className={styles.formChecklistItem}>
                      <input type="checkbox" />
                      <span>
                        <MdCheck />
                        <span className={styles.formChecklistAlt}>
                          +{Math.floor((item.skills.length - itemIndex) * 8)}
                        </span>
                        <span>{careerItem}</span>
                      </span>
                    </label>
                  </li>
                )}
              </ul>
            </div>}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Cover Letter</label>
            <textarea
              placeholder="eg. A mobile app that notifies you of new movies in theaters"
              rows="10"
              className={styles.formTextarea}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Were Your Parents Born Human?</label>
            <select defaultValue="" className={styles.formSelect}>
              <option value="" disabled>–––––</option>
              <option value="beep-boop">Beep Boop</option>
              <option value="destroy-humans">Woof Woof</option>
              <option value="meow">Meow</option>
              <option value="yes">Sure</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.selectListCompact}>
              <label className={styles.selectListItem}>
                <div className={styles.selectListContent}>
                  <h5><MdAttachment /></h5>
                  <p></p>
                </div>
                <input type="file" style={{ display: 'none' }} />
                <a className={styles.selectListBtn}>
                  Attach Stuff
                </a>
              </label>
            </div>
          </div>
          <MediaQuery minWidth={600}>
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.btnLgPrimary}>
                Submit App
              </button>
            </div>
          </MediaQuery>
        </form>
      </Section>
    </div>
    <MediaQuery maxWidth={601}>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.btnLgPrimary}>
          Submit App
        </button>
      </div>
    </MediaQuery>
  </div>
))
