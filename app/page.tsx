import Link from 'next/link'
import Image from 'next/image'
import ResearchTabs from '@/components/home/ResearchTabs'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Hello — glad you&apos;re here</h1>
          <p className="lede">
            I&apos;m a Sydney-based data analyst with roots in plant biology and
            molecular genetics. I turn lab and business data into clear insight
            — with Power BI, SQL, Python, and a love of tidy process.
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

      <ResearchTabs />
    </>
  )
}
