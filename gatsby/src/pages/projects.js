import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../components/Projects';
import CategoriesFilter from '../components/CategoriesFilter';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

export default function ProjectsPage({ data, pageContext }) {
  console.log(pageContext);
  const projects = data.projects.nodes;
  const myRef = useRef(null);
  const scroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="page page-projects">
      <SEO
        title="Projects"
        description="Some of my work. Here you find as well django related applications as php sites"
      />
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
            {/* Nachfolgend finden sie eine kleine Auswahl meiner öffentlich
            zugänglichen Projekte. Diese habe ich sowohl direkt für kleine und
            mittelständische Unternehmen erstellt, als auch für Agenturen.
          </p>
          <p>
            Bitte beachten Sie, dass ich einen Großteil meiner Arbeiten im
            White-Label Bereich durchführe oder diese Projekte unter NDA stehen
            und ich sie daher nicht veröffentlichen kann. */}
            Below you will find a small selection of my publicly accessible
            projects. I created these directly for small and medium-sized
            companies as well as for agencies. <br />
            Please note that I carry out a large part of my work in the white
            label area or that these projects are under NDA and therefore I
            cannot publish them.
          </p>
        </div>
        {/* <CategoriesFilter
          activeCategory={pageContext.categorySlug}
          currentPage={pageContext.currentPage}
        /> */}
        <ProjectList ref={myRef} projects={projects} />
        <Pagination
          pageSize={pageContext.pageSize}
          totalCount={pageContext.totalCount}
          currentPage={pageContext.currentPage || ''}
          skip={pageContext.skip}
          base="/projects"
          categorySlug={pageContext.categorySlug}
          categoryRegexName={pageContext.categoryRegexName}
          onClick={scroll}
        />
      </div>
    </div>
  );
}

export const query = graphql`
  query ProjectQuery($skip: Int, $pageSize: Int) {
    projects: allSanityProject(
      skip: $skip
      sort: { fields: index }
      limit: $pageSize
      filter: {
        relatedCategories: { elemMatch: { classification: { name: {} } } }
        isOnline: { eq: true }
      }
    ) {
      totalCount
      nodes {
        id
        title
        slug {
          current
        }
        tags
        secondaryBackground {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
            url
          }
        }
        secondaryLogo {
          asset {
            fluid(maxWidth: 510) {
              ...GatsbySanityImageFluid
            }
          }
        }
        secondaryImage {
          asset {
            fluid(maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }

        secondaryColour
        _rawExcerpt
        mainImage {
          asset {
            fluid(maxWidth: 510) {
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
