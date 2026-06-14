import type { Metadata } from 'next'
import Link from 'next/link'
import { tutorials } from '@/content/tutorials'
import styles from './tutorials.module.css'

export const metadata: Metadata = { title: 'Tutorials' }

export default function Tutorials() {
  return (
    <section>
      <h1>Tutorials</h1>
      <p className="lede">
        Explainers and walkthroughs in molecular biology, data analysis, and
        bioinformatics — with interactive, explorable examples planned.
      </p>
      <ul className={styles.list}>
        {tutorials.map((t) => (
          <li key={t.slug} className={styles.item}>
            <Link href={`/tutorials/${t.slug}`} className={styles.title}>
              {t.title}
            </Link>
            <p className={styles.desc}>{t.description}</p>
            <p className={styles.meta}>
              <time dateTime={t.date}>{t.date}</time>
              {t.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
