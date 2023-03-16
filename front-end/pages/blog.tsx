import React from 'react'
import { GraphQLClient, gql } from 'graphql-request'

import Footer from '../components/Footer';
import Header from '../components/Header';

const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/clfa5s4ft1p1d01t9gum6d7mp/master")

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`

export async function getStaticProps() {
  const { posts } = await graphcms.request<any>(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

const Blog = ({ posts }: { posts: any[] }) => {
  return (
    <div>

      <Header />

      <div className="bg-img-about text-center flex">
        <div className="container absolute top-48">
          <span className="text-white text-5xl font-bold text-left break-words">
            BLOG
          </span>
        </div>
      </div>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>Author: {post.author.name}</p>
            <img src={post.author.avatar.url} alt={`${post.author.name}'s avatar`} />
            <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
            <img src={post.coverPhoto.url} alt='Cover photo' />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Blog
