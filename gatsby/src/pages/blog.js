import React from 'react';
import { graphql } from 'gatsby';

import Blog from '../components/Blog';
import CategoriesFilter from '../components/CategoriesFilter';
import ProjectList from '../components/Projects';

export default function BlogPage({ data, pageContext }) {
  console.log('data');
  console.log(data);
  console.log('pageContext');
  console.log(pageContext);
  const posts = data.posts.nodes;
  return (
    <>
      <h1>Blog</h1>
      <Blog posts={posts} />
    </>
  );
}

export const query = graphql`
  query PostsQuery($category: [String]) {
    posts: allSanityPost(
      filter: {
        relatedCategories: {
          elemMatch: { classification: { name: { in: $category } } }
        }
      }
    ) {
      nodes {
        id
        body {
          _key
          _type
          style
          list
          _rawChildren
        }
        excerpt {
          _key
          _type
          style
          list
          _rawChildren
        }
        mainImage {
          _key

          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
          _rawAsset
          _rawHotspot
          _rawCrop
        }
        title
        relatedCategories {
          classification {
            name
            colour
          }
          skills
        }
      }
    }
  }
`;
