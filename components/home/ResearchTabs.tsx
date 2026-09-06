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
        From Master&apos;s thesis work on nitrogen use efficiency and
        geostatistical soil fertility mapping in Central Alberta, to research
        projects on nutrient responsiveness, spatial interpolation, and mouse
        PDAC bulk RNA-seq (edgeR QC/TMM, PCA, immune deconvolution) — plus
        transcriptomic workflows for marker discovery, differential expression,
        and gene-set enrichment. The same quantitative discipline runs through
        crop field maps and molecular datasets. Browse the orbiting figures for
        pipeline outputs, then open a domain below for the underlying plots and
        interpretation.
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
