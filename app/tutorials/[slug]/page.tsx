import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { tutorials, getTutorial } from '@/content/tutorials'

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = getTutorial(slug)
  return { title: meta?.title ?? 'Tutorial' }
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const meta = getTutorial(slug)
  if (!meta) notFound()

  let Content: React.ComponentType
  try {
    const mod = await import(`@/content/tutorials/${slug}.mdx`)
    Content = mod.default
  } catch {
    notFound()
  }

  return (
    <article>
      <p style={{ marginBottom: '0.5rem' }}>
        <Link href="/tutorials">← All tutorials</Link>
      </p>
      <h1>{meta.title}</h1>
      <p className="muted" style={{ fontSize: 'var(--step--1)' }}>
        <time dateTime={meta.date}>{meta.date}</time>
      </p>
      <hr />
      <Content />
    </article>
  )
}
