import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineFolder } from 'react-icons/ai';
import SEO from '../components/SEO';

export default function SingleProjectPage({ data: { project } }) {
  return (
    <>
      <SEO title={project.title} image={project.mainImage?.asset?.fluid?.src} />
      <div className="project">
        <div className="grid">
          <div className="grid__item">
            <div className="post__image">
              <Img fluid={project.mainImage.asset.fluid} alt={project.name} />
            </div>
          </div>
          <div className="grid__item">
            <ul>
              <li>iguhiuhiuhuh</li>
              <li>iguhiuhiuhuh</li>
              <li>iguhiuhiuhuh</li>
              <li>iguhiuhiuhuh</li>
            </ul>
          </div>
        </div>
        <div className="grid">
          <div className="post__content">
            <h2>
              <Link to="/single-post">{project.title}</Link>
            </h2>
            <p>{project.excerpt}</p>

            <ul className="post__meta">
              <li>
                <Link to="#" className="listgroup">
                  <span className="listgroup__icon">
                    <AiOutlineFolder />
                  </span>
                  <span className="listgroup__content">
                    <p>{project.relatedCategories[0].classification.name}</p>
                    <p>{project.relatedCategories[0].skills.join(', ')}</p>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
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
`;
