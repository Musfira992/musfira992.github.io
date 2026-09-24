import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostsByCategory } from '@/content/posts'
import styles from './blog.module.css'

export const metadata: Metadata = { title: 'Blog Posts' }

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`)
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function BlogPosts() {
  const posts = getPostsByCategory('blog')

  return (
    <section>
      <h1>Blog Posts</h1>
      <p className="lede">
        Essays and reflections on data science, causal reasoning, and the
        questions worth asking about work and purpose.
      </p>
      <ul className={styles.list}>
        {posts.map((p) => (
          <li key={p.slug} className={styles.item}>
            <time className={styles.date} dateTime={p.date}>
              {formatDate(p.date)}
            </time>
            <div className={styles.body}>
              <Link href={`/blog/${p.slug}`} className={styles.title}>
                {p.title}
              </Link>
              <p className={styles.desc}>{p.excerpt}</p>
            </div>
            {p.thumb ? (
              <Link
                href={`/blog/${p.slug}`}
                className={styles.thumbLink}
                aria-hidden="true"
                tabIndex={-1}
              >
                <img
                  src={p.thumb}
                  alt={p.thumbAlt ?? ''}
                  className={styles.thumb}
                  width={320}
                  height={200}
                  loading="lazy"
                />
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
