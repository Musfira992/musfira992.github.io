import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h1>Musfira Jamil</h1>
      <p className="lede">
        Technical Operations Specialist &amp; Researcher working at the
        intersection of plant biology, molecular genetics, and data-driven
        decision making in agriculture and the life sciences.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        I enable excellence in research and laboratory operations — designing
        SOPs, training scientists, and turning field and lab data into
        actionable insight.
      </p>
      <p style={{ marginTop: '2rem' }}>
        <Link className="button" href="/about">
          About me
        </Link>
        <Link href="/projects" style={{ marginLeft: '1.25rem' }}>
          View projects →
        </Link>
      </p>
    </section>
  )
}
