'use client'

import { useState } from 'react'
import { BASE_COLORS, complement, cleanSeq } from './dna'
import styles from './viz.module.css'

// Interactive editable sequence with complementary strand and base-pair highlighting.
export default function SequenceViewer({
  initial = 'ATGGCATTACGT',
}: {
  initial?: string
}) {
  const [seq, setSeq] = useState(cleanSeq(initial))
  const [hover, setHover] = useState<number | null>(null)
  const comp = complement(seq)
  const bases = seq.split('')

  return (
    <div className={styles.widget}>
      <p className={styles.widgetTitle}>Complementary strands</p>
      <p className={styles.hint}>
        Type any sequence (A, T, G, C). Hover a base to highlight the pair it
        bonds with on the opposite strand.
      </p>

      <div className={styles.controls}>
        <input
          className={styles.input}
          value={seq}
          spellCheck={false}
          aria-label="DNA sequence"
          onChange={(e) => setSeq(cleanSeq(e.target.value))}
        />
        <button className={styles.btn} onClick={() => setSeq('ATGGCATTACGT')}>
          Reset
        </button>
      </div>

      <div className={styles.strands}>
        <div className={styles.strandLabel}>5′ → 3′ (coding strand)</div>
        <div className={styles.strand}>
          {bases.map((b, i) => (
            <span
              key={i}
              className={styles.base}
              data-active={hover === i}
              style={{ background: BASE_COLORS[b] }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              {b}
            </span>
          ))}
        </div>
        <div className={styles.rungs}>
          {bases.map((_, i) => (
            <span key={i} className={styles.rung} data-active={hover === i}>
              ‖
            </span>
          ))}
        </div>
        <div className={styles.strand}>
          {comp.split('').map((b, i) => (
            <span
              key={i}
              className={styles.base}
              data-active={hover === i}
              style={{ background: BASE_COLORS[b] }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              {b}
            </span>
          ))}
        </div>
        <div className={styles.strandLabel}>3′ → 5′ (template strand)</div>
      </div>
    </div>
  )
}
