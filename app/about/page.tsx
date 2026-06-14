import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function About() {
  return (
    <article>
      <h1>About</h1>
      <p className="lede">
        I have expertise in the data engineering aspects of bioinformatics and
        professional experience with a strong background in plant biology,
        molecular genetics, and R&amp;D operations.
      </p>

      <p>
        I work towards enabling excellence in research, laboratory operations,
        and data-driven decision making in agriculture and the life sciences. I
        provide support, training, and expertise in molecular biology
        techniques, crop research operations, laboratory management, statistical
        modelling, and geospatial analysis for precision agriculture.
      </p>

      <p>
        At Bayer Crop Science I led high-volume tissue sampling coordination
        across early breeding pipeline projects, collaborating with
        cross-functional teams to deliver on time. I increased workflow
        efficiency by 15% through a continuous cycling product design strategy,
        and optimized and documented SOPs for tissue sampling under a QMS
        framework — reducing errors and improving quality control. I also
        launched a peer-to-peer mentoring program, recruiting 15+ mentors and
        organizing 30+ one-on-one sessions and workshops.
      </p>

      <p>
        At the University of Alberta I trained and mentored staff, taught 120+
        undergraduates in molecular biology techniques, and supervised 15
        teaching assistants. My Master&apos;s research examined the statistical
        and in-field challenges of quantifying crop Nitrogen Use Efficiency
        (NUE) and spatial soil fertility in Central Alberta — comparing
        regression models and geostatistical methods to improve precision
        agriculture.
      </p>

      <h2>Skills &amp; expertise</h2>
      <ul>
        <li>
          <strong>Laboratory techniques:</strong> cell culture, DNA/RNA and
          protein extraction, PCR, gel electrophoresis (agarose &amp; SDS-PAGE),
          Western blotting, molecular cloning, recombinant DNA technology, Next
          Generation Sequencing.
        </li>
        <li>
          <strong>Field &amp; operations:</strong> tissue sampling coordination,
          integrated pest management training, SOP optimization, QMS compliance.
        </li>
        <li>
          <strong>Data analysis:</strong> R, SigmaPlot, ArcGIS; statistical and
          geostatistical modelling for crop and soil data.
        </li>
        <li>
          <strong>Training &amp; leadership:</strong> designing and delivering
          training, mentoring, and process improvement across academic and
          industry settings.
        </li>
      </ul>

      <h2>Recognitions</h2>
      <ul>
        <li>🏆 Multiple Bayer Recognition Awards for leadership, integrity, and efficiency.</li>
        <li>
          📜 Letter of Commendation from the Department of Biological Sciences,
          University of Alberta, for enhancing the teaching program.
        </li>
        <li>💰 Awarded ~CAD 85,000 in fellowships and teaching assistantships.</li>
      </ul>
    </article>
  )
}
