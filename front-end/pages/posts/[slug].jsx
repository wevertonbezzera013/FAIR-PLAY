import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clfa5s4ft1p1d01t9gum6d7mp/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function Article({ post }) {

  return (
    <div>
      <Header />
      <div
        className="img-slug flex"
        style={{
          backgroundImage: `linear-gradient(to top, #a6d0ff17, #111111), url(${post.coverPhoto.url})`,
        }}
      >
        <div className="container pl-5 absolute top-48">
          <span className="text-white text-xl lg:text-5xl font-serif font-bold text-left break-words">
            {post.title}
          </span>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-xl pl-5 lg:pl-12 lg:text-5xl font-serif font-bold text-left">
          {post.title}
        </h1>

        <div className="p-5 lg:p-12 lg:text-2xl" dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
      </div>

      <Footer />
    </div>
  );
}

