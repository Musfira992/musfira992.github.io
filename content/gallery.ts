export type GalleryImage = { src: string; caption: string }

// Real output from the GSE283652 PDAC RNA-seq analysis (analysis/GSE283652_PDAC_RNAseq/).
export const galleryImages: GalleryImage[] = [
 { src: '/images/research/pca-plot.png', caption: 'PCA of top 2000 variable genes' },
 { src: '/images/research/volcano-ko-vs-wt.png', caption: 'Differential expression: KO vs WT' },
 { src: '/images/research/gsea-hallmark.png', caption: 'GSEA, Hallmark pathway enrichment' },
 { src: '/images/research/deconvolution.png', caption: 'Cell-type deconvolution by genotype' },
 { src: '/images/research/mds-plot.png', caption: 'Sample structure (MDS)' },
 { src: '/images/research/marker-gene-check.png', caption: 'Marker gene expression check' },
 { src: '/images/research/gsea-enrichment-top.png', caption: 'Top enriched gene sets' },
 { src: '/images/research/pc3-go-enrichment.png', caption: 'GO enrichment along PC3' },
 { src: '/images/research/pca-scree.png', caption: 'PCA scree plot' },
 { src: '/images/research/mean-variance.png', caption: 'Mean-variance trend (voom)' },
]
