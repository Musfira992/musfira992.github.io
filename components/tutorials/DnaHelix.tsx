'use client'

import { BASE_COLORS, COMPLEMENT } from './dna'
import styles from './viz.module.css'

// Decorative animated double helix rendered as inline SVG (no dependencies).
export default function DnaHelix({
  sequence = 'ATGGCATTACGTGACTTC',
}: {
  sequence?: string
}) {
  const bases = sequence.toUpperCase().replace(/[^ATGC]/g, '').split('')
  const n = bases.length
  const stepX = 34
  const width = n * stepX + 20
  const height = 120
  const midY = height / 2
  const amp = 34
  const wavelength = 6 // bases per full turn

  const topPath: string[] = []
  const botPath: string[] = []
  for (let i = 0; i < n; i++) {
    const x = 12 + i * stepX
    const phase = (i / wavelength) * Math.PI * 2
    const yTop = midY - amp * Math.sin(phase)
    const yBot = midY + amp * Math.sin(phase)
    topPath.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${yTop.toFixed(1)}`)
    botPath.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${yBot.toFixed(1)}`)
  }

  return (
    <div className={styles.helixWrap}>
      <svg
        className={styles.helix}
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: width }}
        role="img"
        aria-label="Animated DNA double helix"
      >
        <path d={topPath.join(' ')} fill="none" stroke="#cfd6cf" strokeWidth="2.5" />
        <path d={botPath.join(' ')} fill="none" stroke="#cfd6cf" strokeWidth="2.5" />
        {bases.map((b, i) => {
          const x = 12 + i * stepX
          const phase = (i / wavelength) * Math.PI * 2
          const yTop = midY - amp * Math.sin(phase)
          const yBot = midY + amp * Math.sin(phase)
          const front = Math.cos(phase) >= 0
          return (
            <g key={i} className={styles.pair} style={{ animationDelay: `${i * 0.05}s` }}>
              <line
                x1={x}
                y1={yTop}
                x2={x}
                y2={yBot}
                stroke="#e3e0d8"
                strokeWidth={front ? 3 : 1.5}
                opacity={front ? 1 : 0.5}
              />
              <circle cx={x} cy={yTop} r={front ? 8 : 6} fill={BASE_COLORS[b]} />
              <circle cx={x} cy={yBot} r={front ? 8 : 6} fill={BASE_COLORS[COMPLEMENT[b]]} />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
