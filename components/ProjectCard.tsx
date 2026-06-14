import type { Project } from '@/content/projects'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <p className={styles.tags}>
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </p>
    </>
  )

  return <article className={styles.card}>{body}</article>
}
