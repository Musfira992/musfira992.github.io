export type PostCategory = 'blog' | 'primer' | 'project'

export type Post = {
  slug: string
  title: string
  date: string
  category: PostCategory
  excerpt: string
  html: string
}
