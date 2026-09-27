import type { Metadata } from 'next'
import styles from './primers.module.css'

export const metadata: Metadata = { title: 'Primers' }

const books = [
  {
    title: 'Genomics',
    href: 'https://www.musfirajamil.com/notes/genomics/',
  },
  {
    title: 'Databricks',
    href: 'https://www.musfirajamil.com/notes/databricks/',
  },
  {
    title: 'Software engineering for bioinformatics',
    href: 'https://www.musfirajamil.com/notes/software-engineering/',
  },
  {
    title: 'Statistics',
    href: 'https://www.musfirajamil.com/notes/statistics/',
  },
  {
    title: 'Data generation techniques',
    href: 'https://www.musfirajamil.com/notes/data-generation/',
  },
]

export default function Primers() {
  return (
    <section>
      <h1>Primers</h1>
      <p className="lede">
        The following are based on my learning notes that I am slowly
        converting into mini-books with the help of Codex, so anyone else
        interested can benefit as well.
      </p>
      <ul className={styles.list}>
        {books.map((book) => (
          <li key={book.href}>
            <a className={styles.link} href={book.href}>
              {book.title}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.hub}>
        <a className={styles.link} href="https://www.musfirajamil.com/notes/">
          All notes
        </a>
      </p>
    </section>
  )
}
