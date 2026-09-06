'use client'

import { useState } from 'react'
import { researchTabs } from '@/content/research'
import { galleryImages } from '@/content/gallery'
import DotPlot from './DotPlot'
import styles from './ResearchTabs.module.css'

const RADIUS = 420
const ANGLE = 360 / galleryImages.length

export default function ResearchTabs() {
  const [activeId, setActiveId] = useState(researchTabs[0].id)
  const active = researchTabs.find((t) => t.id === activeId) ?? researchTabs[0]

  return (
    <section className={styles.wrap}>
      <h2>Research</h2>
      <p className="lede">
        A quick tour of the analysis behind this site — RNA-seq, pathway
        enrichment, and sample structure — with figures you can browse below.
      </p>

      <div className={styles.stage} aria-hidden="true">
        <div className={styles.ring}>
          {galleryImages.map((img, i) => (
            <figure
              key={img.src}
              className={styles.card}
              style={{
                transform: `rotateY(${i * ANGLE}deg) translateZ(${RADIUS}px)`,
              }}
            >
              <img src={img.src} alt="" loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Research domains">
        {researchTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === activeId}
            className={styles.tab}
            data-active={t.id === activeId}
            onClick={() => setActiveId(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel">
        <p className={styles.desc}>{active.description}</p>
        {active.kind === 'dotplot' ? (
          <DotPlot />
        ) : (
          <img
            className={styles.image}
            src={active.src}
            alt={active.alt}
            loading="lazy"
          />
        )}
      </div>
    </section>
  )
}
