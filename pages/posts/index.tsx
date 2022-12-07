import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../interfaces/post'
import PostList from '../../components/blog/post-list'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <main className="grow">
        <PostList posts={allPosts}/>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  let allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  // filter posts shown here
  allPosts = allPosts.filter((post) => post.slug.startsWith('posts/'))
  
  return {
    props: { allPosts },
  }
}
