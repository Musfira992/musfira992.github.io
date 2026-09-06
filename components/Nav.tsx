import Link from 'next/link'
import styles from './Nav.module.css'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog Posts' },
  { href: '/primers', label: 'Primers' },
  { href: '/teaching', label: 'Teaching and Training' },
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
