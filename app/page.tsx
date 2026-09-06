import Link from 'next/link'
import Image from 'next/image'
import ResearchGallery from '@/components/home/ResearchGallery'
import ResearchTabs from '@/components/home/ResearchTabs'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Musfira Jamil</h1>
          <p className="lede">
            Technical Operations Specialist &amp; Researcher working at the
            intersection of plant biology, molecular genetics, and data-driven
            decision making in agriculture and the life sciences.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            I enable excellence in research and laboratory operations —
            designing SOPs, training scientists, and turning field and lab data
            into actionable insight.
          </p>
          <p style={{ marginTop: '2rem' }}>
            <Link className="button" href="/about">
              About me
            </Link>
            <Link href="/projects" style={{ marginLeft: '1.25rem' }}>
              View projects →
            </Link>
          </p>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/images/hero-portrait.jpg"
            alt="Musfira Jamil"
            width={640}
            height={853}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      <ResearchGallery />
      <ResearchTabs />
    </>
  )
}
