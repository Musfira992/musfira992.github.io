import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'CV' }

export default function CV() {
  return (
    <article>
      <h1>Curriculum Vitae</h1>
      <p className="lede">
        A summary of my experience, education, and skills. A full PDF version is
        available to download.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        <a className="button" href="/cv.pdf" download>
          Download CV (PDF)
        </a>
      </p>

      <hr />

      <h2>Experience</h2>

      <h3>Technical Operations Specialist — Bayer Crop Science</h3>
      <ul>
        <li>
          Led high-volume tissue sampling coordination across early breeding
          pipeline projects, collaborating with cross-functional teams to
          deliver on time.
        </li>
        <li>
          Increased workflow efficiency by 15% via a continuous cycling product
          design strategy.
        </li>
        <li>
          Optimized and documented SOPs for tissue sampling under a QMS
          framework, reducing errors and improving quality control.
        </li>
        <li>
          Launched a peer-to-peer mentoring program — 15+ mentors, 30+ one-on-one
          sessions and workshops.
        </li>
      </ul>

      <h3>Researcher &amp; Teaching Assistant — University of Alberta</h3>
      <ul>
        <li>Taught 120+ undergraduates in molecular biology techniques; supervised 15 teaching assistants.</li>
        <li>
          Conducted Master&apos;s research on quantifying crop Nitrogen Use
          Efficiency (NUE) and spatial soil fertility in Central Alberta.
        </li>
        <li>
          Compared regression models (linear, quadratic, piecewise) and
          geostatistical methods (kriging, cokriging, regression kriging) for
          precision agriculture.
        </li>
        <li>Presented findings at scientific conferences and translated them into nutrient-management recommendations.</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>
          <strong>M.Sc.</strong> — Plant Biology / Precision Agriculture,
          University of Alberta.
        </li>
      </ul>

      <h2>Core skills</h2>
      <p>
        <span className="tag">Molecular biology</span>
        <span className="tag">PCR &amp; NGS</span>
        <span className="tag">SOP &amp; QMS</span>
        <span className="tag">R</span>
        <span className="tag">ArcGIS</span>
        <span className="tag">SigmaPlot</span>
        <span className="tag">Geostatistics</span>
        <span className="tag">Training &amp; mentoring</span>
      </p>

      <p className="muted" style={{ marginTop: '2rem', fontSize: 'var(--step--1)' }}>
        Note: place your CV file at <code>public/cv.pdf</code> for the download
        button to work.
      </p>
    </article>
  )
}
