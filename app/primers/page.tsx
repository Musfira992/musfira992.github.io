import type { Metadata } from 'next'
import styles from './primers.module.css'

export const metadata: Metadata = { title: 'Primers' }

export default function Primers() {
  return (
    <section>
      <h1>Primers</h1>
      <p className="lede">
        These are learning notes that I am slowly turning into a browsable
        handbook.
      </p>
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href="/notes/">
            Notes handbook
          </a>
        </li>
      </ul>
    </section>
  )
}
