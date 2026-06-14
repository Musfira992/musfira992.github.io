import type { MDXComponents } from 'mdx/types'

// Allows interactive React components to be embedded inside .mdx tutorials,
// and lets us style default Markdown elements globally.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
