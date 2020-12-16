import React from 'react';
import { graphql } from 'gatsby';
import { AboutSingle } from '../components/About';
import Testimonials from '../components/Testimonials';
import ServiceList from '../components/Services';
import Skills from '../components/Skills';
import ProjectList from '../components/Projekte';

export default function AboutPage({ data, pageContext }) {
  const [about] = data.about.nodes;
  const categories = data.categories.nodes;

  return (
    <div className="page page-index ">
      <h1>Professionelle Webentwicklung</h1>
      <div>
        <ServiceList categories={categories} about={about} />
        <AboutSingle about={about} />
      </div>
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    about: allSanityCompanyInfo {
      nodes {
        id
        _rawAboutBody
        aboutTitle
        aboutMainImage {
          asset {
            fixed(width: 360) {
              ...GatsbySanityImageFixed
            }
          }
          _key
          _type

          _rawAsset
          _rawHotspot
          _rawCrop
        }
      }
    }
    categories: allSanityCategory(
      sort: { fields: index, order: ASC }
      filter: { isTab: { eq: true } }
    ) {
      nodes {
        name
        id
        _rawExcerpt
        colour
        image {
          asset {
            fixed(width: 100) {
              ...GatsbySanityImageFixed
            }
          }
          _key
          _type

          _rawAsset
          _rawHotspot
          _rawCrop
        }
        slug {
          _key
          _type
          current
        }
      }
    }
  }
`;
