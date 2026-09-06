export type PrimerTopic = { name: string; href?: string }
export type PrimerGroup = { category: string; items: PrimerTopic[] }

export const primerGroups: PrimerGroup[] = [
  {
    category: 'Interactive Tutorials',
    items: [{ name: 'Reading a DNA Sequence', href: '/primers/reading-a-dna-sequence' }],
  },
  {
    category: 'Genomics',
    items: [
      {
        name: 'DeepExplainer with the model trained on simulated genomic data from the DeepLIFT',
        href: '/blog/deepexplainer-simulated-genomic-data-deeplift',
      },
    ],
  },
  {
    category: 'DataBricks Series',
    items: [
      {
        name: 'AI Drug Discovery Made Easy: Your Complete Guide to Chemprop on Databricks',
        href: '/blog/chemprop-drug-discovery-on-databricks',
      },
      {
        name: '3 common Data Modeling Techniques',
        href: '/blog/databricks-series-data-modeling-techniques',
      },
      {
        name: 'Dimensional modeling and Kimball Architecture',
        href: '/blog/databricks-series-dimensional-modeling-kimball',
      },
      { name: 'SQL Fundamentals in Databricks', href: '/blog/databricks-series-sql-fundamentals' },
      {
        name: 'Common analytics query patterns',
        href: '/blog/databricks-series-analytics-query-patterns',
      },
      {
        name: 'Processing big data using Apache Spark in Databricks',
        href: '/blog/databricks-series-apache-spark',
      },
      {
        name: 'Building data pipelines in Databricks',
        href: '/blog/databricks-series-data-pipelines',
      },
    ],
  },
  {
    category: 'Software Engineering',
    items: [
      { name: 'On building reliable data products', href: '/blog/building-reliable-data-products' },
      {
        name: 'Tips for writing maintainable Python code',
        href: '/blog/maintainable-python',
      },
      { name: 'Common UNIX commands', href: '/blog/common-unix-commands' },
      { name: 'Git', href: '/blog/git-essentials' },
      { name: 'Is Julia going to replace Python?', href: '/blog/hello-julia' },
      {
        name: 'Software engineering concepts that every bioinformatics professional must know',
        href: '/blog/software-engineering-for-bioinformatics',
      },
    ],
  },
  {
    category: 'Statistics',
    items: [
      { name: 'Art of data visualization', href: '/blog/art-of-data-visualization' },
      { name: 'Exploratory data analysis', href: '/blog/exploratory-data-analysis' },
    ],
  },
  {
    category: 'Data Generation Techniques',
    items: [
      { name: 'DNA/RNA extraction', href: '/blog/dna-rna-extraction' },
      { name: 'Protein extraction', href: '/blog/protein-extraction' },
      { name: 'Western blotting', href: '/blog/western-blotting' },
      { name: 'PCR', href: '/blog/pcr-primer' },
      { name: 'Agarose gel electrophoresis', href: '/blog/agarose-gel-electrophoresis' },
      {
        name: 'SDS-PAGE, cloning, and recombinant DNA technology',
        href: '/blog/sds-page-cloning-recombinant-dna',
      },
    ],
  },
]
