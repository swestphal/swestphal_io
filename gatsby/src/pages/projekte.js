import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../components/Projekte';
import CategoriesFilter from '../components/CategoriesFilter';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

export default function ProjectsPage({ data, pageContext }) {
  const projects = data.projects.nodes;
  return (
    <div className="page page-projects">
      <h1>I enjoyed working on it!</h1>
      <SEO
        title={
          pageContext.categoryName
            ? `Projects ${pageContext.categoryName}`
            : `All Projects`
        }
      />
      <div className="page-projects --has-no-first-grid">
        <div className="page__intro --dashed-border">
          <p>
            Nachfolgend finden sie eine kleine Auswahl meiner öffentlich
            zugänglichen Projekte.
            <br />
            Diese habe ich sowohl direkt für kleine und mittelständische
            Unternehmen erstellt, als auch für Agenturen.
          </p>
          <p>
            Bitte beachten Sie, dass ich einen Großteil meiner Arbeiten im
            White-Label Bereich durchführe oder diese Projekte unter NDA stehen
            und ich sie daher nicht veröffentlichen kann.
          </p>
        </div>
        <CategoriesFilter
          activeCategory={pageContext.categorySlug}
          currentPage={pageContext.currentPage}
        />
        <ProjectList projects={projects} />
        <Pagination
          pageSize={pageContext.pageSize}
          totalCount={pageContext.totalCount}
          currentPage={pageContext.currentPage || ''}
          skip={pageContext.skip}
          base="/projekte"
          categorySlug={pageContext.categorySlug}
          categoryRegexName={pageContext.categoryRegexName}
        />
      </div>
    </div>
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
        slug {
          current
        }
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
            slug {
              current
            }
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