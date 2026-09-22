import type { Metadata } from 'next'
import Link from 'next/link'
import { primerGroups } from '@/content/primers'
import styles from './primers.module.css'

export const metadata: Metadata = { title: 'Primers' }

export default function Primers() {
 return (
 <section>
 <h1>Primers</h1>
 <p className="lede">
 A working roadmap of foundational topics across genomics, data
 engineering, software, and statistics, linked where written up,
 listed as a reference outline where not yet.
 </p>

 {primerGroups.map((group) => (
 <div key={group.category}>
 <h2>{group.category}</h2>
 <ul className={styles.list}>
 {group.items.map((item) => (
 <li key={item.name} className={styles.item}>
 {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </section>
 )
}
