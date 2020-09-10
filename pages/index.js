import React from 'react'
import Head from 'next/head'
import { fetchEntries } from '@utils/contentfulPosts'
import Post from '@components/Post'

const Home = () => (
  <div>
    <h1>Hello world</h1>

    <h3>Hooray 🎉 - you've built this with <a href="https://nextjs.org">Next.js</a>!</h3>
    <div className="posts">
      {posts.map((p) => {
        return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
      })}
    </div>
    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)


export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}

export default Home
