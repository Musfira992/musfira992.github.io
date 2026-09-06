import { existingPostsA } from './posts-existing-a'
import { existingPostsB } from './posts-existing-b'
import { primerPosts0 } from './posts-primers-0'
import { primerPosts1 } from './posts-primers-1'
import { primerPosts2 } from './posts-primers-2'
import { primerPosts3 } from './posts-primers-3'
import type { Post, PostCategory } from './post-types'

export type { Post, PostCategory } from './post-types'

export const posts: Post[] = [
  ...primerPosts0,
  ...primerPosts1,
  ...primerPosts2,
  ...primerPosts3,
  ...existingPostsA,
  ...existingPostsB,
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByCategory(category: PostCategory) {
  return posts.filter((p) => p.category === category)
}
