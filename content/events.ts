// Add an event at the top of `events` (newest first) and drop photos into public/images/events/<id>/ (src, alt, width, height).

export type EventPhoto = {
  src: string
  alt: string
  width: number
  height: number
}

export type SiteEvent = {
  id: string
  title: string
  date: string
  href?: string
  summary: string
  photos: EventPhoto[]
}

export const events: SiteEvent[] = [
  {
    id: 'art-of-discovery',
    title: 'Art of Discovery, Garvan Institute of Medical Research',
    date: 'August 2026',
    href: 'https://www.garvan.org.au/art-of-discovery',
    summary:
      'I visited Garvan\'s Art of Discovery exhibition in Darlinghurst, where work in genomics, cancer, and immunology is translated into large-scale imagery. Microscopy and data became lightboxes and visual stories, and it was striking to see familiar kinds of biological questions presented with that kind of care. The visit left me thinking about how science reaches people when the image is allowed to lead.',
    photos: [
      {
        src: '/images/events/art-of-discovery/01.jpg',
        alt: 'Musfira Jamil at Garvan Art of Discovery, standing before a circular scientific artwork',
        width: 1600,
        height: 1067,
      },
      {
        src: '/images/events/art-of-discovery/02.jpg',
        alt: 'Musfira Jamil beside a yellow and magenta point-cloud artwork at Art of Discovery',
        width: 1600,
        height: 1067,
      },
      {
        src: '/images/events/art-of-discovery/03.jpg',
        alt: 'Musfira Jamil with arms crossed beside a green fluorescent micrograph at Art of Discovery',
        width: 1600,
        height: 1067,
      },
      {
        src: '/images/events/art-of-discovery/04.jpg',
        alt: 'Musfira Jamil wearing glasses beside purple and pink microscopy panels at Art of Discovery',
        width: 1600,
        height: 1067,
      },
    ],
  },
  {
    id: 'databricks-data-ai-summit-2026',
    title: 'Databricks Data + AI Summit 2026',
    date: 'June 2026',
    href: 'https://www.databricks.com/dataaisummit',
    summary:
      'I attended the Databricks Data + AI Summit to learn how teams design and run modern data and AI platforms. The programme covered lakehouse architecture, data governance, and practical machine learning, with a strong emphasis on turning experimental work into systems people can trust. It was a useful chance to compare those approaches with the analytics and operations problems I see in research and industry, and to note the practices I want to try next.',
    photos: [
      {
        src: '/images/events/databricks-data-ai-summit-2026/01.jpg',
        alt: 'Musfira Jamil with colleagues in front of the Databricks Data + AI Summit 2026 backdrop',
        width: 1600,
        height: 1200,
      },
      {
        src: '/images/events/databricks-data-ai-summit-2026/02.jpg',
        alt: 'Musfira Jamil with a colleague in front of the Data + AI Summit 2026 step-and-repeat',
        width: 1600,
        height: 1200,
      },
      {
        src: '/images/events/databricks-data-ai-summit-2026/03.jpg',
        alt: 'Musfira Jamil with colleagues at the Databricks Data + AI Summit 2026',
        width: 1600,
        height: 1200,
      },
      {
        src: '/images/events/databricks-data-ai-summit-2026/04.jpg',
        alt: 'Musfira Jamil at the Databricks Data + AI Summit 2026, wearing a summit lanyard',
        width: 1200,
        height: 1600,
      },
    ],
  },
]
