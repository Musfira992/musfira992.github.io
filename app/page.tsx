import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Hello, glad you&apos;re here</h1>
          <p className="lede">
            Sydney-based technical operations specialist and researcher with
            roots in plant biology, molecular genetics, and data. I bring
            transferable operations and analytics experience to public and
            private sector roles.
          </p>
          <p className={styles.ctaRow}>
            <Link className="button" href="/about">
              About me
            </Link>
            <Link href="/research" className={styles.textLink}>
              Explore research →
            </Link>
            <Link href="/projects" className={styles.textLink}>
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

      <section className={styles.narrative}>
        <h2>I am</h2>
        <ul className={styles.roleList}>
          <li>Plant biologist and molecular geneticist</li>
          <li>Crop breeding and field operations specialist</li>
          <li>Molecular biology and lab techniques trainer</li>
          <li>
            Data analyst (R, ArcGIS, SigmaPlot), with Power BI, SQL, and Python
            in day-to-day analytics work
          </li>
          <li>Continuous improvement advocate and mentor</li>
        </ul>

        <h2>Impact</h2>
        <ul className={styles.impactList}>
          <li>
            Led high-volume tissue sampling coordination across early breeding
            pipeline projects at Bayer Crop Science, collaborating with multiple
            cross-functional teams to deliver projects on time.
          </li>
          <li>
            Increased workflow efficiency by 15% by implementing a continuous
            cycling product design strategy.
          </li>
          <li>
            Optimised and documented SOPs for tissue sampling, enhancing
            efficiency, reducing errors, and improving quality control under a
            QMS framework.
          </li>
          <li>
            Trained and mentored staff, including teaching 120+ undergraduates
            in molecular biology techniques and supervising 15 teaching
            assistants at the University of Alberta.
          </li>
          <li>
            Presented operations and workflows to senior leadership teams and
            during site tours, fostering cross-functional alignment.
          </li>
          <li>
            Launched a peer-to-peer mentoring program at Bayer, recruiting 15+
            mentors and organising 30+ one-on-one sessions and workshops.
          </li>
          <li>
            Conducted a Master&apos;s research project on statistical and
            in-field challenges in quantifying crop nitrogen use efficiency
            (NUE) and spatial soil fertility in Central Alberta, comparing
            statistical models (linear, quadratic, piecewise regression) and
            geostatistical methods (kriging, cokriging, regression kriging) to
            improve precision agriculture.
          </li>
          <li>
            Presented research findings at scientific conferences and translated
            them into actionable recommendations for nutrient management and
            sustainable agriculture.
          </li>
        </ul>
      </section>
    </>
  )
}
