import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './projects.module.css'

export const metadata: Metadata = { title: 'Projects' }

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

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <p className="lede">
        Selected work across crop science, spatial analysis, and data-driven
        research — starting with my Master&apos;s thesis.
      </p>

      <div className={styles.projectBlock}>
        <h2>Master&apos;s thesis — Nitrogen use efficiency</h2>
        <p>
          Dedicated to examining nitrogen use efficiency estimations and
          spatial heterogeneity in crop fields across Central Alberta.
        </p>

        <div className={styles.gallery}>
          {thesisGallery.map((item) => (
            <figure key={item.src} className={styles.card}>
              <img src={item.src} alt={item.caption} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p>
          <a href="https://ualberta.scholaris.ca/items/23bdbfc3-c9ad-453e-8940-219eab399e6c">
            Read the full thesis on the University of Alberta repository →
          </a>
        </p>
        <p className="muted">
          <em>
            Statistical and In-field Challenges Involved in Quantifying Crop
            Nitrogen Use Efficiency (NUE) and Spatial Soil Fertility in Central
            Alberta
          </em>
          , University of Alberta, 2019.
        </p>
      </div>

      <div className={styles.more}>
        <h2>Writing &amp; tutorials</h2>

        <p>
          <Link
            href="/blog/enhancing-nutrient-use-efficiency-for-sustainable-agriculture"
            className="button"
          >
            Enhancing Nutrient Use Efficiency for Sustainable Agriculture →
          </Link>
        </p>
        <p className="muted">
          Real-world challenges in improving nutrient use efficiency, and
          statistical models for quantifying nitrogen responsiveness
          (Chapter&nbsp;2).
        </p>

        <p>
          <Link
            href="/blog/comparative-assessment-of-soil-fertility-geostatistics"
            className="button"
          >
            Comparative Assessment of Soil Fertility Parameters Using
            Geostatistical Approaches →
          </Link>
        </p>
        <p className="muted">
          Comparing multiple linear regression with ordinary kriging,
          cokriging, and regression kriging for mapping soil fertility — and
          what that means for sampling design (Chapter&nbsp;3).
        </p>
      </div>
    </section>
  )
}
