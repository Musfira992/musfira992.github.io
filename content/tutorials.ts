export type TutorialMeta = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

// Registry of tutorials. Each slug maps to content/tutorials/<slug>.mdx
export const tutorials: TutorialMeta[] = [
  {
    slug: 'reading-a-dna-sequence',
    title: 'Reading a DNA Sequence',
    description:
      'A gentle introduction to nucleotides, reading frames, and how raw sequence data is interpreted — the foundation for interactive bioinformatics tutorials to come.',
    date: '2026-06-14',
    tags: ['Bioinformatics', 'DNA', 'Beginner'],
  },
]

export function getTutorial(slug: string) {
  return tutorials.find((t) => t.slug === slug)
}
