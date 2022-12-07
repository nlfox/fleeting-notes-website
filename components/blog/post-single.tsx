import Link from 'next/link';
import React from 'react';
import Author from '../../interfaces/author';
import Backlinks from '../backlinks';
import PostBody from '../post-body';
import PostMeta from './post-meta';

const NewsAuthor = "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279362725_10221566871590320_5754118986539619522_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xJF8nWFM8VQAX9q0vlR&tn=xlIn5hvwDet_PUtL&_nc_ht=scontent-ord5-1.xx&oh=00_AfBbYtPecq4C0wVWPRIOKhVVVNpOJvhItVd5LF2bThAGyQ&oe=6394EB80"
const NewsImage = "https://images.unsplash.com/photo-1535320404287-416e2c6d2b41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"

type Props = {
  title: string,
  content: string,
  date?: string,
  author?: Author,
  backlinks: { [k: string]: {
      title: string,
      excerpt: string,
    }
  }
}

function PostSingle({
  title,
  date,
  author,
  content,
  backlinks
}: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto lg:max-w-none">

            <article>

              {/* Article header */}
              <header className="max-w-3xl mx-auto mb-20">
                {/* Title */}
                <h1 className="h1 text-center mb-4 text-6xl">{title}</h1>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>


                {/* Main content */}
                <div>

                  {/* Article meta */}
                  <PostMeta author={author} date={date}/>
                  <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6" />

                  {/* Article body */}
                  <PostBody content={content}/>

                </div>

                {/* Sidebar */}
                <hr className="my-10 border border-dashed lg:block"/>
                <aside className="relative lg:block lg:w-72 lg:ml-20 shrink-0">
                  <div>
                    <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">Backlinks</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                      {
                        (Object.keys(backlinks).length > 0) && (
                            <Backlinks backlinks={backlinks} />
                        )
                      }
                    </div>
                  </div>
                </aside>

              </div>

              {/* Article footer */}
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PostSingle;