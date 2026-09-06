import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './projects.module.css'

export const metadata: Metadata = { title: 'Projects' }

const researchProjects = [
  {
    href: '/blog/enhancing-nutrient-use-efficiency-for-sustainable-agriculture',
    title: 'Enhancing Nutrient Use Efficiency for Sustainable Agriculture',
    description:
      'Real-world challenges in improving nutrient use efficiency, and statistical models for quantifying nitrogen responsiveness (Chapter 2).',
    thumb: '/images/projects/thumb-nue.jpg',
    thumbAlt: 'Variable nitrogen rate map from NUE field analysis',
  },
  {
    href: '/blog/comparative-assessment-of-soil-fertility-geostatistics',
    title:
      'Comparative Assessment of Soil Fertility Parameters Using Geostatistical Approaches',
    description:
      'Comparing multiple linear regression with ordinary kriging, cokriging, and regression kriging for mapping soil fertility — and what that means for sampling design (Chapter 3).',
    thumb: '/images/projects/thumb-soil.jpg',
    thumbAlt: 'Management zones map from soil fertility geostatistics',
  },
  {
    href: '/blog/mouse-pdac-rnaseq-npy1r-knockout-exploration',
    title:
      'Exploring Mouse PDAC RNA-seq: Npy1r Knockout, QC, and Deconvolution',
    description:
      'Reproducible exploration of GEO GSE283652 — edgeR QC/TMM, PCA, and mouse immune/stromal deconvolution for an Npy1r KO vs WT contrast.',
    thumb: '/images/projects/thumb-rna.jpg',
    thumbAlt: 'PCA plot of GSE283652 Npy1r WT versus KO samples',
  },
]

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
        research — research projects first, then the Master&apos;s thesis
        gallery.
      </p>

      <div className={styles.more}>
        <h2>Research projects</h2>

        <div className={styles.projectList}>
          {researchProjects.map((project) => (
            <article key={project.href} className={styles.projectItem}>
              <Link href={project.href} className={styles.projectThumbLink}>
                <img
                  src={project.thumb}
                  alt={project.thumbAlt}
                  className={styles.projectThumb}
                  loading="lazy"
                />
              </Link>
              <div className={styles.projectBody}>
                <Link href={project.href} className={styles.projectTitle}>
                  {project.title}
                  <span className={styles.projectArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
                <p className={`muted ${styles.projectDesc}`}>
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

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
    </section>
  )
}
