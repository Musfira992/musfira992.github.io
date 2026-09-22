export type ResearchTab =
 | { id: string; label: string; description: string; kind: 'dotplot' }
 | { id: string; label: string; description: string; kind: 'image'; src: string; alt: string }

export const researchTabs: ResearchTab[] = [
 {
 id: 'single-cell',
 label: 'Single-cell RNA-seq',
 description:
 'An illustrative marker-gene dot plot: dot size is the fraction of cells expressing a gene, color is mean expression, and the diagonal pattern shows how a handful of markers separate cell types cleanly.',
 kind: 'dotplot',
 },
 {
 id: 'differential-expression',
 label: 'Differential Expression',
 description:
 'Volcano plot from bulk RNA-seq differential expression analysis (GSE283652, Npy1r KO vs WT), highlighted points are candidate mechanism markers.',
 kind: 'image',
 src: '/images/research/volcano-ko-vs-wt.png',
 alt: 'Volcano plot of differential expression, Npy1r knockout vs wild type',
 },
 {
 id: 'pathway-enrichment',
 label: 'Pathway Enrichment',
 description:
 'Gene set enrichment analysis (GSEA) against the MSigDB Hallmark collection, ranked by normalized enrichment score.',
 kind: 'image',
 src: '/images/research/gsea-hallmark.png',
 alt: 'Bar chart of GSEA Hallmark pathway enrichment scores',
 },
]
