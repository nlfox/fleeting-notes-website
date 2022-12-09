import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../interfaces/post'
import PostList from '../../components/blog/post-list'
import Pagination from '../../components/blog/pagination'
import PostType from '../../interfaces/post'
import Header from '../../components/landing/header'
import Footer from '../../components/landing/footer'

type Props = {
  posts: Post[]
  pid: number
  maxPid: number
}

export default function Index({ posts, pid, maxPid }: Props) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <main className="grow">
        <PostList posts={posts || []}/>
        <Pagination currPage={pid} maxPage={maxPid}/>
      </main>
      <Footer />
    </div>
  )
}

type Params = {
  params: {
    pid: string
    posts: PostType[]
  }
}

const pageSize = 6;
const filterPosts = (posts) => posts.filter((post) => post.slug.startsWith('posts/'))
export const getStaticProps = async ({ params }: Params) => {
  let posts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);
  posts = filterPosts(posts);
  const pid = parseInt(params.pid)
  const maxPid = Math.round(posts.length / pageSize)
  const start = (pid - 1) * pageSize;
  posts = posts.slice(start, start + pageSize)

  return {
    props: { posts, pid, maxPid },
  }
}

export async function getStaticPaths() {
  let posts = await getAllPosts(['slug'])
  // filter posts shown here
  posts = filterPosts(posts);

  const paths = []
  let pid = 1;
  for (let i = 0; i < posts.length; i += pageSize) {
    paths.push({
      params: {
        pid: pid.toString(),
      }
    });
    pid += 1;
  }
  return {
    paths: paths,
    fallback: false,
  }
}