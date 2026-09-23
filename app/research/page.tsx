import type { Metadata } from 'next'
import ResearchTabs from '@/components/home/ResearchTabs'
import styles from './research.module.css'

export const metadata: Metadata = { title: 'Research' }

const thesisGallery = [
  {
    src: '/images/projects/field-sampling.jpg',
    caption: 'Field sampling to quantify spatial variability',
  },
  {
    src: '/images/projects/high-productivity-crop.jpg',
    caption: 'High productivity crop based on variable nitrogen rates',
  },
  {
    src: '/images/projects/variable-n-rates-map.jpg',
    caption: 'Variable nitrogen rate map across study fields',
  },
  {
    src: '/images/projects/management-zones-map.jpg',
    caption: 'Management zones for precision nutrient application',
  },
  {
    src: '/images/projects/study-site-layout.jpg',
    caption: 'Study site layout for in-field NUE trials',
  },
]

export default function Research() {
  return (
    <section>
      <h1>Research</h1>
      <p className="lede">
        Quantitative work spanning crop nitrogen use efficiency, spatial soil
        fertility, and molecular datasets, anchored by Master&apos;s thesis
        fieldwork in Central Alberta and extended through later projects.
      </p>

      <div className={styles.thesis}>
        <h2>Master&apos;s thesis, Nitrogen use efficiency</h2>
        <p className={styles.thesisIntro}>
          Dedicated to examining nitrogen use efficiency estimations and spatial
          heterogeneity in crop fields across Central Alberta.
        </p>

        <div className={styles.gallery}>
          {thesisGallery.map((item) => (
            <figure key={item.src} className={styles.card}>
              <img src={item.src} alt={item.caption} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p className={styles.thesisLink}>
          <a href="https://ualberta.scholaris.ca/items/23bdbfc3-c9ad-453e-8940-219eab399e6c">
            Read the full thesis on the University of Alberta repository →
          </a>
        </p>
        <p className={`muted ${styles.thesisCite}`}>
          <em>
            Statistical and In-field Challenges Involved in Quantifying Crop
            Nitrogen Use Efficiency (NUE) and Spatial Soil Fertility in Central
            Alberta
          </em>
          , University of Alberta, 2019.
        </p>
      </div>

      <div className={styles.broader}>
        <ResearchTabs />
      </div>
    </section>
  )
}
