import { galleryImages } from '@/content/gallery'
import styles from './ResearchGallery.module.css'

const RADIUS = 420
const ANGLE = 360 / galleryImages.length

export default function ResearchGallery() {
 return (
 <section className={styles.wrap}>
 <h2 className={styles.heading}>Research, in motion</h2>
 <p className={`lede ${styles.lede}`}>
 Figures from real analysis pipelines, RNA-seq differential
 expression, pathway enrichment, and sample structure, orbiting in
 one place.
 </p>
 <div className={styles.stage}>
 <div className={styles.ring}>
 {galleryImages.map((img, i) => (
 <figure
 key={img.src}
 className={styles.card}
 style={{ transform: `rotateY(${i * ANGLE}deg) translateZ(${RADIUS}px)` }}
 >
 <img src={img.src} alt={img.caption} loading="lazy" />
 <figcaption>{img.caption}</figcaption>
 </figure>
 ))}
 </div>
 </div>
 </section>
 )
}
