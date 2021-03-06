import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router'
import styles from '../styles/App.scss'
import Section from '../containers/Section'
import MdCheck from 'react-icons/lib/md/check'

const services = [
  'SEO',
  'Mobile Apps',
  'eCommerce',
  'Websites',
  'SaaS Development',
  'CRM Development',
  'CMS Development',
  'Internet Marketing',
  'Product Development',
]

export default () => (
  <div className={styles.appContent}>
    <div className={styles.container}>
      <Section>
        <div className={styles.hero}>
          <h1>We're Product Designers</h1>
          <p>
            Beautiful branding, eCommerce solutions, web design, and app development
            are just a fraction of the many services we can provide to you.
          </p>
          <Link className={styles.callToAction} to="/consultation">Get In Touch {'\u2192'}</Link>
        </div>
      </Section>
      <Section>
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
      </Section>
      <Section>
        <h1>Our Work</h1>
        <div className={styles.about}>
          <p>
            Allow us; As the
            {' '}
            <strong style={{ color: '#7c6db2' }}>world's only ISO-certified</strong>
            {' '}
            quality compliant product development agency to align the chakras of your business and advance
            your product and website to the next generation.
          </p>
          <Link className={styles.callToAction} to="/consultation">Get Started {'\u2192'}</Link>
        </div>
      </Section>
    </div>
    <Section>
      <div className={styles.testimonials}>
        <div className={styles.testimonialLeft}>
          <MediaQuery minWidth={800}>
            <div className={styles.testimonialBrowser}>
              <img width={668} height={332} alt="Bud Theory Screenshot" src={require('../../public/assets/clients/bt-screen.jpg')} />
            </div>
          </MediaQuery>
          <div className={styles.container}>
            <div className={styles.testimonialContent}>
              <h3>Bud Theory Cooperative</h3>
              <p>
                Our very first customer of our
                {' '}
                <a href="https://treesy.co" target="_blank">Treesy</a>
                {' '}
                cannabis eCommerce and delivery solutions.
              </p>
              <a className={styles.callToAction} target="_blank" href="https://budtheory.com/">Visit Bud Theory {'\u2192'}</a>
            </div>
          </div>
        </div>
        <div className={styles.testimonialRight}>
          <MediaQuery minWidth={800}>
            <div className={styles.testimonialBrowser}>
              <img width={668} height={332} alt="Hulkshare Screenshot" src={require('../../public/assets/clients/hulkshare-screen.jpg')} />
            </div>
          </MediaQuery>
          <div className={styles.container}>
            <div className={styles.testimonialContent}>
              <h3>HulkShare</h3>
              <p>#1 social hip-hip network serving millions of free listeners new hip-hop, RnB, and other genres.</p>
              <a className={styles.callToAction} target="_blank" href="http://www.hulkshare.com/">Visit HulkShare {'\u2192'}</a>
            </div>
          </div>
        </div>
        <div className={styles.testimonialLeft}>
          <MediaQuery minWidth={800}>
            <div className={styles.testimonialBrowser}>
              <img width={668} height={332} alt="Zaarly Screenshot" src={require('../../public/assets/clients/zaarly-screen.jpg')} />
            </div>
          </MediaQuery>
          <div className={styles.container}>
            <div className={styles.testimonialContent}>
              <h3>Zaarly</h3>
              <p>
                Next-generation home service provider.
                If you've stepped on a college campus,
                you've probably seen one of these t-shirts around.
              </p>
              <a className={styles.callToAction} target="_blank" href="http://www.zaarly.com/">Visit Zaarly {'\u2192'}</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section>
      <div className={styles.container}>
        <div className={styles.about}>
          <h1>Services</h1>
          <p>Just some of the things we do.</p>
          <ul className={styles.formChecklistHero}>
            {services.map(service => (
              <li key={service}>
                <label className={styles.formChecklistItem}>
                  <input checked readOnly type="checkbox" />
                  <span>
                    <span className={styles.formChecklistAlt}>
                      <MdCheck />
                    </span>
                    <span>{service}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <Link to="/consultation" className={styles.callToAction}>
            Receive Estimate {'\u2192'}
          </Link>
        </div>
      </div>
    </Section>
  </div>
)
