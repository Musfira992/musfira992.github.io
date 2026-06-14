// Shared DNA/bioinformatics helpers used by the tutorial visualizations.

export const BASE_COLORS: Record<string, string> = {
  A: '#2d8c5a', // green
  T: '#c2492f', // red
  G: '#2f6dc2', // blue
  C: '#d08a1e', // amber
}

export const COMPLEMENT: Record<string, string> = {
  A: 'T',
  T: 'A',
  G: 'C',
  C: 'G',
}

export function complement(seq: string): string {
  return seq
    .toUpperCase()
    .split('')
    .map((b) => COMPLEMENT[b] ?? 'N')
    .join('')
}

export function cleanSeq(input: string): string {
  return input.toUpperCase().replace(/[^ATGC]/g, '')
}

// Standard genetic code (DNA codon -> single-letter amino acid; '*' = stop).
const CODON_TABLE: Record<string, string> = {
  TTT: 'F', TTC: 'F', TTA: 'L', TTG: 'L', CTT: 'L', CTC: 'L', CTA: 'L', CTG: 'L',
  ATT: 'I', ATC: 'I', ATA: 'I', ATG: 'M', GTT: 'V', GTC: 'V', GTA: 'V', GTG: 'V',
  TCT: 'S', TCC: 'S', TCA: 'S', TCG: 'S', CCT: 'P', CCC: 'P', CCA: 'P', CCG: 'P',
  ACT: 'T', ACC: 'T', ACA: 'T', ACG: 'T', GCT: 'A', GCC: 'A', GCA: 'A', GCG: 'A',
  TAT: 'Y', TAC: 'Y', TAA: '*', TAG: '*', CAT: 'H', CAC: 'H', CAA: 'Q', CAG: 'Q',
  AAT: 'N', AAC: 'N', AAA: 'K', AAG: 'K', GAT: 'D', GAC: 'D', GAA: 'E', GAG: 'E',
  TGT: 'C', TGC: 'C', TGA: '*', TGG: 'W', CGT: 'R', CGC: 'R', CGA: 'R', CGG: 'R',
  AGT: 'S', AGC: 'S', AGA: 'R', AGG: 'R', GGT: 'G', GGC: 'G', GGA: 'G', GGG: 'G',
}

export const AA_NAMES: Record<string, string> = {
  F: 'Phenylalanine', L: 'Leucine', I: 'Isoleucine', M: 'Methionine (Start)',
  V: 'Valine', S: 'Serine', P: 'Proline', T: 'Threonine', A: 'Alanine',
  Y: 'Tyrosine', H: 'Histidine', Q: 'Glutamine', N: 'Asparagine', K: 'Lysine',
  D: 'Aspartate', E: 'Glutamate', C: 'Cysteine', W: 'Tryptophan', R: 'Arginine',
  G: 'Glycine', '*': 'Stop codon',
}

export function translateCodon(codon: string): string {
  return CODON_TABLE[codon.toUpperCase()] ?? '?'
}

export function gcContent(seq: string): number {
  if (!seq.length) return 0
  const gc = seq.split('').filter((b) => b === 'G' || b === 'C').length
  return (gc / seq.length) * 100
}

export function baseCounts(seq: string): Record<string, number> {
  const counts = { A: 0, T: 0, G: 0, C: 0 } as Record<string, number>
  for (const b of seq) if (b in counts) counts[b]++
  return counts
}
