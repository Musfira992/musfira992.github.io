import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className="muted">© {year} Musfira Jamil</span>
        <span className={styles.links}>
          <a href="https://github.com/Musfira992">GitHub</a>
          <a href="mailto:musfirajamil@gmail.com">Email</a>
        </span>
      </div>
    </footer>
  )
}
