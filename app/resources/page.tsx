import type { Metadata } from 'next'
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
