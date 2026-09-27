import type { Metadata } from 'next'
import Image from 'next/image'
import { events, type SiteEvent } from '@/content/events'
import styles from './news.module.css'

export const metadata: Metadata = { title: 'News & Events' }

const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

function toDateTime(date: string): string | undefined {
  const yearOnly = date.match(/^(\d{4})$/)
  if (yearOnly) return yearOnly[1]

  const monthYear = date.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (!monthYear) return undefined

  const month = MONTHS.indexOf(monthYear[1].toLowerCase())
  if (month < 0) return undefined

  return `${monthYear[2]}-${String(month + 1).padStart(2, '0')}`
}

function EventGallery({ event }: { event: SiteEvent }) {
  if (event.photos.length === 0) {
    return <p className={styles.comingSoon}>Photos coming soon</p>
  }

  return (
    <ul className={styles.gallery}>
      {event.photos.map((photo) => (
        <li key={photo.src}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className={styles.photo}
          />
        </li>
      ))}
    </ul>
  )
}

export default function News() {
  return (
    <section>
      <h1>News &amp; Events</h1>
      <p className="lede">
        Conferences, exhibitions, and other events I have attended, with a
        short note on what I took from each one.
      </p>
      <ol className={styles.timeline}>
        {events.map((event) => {
          const dateTime = toDateTime(event.date)
          return (
            <li key={event.id} id={event.id} className={styles.event}>
              <article className={styles.card}>
                <p className={styles.meta}>
                  {dateTime ? (
                    <time dateTime={dateTime}>{event.date}</time>
                  ) : (
                    <span>{event.date}</span>
                  )}
                  {event.href ? (
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Event site
                    </a>
                  ) : null}
                </p>
                <h2 className={styles.title}>{event.title}</h2>
                <p className={styles.summary}>{event.summary}</p>
                <EventGallery event={event} />
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
