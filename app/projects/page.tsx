import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './projects.module.css'

export const metadata: Metadata = { title: 'Projects' }

const NOTEBOOK_HREF = 'https://github.com/Musfira992'

type ChartTheme = 'trend' | 'seasonal' | 'peak'

const projects: {
  meta: string
  title: string
  phrase: string
  report: string
  theme: ChartTheme
}[] = [
  {
    meta: 'PROJECT · 01',
    title: 'Mouse PDAC RNA-seq',
    phrase:
      'Npy1r knockout QC, TMM, PCA, and immune/stromal deconvolution',
    report: '/blog/mouse-pdac-rnaseq-npy1r-knockout-exploration',
    theme: 'trend',
  },
  {
    meta: 'PROJECT · 02',
    title: 'Nutrient use efficiency',
    phrase: 'Statistical models for nitrogen responsiveness in the field',
    report: '/blog/enhancing-nutrient-use-efficiency-for-sustainable-agriculture',
    theme: 'seasonal',
  },
  {
    meta: 'PROJECT · 03',
    title: 'Soil fertility mapping',
    phrase: 'Kriging vs regression approaches for sampling design',
    report: '/blog/comparative-assessment-of-soil-fertility-geostatistics',
    theme: 'peak',
  },
]

export default function Projects() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>Projects</h1>
        <p className="lede">
          Selected research projects across bioinformatics, computational biology,
          cancer biology, crop science, and spatial analysis.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.report} className={styles.card}>
            <div className={styles.body}>
              <p className={styles.meta}>{project.meta}</p>
              <div className={styles.graphic}>
                <ProjectChart theme={project.theme} />
              </div>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.phrase}>{project.phrase}</p>
            </div>
            <div className={styles.actions}>
              <a
                className={`${styles.action} ${styles.notebook}`}
                href={NOTEBOOK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View notebook for ${project.title}`}
              >
                View notebook
              </a>
              <Link
                className={`${styles.action} ${styles.report}`}
                href={project.report}
                aria-label={`View report for ${project.title}`}
              >
                View report
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectChart({ theme }: { theme: ChartTheme }) {
  if (theme === 'trend') return <TrendChart />
  if (theme === 'seasonal') return <SeasonalChart />
  return <PeakChart />
}

function ChartFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className={styles.chart}
      viewBox="0 0 320 140"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

function TrendChart() {
  return (
    <ChartFrame>
      <path
        className={styles.trend}
        d="M16 112 C 78 104, 150 86, 220 66 C 258 55, 286 46, 304 40"
      />
      <path
        className={styles.ink}
        d="M18 116 C 26 112, 32 108, 40 110 C 50 112, 56 102, 66 100 C 76 98, 84 104, 94 98 C 104 92, 112 96, 122 90 C 132 84, 140 78, 150 80 C 160 82, 168 70, 178 64 C 188 58, 196 68, 206 60 C 216 52, 224 56, 234 46 C 244 36, 254 48, 264 40 C 274 32, 286 36, 304 30"
      />
    </ChartFrame>
  )
}

function SeasonalChart() {
  return (
    <ChartFrame>
      <path
        className={styles.trend}
        d="M14 102 C 120 88, 220 68, 306 50"
      />
      <path
        className={styles.ink}
        d="M16 108 C 28 96, 40 86, 54 88 C 68 90, 78 104, 92 110 C 106 116, 118 104, 130 90 C 142 76, 154 66, 168 68 C 182 70, 192 84, 206 90 C 220 96, 232 82, 246 68 C 258 54, 270 46, 284 48 C 296 50, 302 56, 308 50"
      />
    </ChartFrame>
  )
}

function PeakChart() {
  return (
    <ChartFrame>
      <path
        className={styles.ink}
        d="M14 86 C 28 90, 40 82, 54 86 C 66 89, 78 80, 92 84 C 104 87, 114 78, 126 70 C 138 58, 148 36, 160 26 C 170 18, 178 28, 190 42 C 202 56, 214 72, 228 80 C 242 86, 254 76, 268 80 C 282 83, 294 76, 306 78"
      />
      <path className={styles.marker} d="M164 12 V 112" />
    </ChartFrame>
  )
}
