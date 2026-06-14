import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ProjectCard'
import styles from './projects.module.css'

export const metadata: Metadata = { title: 'Projects' }

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <p className="lede">
        Selected research and operations work across crop science, molecular
        biology, and precision agriculture.
      </p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
