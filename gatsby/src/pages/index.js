import React from 'react';
import { graphql } from 'gatsby';
import { AboutSingle } from '../components/About';
import Testimonials from '../components/Testimonials';
import ServiceList from '../components/Services';
import Skills from '../components/Skills';
import ProjectList from '../components/Projects';

export default function AboutPage({ data, pageContext }) {
  const [about] = data.about.nodes;
  const categories = data.categories.nodes;

  return (
    <div className="index">
      <div className="grid grid--lg">
        <AboutSingle about={about} />
        <ServiceList categories={categories} />
      </div>
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    about: allSanityCompanyInfo {
      nodes {
        id
        aboutBody {
          _key
          _type
          style
          list
          _rawChildren
        }
        aboutTitle
        aboutMainImage {
          asset {
            fixed(width: 300) {
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
    categories: allSanityCategory(sort: { fields: index, order: ASC }) {
      nodes {
        name
        id
        _rawBody
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
