export type PrimerTopic = { name: string; href?: string }
export type PrimerGroup = { category: string; items: PrimerTopic[] }

export const primerGroups: PrimerGroup[] = [
  {
    category: 'Interactive Tutorials',
    items: [{ name: 'Reading a DNA Sequence', href: '/primers/reading-a-dna-sequence' }],
  },
  {
    category: 'Genomics',
    items: [{ name: 'DeepExplainer with the model trained on simulated genomic data from the DeepLIFT' }],
  },
  {
    category: 'DataBricks Series',
    items: [
      {
        name: 'AI Drug Discovery Made Easy: Your Complete Guide to Chemprop on Databricks',
        href: '/blog/chemprop-drug-discovery-on-databricks',
      },
      { name: '3 common Data Modeling Techniques' },
      { name: 'Dimensional modeling and Kimball Architecture' },
      { name: 'SQL Fundamentals in Databricks', href: '/blog/databricks-series-sql-fundamentals' },
      { name: 'Common analytics query patterns' },
      { name: 'Processing big data using Apache Spark in Databricks' },
      { name: 'Building data pipelines in Databricks' },
    ],
  },
  {
    category: 'Software Engineering',
    items: [
      { name: 'On building reliable data products' },
      { name: 'Tips for writing maintainable Python code' },
      { name: 'Common UNIX commands' },
      { name: 'Git' },
      { name: 'Is Julia going to replace Python?', href: '/blog/hello-julia' },
      { name: 'Software engineering concepts that every bioinformatics professional must know' },
    ],
  },
  {
    category: 'Statistics',
    items: [{ name: 'Art of data visualization' }, { name: 'Exploratory data analysis' }],
  },
  {
    category: 'Data Generation Techniques',
    items: [
      { name: 'DNA/RNA extraction' },
      { name: 'Protein extraction' },
      { name: 'Western blotting' },
      { name: 'PCR' },
      { name: 'Agarose gel electrophoresis' },
      { name: 'SDS-PAGE, cloning, and recombinant DNA technology' },
    ],
  },
]
