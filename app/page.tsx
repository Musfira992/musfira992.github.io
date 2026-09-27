import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Welcome!</h1>
          <p className="lede">
            I&apos;m a Sydney-based technologist and researcher with a
            background in plant biology, cancer research, and molecular
            genetics. I bring transferable operations and analytics experience
            to public and private sector roles.
          </p>
          <p className={styles.ctaRow}>
            <Link className="button" href="/about">
              About me
            </Link>
            <a
              className={styles.buttonOutline}
              href="https://github.com/Musfira992"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className={styles.buttonOutline}
              href="https://au.linkedin.com/in/musfirajamil"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/images/hero-portrait.jpg"
            alt="Musfira Jamil"
            width={960}
            height={1278}
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
            At Bayer Crop Science, led high-volume tissue sampling coordination
            across early breeding pipeline projects, collaborating with
            cross-functional teams to deliver on time.
          </li>
          <li>
            At Bayer Crop Science, increased workflow efficiency by ~15% by
            implementing a continuous cycling product design strategy.
          </li>
          <li>
            At Bayer Crop Science, optimised and documented SOPs for tissue
            sampling under a QMS framework, improving efficiency, reducing
            errors, and strengthening quality control.
          </li>
          <li>
            At Bayer Crop Science, presented early breeding operations and
            tissue sampling workflows to senior leadership and during site
            tours, supporting cross-functional alignment.
          </li>
          <li>
            At Bayer Crop Science, launched a peer-to-peer mentoring program,
            recruiting 15+ mentors and organising 30+ one-on-one sessions and
            workshops.
          </li>
          <li>
            At the University of Alberta, taught 120+ undergraduates in
            molecular biology techniques and supervised 15 teaching assistants
            in Molecular Genetics and Heredity.
          </li>
          <li>
            At the University of Alberta, completed Master&apos;s research on
            crop nitrogen use efficiency (NUE) and spatial soil fertility in
            Central Alberta, comparing statistical and geostatistical models
            for precision agriculture.
          </li>
          <li>
            At the University of Alberta, presented research findings at
            scientific conferences and translated them into recommendations for
            nutrient management and sustainable agriculture.
          </li>
          <li>
            At the National Institute for Genomics and Advanced Biotechnology
            (NARC), provided molecular biology support for GMO laboratory
            research and led an independent maize transcription-factor project
            combining in-silico and molecular analyses.
          </li>
        </ul>
      </section>
    </>
  )
}
