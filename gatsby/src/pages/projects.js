import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../components/Projects';
import CategoriesFilter from '../components/CategoriesFilter';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

export default function ProjectsPage({ data, pageContext }) {
  console.log(pageContext);
  const projects = data.projects.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.categoryName
            ? `Projects ${pageContext.categoryName}`
            : `All Projects`
        }
      />
      <Pagination
        pageSize={pageContext.pageSize}
        totalCount={pageContext.totalCount}
        currentPage={pageContext.currentPage || ''}
        skip={pageContext.skip}
        base="/projects"
        categorySlug={pageContext.categorySlug}
        categoryRegexName={pageContext.categoryRegexName}
      />
      <CategoriesFilter
        activeCategory={pageContext.categorySlug}
        currentPage={pageContext.currentPage}
      />
      <ProjectList projects={projects} />
    </>
  );
}

export const query = graphql`
  query ProjectQuery($categoryRegexName: String, $skip: Int, $pageSize: Int) {
    projects: allSanityProject(
      skip: $skip
      limit: $pageSize
      filter: {
        relatedCategories: {
          elemMatch: { classification: { name: { regex: $categoryRegexName } } }
        }
      }
    ) {
      totalCount
      nodes {
        id
        title
        mainImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
          _key
          _type

          _rawAsset
          _rawHotspot
          _rawCrop
        }
        relatedProjects {
          _key
          _type
          id
          title
          slug {
            current
          }
          publishedAt
          excerpt {
            _key
            _type
            style
            list
            _rawChildren
          }
          startedAt
          endedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
        }
        relatedCategories {
          _key
          _type
          _rawClassification
          classification {
            id
            name
            image {
              _key
              _type
              _rawAsset
              hotspot {
                _key
                _type
                x
                y
                height
                width
              }
              crop {
                _key
                _type
                top
                bottom
                left
                right
              }
              asset {
                _id
              }
            }
          }
          skills
        }
      }
    }
  }
`;
