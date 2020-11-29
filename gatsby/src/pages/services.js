import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import category from '../../../sanity/schemas/category';

const TabNavButton = styled.button`
  border-color: ${(props) => props.colour};
  &.badge--active {
    background: ${(props) => props.colour};
    + .tab__container {
      line-height: initial;
      padding: 1em 1.5em 0 1em;
      color: black;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
  }
`;
const TabContainerStyles = styled.div`
  border: 1px solid ${(props) => props.colour};
  @media (max-width: 1359px) {
    display: none;
  }
`;

const TabAccordionStyles = styled.div`
  border: 1px solid ${(props) => props.colour};
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  line-height: 0;
  color: transparent;
  height: 0;
  padding: 0;
  @media (min-width: 1360px) {
    display: none;
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
                  (index === value && 'badge--active') || ''
                } badge `}
              >
                <span className="badge__name">{service.name}</span>
              </TabNavButton>
              <TabAccordionStyles className="tab__container">
                {services[value]._rawBody && (
                  <BlockContent blocks={services[value]._rawBody} />
                )}
              </TabAccordionStyles>
            </>
          ))}
        </div>
        <TabContainerStyles className="tab__container --hide-on-small">
          {services[value]._rawBody && (
            <BlockContent blocks={services[value]._rawBody} />
          )}
        </TabContainerStyles>
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
