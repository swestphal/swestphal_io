import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { StyledBadgeButton } from '../components/BadgeButton.styled';

export default function ServicesPage({ data, pageContext }) {
  const [services, setServices] = useState(data.services.nodes);
  const [value, setValue] = useState(0);
  return (
    <section className="page page-services">
      <h1>Das mache ich...</h1>
      <div className="tab">
        <div className="tab__nav">
          {services.map((service, index) => (
            <>
              <StyledBadgeButton
                colour={service.colour}
                key={`nav_${index}`}
                onClick={() => setValue(index)}
                className={`${
                  (index === value && ' badge--active') || ''
                } badge `}
              >
                <span className="badge__name">{service.name}</span>
              </StyledBadgeButton>
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
