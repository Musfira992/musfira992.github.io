'use client'

import { useState } from 'react'
import { BASE_COLORS, cleanSeq, baseCounts, gcContent } from './dna'
import styles from './viz.module.css'

// Live nucleotide composition bars + GC content.
export default function BaseComposition({
  initial = 'ATGGCATTACGTGACTTCGGCGCTA',
}: {
  initial?: string
}) {
  const [seq, setSeq] = useState(cleanSeq(initial))
  const counts = baseCounts(seq)
  const total = seq.length || 1
  const gc = gcContent(seq)

  return (
    <div className={styles.widget}>
      <p className={styles.widgetTitle}>Base composition &amp; GC content</p>
      <p className={styles.hint}>
        The balance of bases — especially the proportion of G and C — affects how
        tightly DNA binds and is a key signal in genome analysis.
      </p>

      <div className={styles.controls}>
        <input
          className={styles.input}
          value={seq}
          spellCheck={false}
          aria-label="DNA sequence for composition"
          onChange={(e) => setSeq(cleanSeq(e.target.value))}
        />
      </div>

      {(['A', 'T', 'G', 'C'] as const).map((b) => {
        const pct = (counts[b] / total) * 100
        return (
          <div key={b} className={styles.compRow}>
            <span className={styles.compLabel} style={{ color: BASE_COLORS[b] }}>
              {b}
            </span>
            <span className={styles.compTrack}>
              <span
                className={styles.compFill}
                style={{ width: `${pct}%`, background: BASE_COLORS[b] }}
              />
            </span>
            <span className={styles.compVal}>
              {counts[b]} ({pct.toFixed(0)}%)
            </span>
          </div>
        )
      })}

      <p className={styles.gc}>
        GC content: <strong>{gc.toFixed(1)}%</strong>
      </p>
    </div>
  )
}
