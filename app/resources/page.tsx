import type { Metadata } from 'next'
import Link from 'next/link'
import { resourceGroups } from '@/content/resources'
import styles from './resources.module.css'

export const metadata: Metadata = { title: 'Resources' }

export default function Resources() {
  return (
    <section>
      <h1>Resources</h1>
      <p className="lede">
        A curated set of tools, databases, and references I rely on across the
        lab, the field, and the analysis pipeline.
      </p>

      <div className={styles.guides}>
        <h2>Guides &amp; tutorials</h2>
        <p>
          <Link
            href="/blog/chemprop-drug-discovery-on-databricks"
            className="button"
          >
            AI Drug Discovery Made Easy: Your Complete Guide to Chemprop on
            Databricks →
          </Link>
        </p>
        <p className="muted">
          Using Chemprop for molecular property prediction as a managed
          Databricks workflow — from pretrained models to multi-task ADMET
          regressors.
        </p>
      </div>

      {resourceGroups.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>
          <ul className={styles.list}>
            {group.items.map((item) => (
              <li key={item.name} className={styles.item}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
                <span className="muted"> — {item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
