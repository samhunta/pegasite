import React from 'react'
import styles from '../styles/App.scss'
import MdClose from 'react-icons/lib/md/close'

export default () => {
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="#" className={styles.logo}><span /></a>
          <nav className={styles.navigation}>
            <MdClose className={styles.modalCloseBtn} />
            <ul>
              <li className={styles.active}>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Code</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className={styles.hero}>
          <h1>We're Product Designers</h1>
          <p>
            Beautiful branding, eCommerce solutions, web design, and app development
            are just a fraction of the many services we can provide to you.
          </p>
          <a className={styles.callToAction} href="#">Get In Touch {'\u2192'}</a>
        </div>
        <div className={styles.ourClients}>
          <h1>Our Clients</h1>
          <div className={styles.clientList}>
            <div className={styles.clientView}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/nissan.jpg')})` }} />
              </div>
            </div>
            <div className={styles.clientView}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/paramount.jpg')})` }} />
              </div>
            </div>
            <div className={styles.clientView}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/fedex.jpg')})` }} />
              </div>
            </div>
            <div className={styles.clientView}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/fourth-wall.jpg')})` }} />
              </div>
            </div>
            <div className={styles.clientViewDesktop}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/hulkshare.jpg')})` }} />
              </div>
            </div>
            <div className={styles.clientViewDesktop}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/treesy.jpg')})` }} />
              </div>
            </div>
            <div className={styles.clientView}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/bcbg.jpg')})` }} />
              </div>
            </div>
            <div className={styles.clientView}>
              <div className={styles.clientViewItem}>
                <span style={{ backgroundImage: `url(${require('../../public/assets/clients/att.jpg')})` }} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <h1>Create Your Product</h1>
          <p>
            Allow us; As the
            {' '}
            <strong style={{ color: '#7c6db2' }}>world's only ISO-certified</strong>
            {' '}
            quality compliant product development agency to align the chakras of your business and advance
            your product and website to the next generation.
          </p>
          <a className={styles.callToAction} href="#">Get Started {'\u2192'}</a>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.testimonialLeft}>
          <div className={styles.testimonialBrowser}>
            <img width={668} height={332} alt="BudTheory" src={require('../../public/assets/clients/bt-screen.jpg')} />
          </div>
          <div className={styles.container}>
            <div className={styles.testimonialContent}>
              <h3>Bud Theory Cooperative</h3>
              <p>This job Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <a className={styles.callToAction} href="#">Visit Bud Theory Cooperative {'\u2192'}</a>
            </div>
          </div>
        </div>
        <div className={styles.testimonialRight}>
          <div className={styles.testimonialBrowser}>
            <img width={668} height={332} alt="BudTheory" src={require('../../public/assets/clients/hulkshare-screen.jpg')} />
          </div>
          <div className={styles.container}>
            <div className={styles.testimonialContent}>
              <h3>HulkShare</h3>
              <p>This job Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <a className={styles.callToAction} href="#">Visit HulkShare {'\u2192'}</a>
            </div>
          </div>
        </div>
        <div className={styles.testimonialLeft}>
          <div className={styles.testimonialBrowser}>
            <img width={668} height={332} alt="BudTheory" src={require('../../public/assets/clients/zaarly-screen.jpg')} />
          </div>
          <div className={styles.container}>
            <div className={styles.testimonialContent}>
              <h3>Zaarly</h3>
              <p>This job Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <a className={styles.callToAction} href="#">Visit Zaarly {'\u2192'}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
