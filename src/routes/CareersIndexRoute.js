import React from 'react'
import AndroidSend from 'react-icons/lib/io/android-send'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
// import MediaQuery from 'react-responsive'
import { Link } from 'react-router'
import careers from '../data/careers.json'
export default () => (
  <div className={styles.selectList}>
    {careers.map(item => (
      <Link key={item.id} to={`/careers/${item.id}`} className={styles.selectListItem}>
        <div className={styles.selectListContent}>
          <h5>
            {item.name}
          </h5>
          <p>{item.shortDescription}</p>
        </div>
        <button type="button" className={styles.selectListBtn}>
          Apply
        </button>
      </Link>
    ))}
  </div>
)
