import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Deploying to a user page (musfira992.github.io) → served from root, no basePath needed.
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
