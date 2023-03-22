import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clfa5s4ft1p1d01t9gum6d7mp/master"
);

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
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

const Blog = ({ posts }) => {
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

      <main className="">
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
            content={post.content}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
