'use client'

import { useState } from 'react'
import { cleanSeq, translateCodon, AA_NAMES } from './dna'
import styles from './viz.module.css'

// Splits a sequence into codons by reading frame and translates to amino acids.
export default function CodonTranslator({
  initial = 'ATGGCATTACGTTAA',
}: {
  initial?: string
}) {
  const [seq, setSeq] = useState(cleanSeq(initial))
  const [frame, setFrame] = useState(0)

  const framed = seq.slice(frame)
  const codons: string[] = []
  for (let i = 0; i + 3 <= framed.length; i += 3) {
    codons.push(framed.slice(i, i + 3))
  }
  const protein = codons.map(translateCodon).join('')

  return (
    <div className={styles.widget}>
      <p className={styles.widgetTitle}>Reading frames &amp; translation</p>
      <p className={styles.hint}>
        Ribosomes read three bases at a time. Shift the reading frame and watch
        the codons — and the protein they encode — change. Hover a codon for its
        amino acid.
      </p>

      <div className={styles.controls}>
        <input
          className={styles.input}
          value={seq}
          spellCheck={false}
          aria-label="DNA sequence to translate"
          onChange={(e) => setSeq(cleanSeq(e.target.value))}
        />
        {[0, 1, 2].map((f) => (
          <button
            key={f}
            className={styles.btn}
            data-active={frame === f}
            onClick={() => setFrame(f)}
          >
            Frame +{f}
          </button>
        ))}
      </div>

      <div className={styles.codons}>
        {codons.map((c, i) => {
          const aa = translateCodon(c)
          return (
            <div
              key={i}
              className={styles.codon}
              data-start={c === 'ATG'}
              data-stop={aa === '*'}
              title={AA_NAMES[aa] ?? 'Unknown'}
            >
              <span className={styles.codonBases}>{c}</span>
              <span className={styles.codonAa}>{aa === '*' ? 'STOP' : aa}</span>
            </div>
          )
        })}
      </div>

      {protein && (
        <div className={styles.protein}>
          Protein: {protein.replace(/\*/g, '·')}
        </div>
      )}
    </div>
  )
}
