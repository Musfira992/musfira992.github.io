export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Crop Nitrogen Use Efficiency & Spatial Soil Fertility (MSc)',
    description:
      'Master’s research quantifying crop NUE and spatial soil fertility in Central Alberta. Compared regression models (linear, quadratic, piecewise) with geostatistical methods (kriging, cokriging, regression kriging) to improve precision-agriculture nutrient management.',
    tags: ['Geostatistics', 'R', 'ArcGIS', 'Precision Ag'],
  },
  {
    title: 'Tissue Sampling SOP Optimization — Bayer Crop Science',
    description:
      'Optimized and documented standard operating procedures for high-volume tissue sampling under a QMS framework, reducing errors and improving quality control while raising workflow efficiency by 15%.',
    tags: ['Operations', 'QMS', 'SOP', 'Process Improvement'],
  },
  {
    title: 'Early Breeding Pipeline Sampling Coordination',
    description:
      'Led high-volume tissue sampling coordination across early breeding pipeline projects, collaborating with multiple cross-functional teams to deliver projects on time.',
    tags: ['Crop Breeding', 'Coordination', 'Field Ops'],
  },
  {
    title: 'Molecular Biology Training Program — University of Alberta',
    description:
      'Designed and delivered molecular biology technique training for 120+ undergraduates and supervised 15 teaching assistants, earning a Letter of Commendation for enhancing the teaching program.',
    tags: ['Teaching', 'Molecular Biology', 'Mentoring'],
  },
  {
    title: 'Peer-to-Peer Mentoring Program — Bayer',
    description:
      'Founded and ran a peer mentoring program, recruiting 15+ mentors and organizing 30+ one-on-one sessions and workshops to support professional development.',
    tags: ['Leadership', 'Mentoring', 'Culture'],
  },
]
