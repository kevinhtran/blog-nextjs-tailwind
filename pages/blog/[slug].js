//template for each blog page

import Head from 'next/head';
import React from 'react'

const BlogPage = ({title, date, content}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}

export default BlogPage
