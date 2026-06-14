export type Resource = { name: string; url: string; note: string }
export type ResourceGroup = { category: string; items: Resource[] }

export const resourceGroups: ResourceGroup[] = [
  {
    category: 'Lab & Molecular Biology',
    items: [
      { name: 'NCBI', url: 'https://www.ncbi.nlm.nih.gov/', note: 'Sequence databases, BLAST, PubMed.' },
      { name: 'Ensembl Plants', url: 'https://plants.ensembl.org/', note: 'Genomes and annotation for crop species.' },
      { name: 'Benchling', url: 'https://www.benchling.com/', note: 'Cloud notebook & molecular cloning tools.' },
    ],
  },
  {
    category: 'Data Analysis & Statistics',
    items: [
      { name: 'R Project', url: 'https://www.r-project.org/', note: 'Statistical computing and graphics.' },
      { name: 'Tidyverse', url: 'https://www.tidyverse.org/', note: 'Opinionated R packages for data science.' },
      { name: 'gstat', url: 'https://cran.r-project.org/package=gstat', note: 'Geostatistical modelling, kriging & variograms.' },
    ],
  },
  {
    category: 'Geospatial & Field Operations',
    items: [
      { name: 'QGIS', url: 'https://qgis.org/', note: 'Free, open-source GIS — an ArcGIS alternative.' },
      { name: 'ArcGIS', url: 'https://www.esri.com/en-us/arcgis/', note: 'Spatial analysis for precision agriculture.' },
    ],
  },
  {
    category: 'Bioinformatics',
    items: [
      { name: 'Bioconductor', url: 'https://www.bioconductor.org/', note: 'R packages for genomic data analysis.' },
      { name: 'Galaxy', url: 'https://usegalaxy.org/', note: 'Web-based platform for reproducible analysis.' },
      { name: 'igv.js', url: 'https://github.com/igvteam/igv.js', note: 'Embeddable genome browser (planned in tutorials).' },
    ],
  },
]
