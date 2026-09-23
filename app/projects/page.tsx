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
    thumb: '/images/projects/variable-n-rates-map.jpg',
    thumbAlt: 'Variable nitrogen rate map from NUE field analysis',
  },
  {
    href: '/blog/comparative-assessment-of-soil-fertility-geostatistics',
    title:
      'Comparative Assessment of Soil Fertility Parameters Using Geostatistical Approaches',
    description:
      'Comparing multiple linear regression with ordinary kriging, cokriging, and regression kriging for mapping soil fertility, and what that means for sampling design (Chapter 3).',
    thumb: '/images/projects/management-zones-map.jpg',
    thumbAlt: 'Management zones map from soil fertility geostatistics',
  },
  {
    href: '/blog/mouse-pdac-rnaseq-npy1r-knockout-exploration',
    title:
      'Exploring Mouse PDAC RNA-seq: Npy1r Knockout, QC, and Deconvolution',
    description:
      'Reproducible exploration of GEO GSE283652, edgeR QC/TMM, PCA, and mouse immune/stromal deconvolution for an Npy1r KO vs WT contrast.',
    thumb: '/images/research/pca-plot.png',
    thumbAlt: 'PCA plot of GSE283652 Npy1r WT versus KO samples',
  },
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <p className="lede">
        Selected research projects across crop science, spatial analysis, and
        data-driven molecular work. For the Master&apos;s thesis gallery and
        broader research overview, see the{' '}
        <Link href="/research">Research</Link> page.
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
    </section>
  )
}
