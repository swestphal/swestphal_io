import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import category from '../../../sanity/schemas/category';

const TabNavButton = styled.button`
  border-color: ${(props) => props.colour};
  &.badge--active {
    background: ${(props) => props.colour};
    border-color: ${(props) => props.colour};
  }
  &.badge:hover {
    background: ${(props) => props.colour};
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;

export default function ServicesPage({ data, pageContext }) {
  const [services, setServices] = useState(data.services.nodes);
  const [value, setValue] = useState(0);
  return (
    <section className="page page-services">
      <h1>What I can do for you</h1>
      <div className="tab">
        <div className="tab__nav">
          {services.map((service, index) => (
            <>
              <TabNavButton
                colour={service.colour}
                key={`nav_${index}`}
                onClick={() => setValue(index)}
                className={`${
                  (index === value && ' badge--active') || ''
                } badge `}
              >
                <span className="badge__name">{service.name}</span>
              </TabNavButton>
              <div
                className={`${
                  (index === value && 'tab__accordion--active') || ''
                } tab__container tab__accordion --dashed-border`}
                colour={service.colour}
              >
                {services[value]._rawBody && (
                  <BlockContent blocks={services[value]._rawBody} />
                )}
              </div>
            </>
          ))}
        </div>
        <div
          className="tab__container tab__tabs --dashed-border"
          colour={services[value].colour}
        >
          {services[value]._rawBody && (
            <BlockContent blocks={services[value]._rawBody} />
          )}
        </div>
      </div>
    </section>
  );
}

export const query = graphql`
  query ServicesQuery {
    services: allSanityCategory(
      sort: { fields: index, order: ASC }
      filter: { isTab: { eq: true } }
    ) {
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
