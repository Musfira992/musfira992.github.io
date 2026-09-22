import styles from './DotPlot.module.css'

type Cell = { frac: number; mean: number }

const cellTypes = ['T cell', 'B cell', 'Macrophage', 'Fibroblast', 'Epithelial']
const markerGenes = ['CD3E', 'MS4A1', 'LYZ', 'DCN', 'KRT8']

// Illustrative example data, not from a live dataset.
const matrix: Cell[][] = [
 [{ frac: 0.95, mean: 1.0 }, { frac: 0.05, mean: 0.1 }, { frac: 0.1, mean: 0.1 }, { frac: 0.02, mean: 0.05 }, { frac: 0.01, mean: 0.02 }],
 [{ frac: 0.08, mean: 0.1 }, { frac: 0.9, mean: 0.95 }, { frac: 0.05, mean: 0.1 }, { frac: 0.02, mean: 0.05 }, { frac: 0.01, mean: 0.02 }],
 [{ frac: 0.05, mean: 0.1 }, { frac: 0.03, mean: 0.05 }, { frac: 0.92, mean: 1.0 }, { frac: 0.1, mean: 0.15 }, { frac: 0.02, mean: 0.05 }],
 [{ frac: 0.02, mean: 0.05 }, { frac: 0.01, mean: 0.02 }, { frac: 0.15, mean: 0.2 }, { frac: 0.88, mean: 0.95 }, { frac: 0.03, mean: 0.05 }],
 [{ frac: 0.01, mean: 0.02 }, { frac: 0.01, mean: 0.02 }, { frac: 0.05, mean: 0.1 }, { frac: 0.05, mean: 0.1 }, { frac: 0.93, mean: 1.0 }],
]

const CELL = 56
const MAX_R = 20
const LABEL_LEFT = 100
const LABEL_TOP = 70
const PAD = 16

export default function DotPlot() {
 const width = LABEL_LEFT + markerGenes.length * CELL + PAD
 const height = LABEL_TOP + cellTypes.length * CELL + PAD

 return (
 <div className={styles.wrap}>
 <svg
 viewBox={`0 0 ${width} ${height}`}
 width="100%"
 style={{ maxWidth: width }}
 role="img"
 aria-label="Illustrative single-cell RNA-seq marker-gene dot plot"
 >
 {markerGenes.map((gene, c) => {
 const x = LABEL_LEFT + c * CELL + CELL / 2
 return (
 <text
 key={gene}
 x={x}
 y={LABEL_TOP - 12}
 className={styles.geneLabel}
 transform={`rotate(-40 ${x} ${LABEL_TOP - 12})`}
 >
 {gene}
 </text>
 )
 })}

 {cellTypes.map((type, r) => (
 <text key={type} x={LABEL_LEFT - 10} y={LABEL_TOP + r * CELL + CELL / 2 + 4} className={styles.rowLabel}>
 {type}
 </text>
 ))}

 {cellTypes.map((_, r) =>
 markerGenes.map((_, c) => {
 const cx = LABEL_LEFT + c * CELL + CELL / 2
 const cy = LABEL_TOP + r * CELL + CELL / 2
 const cell = matrix[r][c]
 const radius = Math.sqrt(cell.frac) * MAX_R
 const opacity = 0.12 + cell.mean * 0.88
 return (
 <circle
 key={`${r}-${c}`}
 cx={cx}
 cy={cy}
 r={radius}
 fill="var(--accent)"
 fillOpacity={opacity}
 stroke="var(--accent)"
 strokeOpacity={0.25}
 />
 )
 })
 )}
 </svg>

 <div className={styles.legend}>
 <div className={styles.legendGroup}>
 <span className={styles.legendLabel}>Fraction of cells</span>
 <svg width="120" height="28" viewBox="0 0 120 28" aria-hidden="true">
 {[0.25, 0.5, 0.75, 1].map((f, i) => (
 <circle key={f} cx={16 + i * 30} cy={14} r={Math.sqrt(f) * 11} fill="none" stroke="var(--text-muted)" />
 ))}
 </svg>
 </div>
 <div className={styles.legendGroup}>
 <span className={styles.legendLabel}>Mean expression</span>
 <div className={styles.legendGradient} />
 </div>
 </div>
 </div>
 )
}
