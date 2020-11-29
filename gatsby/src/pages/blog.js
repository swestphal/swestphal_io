import React from 'react';
import { graphql } from 'gatsby';

import Blog from '../components/Blog';
import CategoriesFilter from '../components/CategoriesFilter';
import ProjectList from '../components/Projects';

export default function BlogPage({ data, pageContext }) {
  const posts = data.posts.nodes;
  return (
    <div className="page page-blog">
      <h1>I was thinking about...</h1>
      <Blog posts={posts} />
    </div>
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
