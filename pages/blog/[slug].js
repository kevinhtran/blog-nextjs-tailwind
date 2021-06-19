//template for each blog page

import Head from 'next/head';
import React from 'react'
import { blogPosts } from '../../lib/data';

const BlogPage = ({title, date, content}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <div>{content}</div>
      </main>
    </div>
  )
}

// when this page is loaded, i can expose this function that lets me return what data should render this dynamic file
// [slug] says that this is a dynamic file that can be any number of values. it's powered by data
// 
export async function getStaticProps(context) {
  console.log('hi!', context)
  const { params } = context;
  return {
    props: blogPosts.find(item => item.slug === params.slug),
  };
}

// we want to get the list of blog post slug names
// getStaticPaths() assumes a certain return structure
export async function getStaticPaths() {
  return {
    // within the paths key, each object represents an individually dynamic page
    // in our case, we need 3 pages because we have 3 blog posts
    // page name is slug so we must have a paremeter of slug
    paths: blogPosts.map(item => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}

export default BlogPage
