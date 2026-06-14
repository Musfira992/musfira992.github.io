import Link from 'next/link'
import styles from './Nav.module.css'

const links = [
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/resources', label: 'Resources' },
]

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          Musfira Jamil
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
