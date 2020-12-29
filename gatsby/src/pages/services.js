import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { StyledBadgeButton } from '../components/BadgeButton.styled';
import { StyledAkkordion } from '../components/AkkordionStyled';

export default function ServicesPage({ data, pageContext }) {
  const [services, setServices] = useState(data.services.nodes);
  const [value, setValue] = useState(0);

  return (
    <section className="page page-services">
      <h1>What can I do for you?</h1>
      <h3>Your are...</h3>
      <ul>
        <li>
          An art director and/or web designer who would prefer to avoid coding.
          <br />
          Let me code that for you!
        </li>

        <li>
          A Digital Media firms needing an extra hand with overflow projects?
          <br />
          I'm also open to a more permanent role in part time with the right
          company.
        </li>
        <li>
          A Small to medium-sized businesses needing expert guidance and
          assistance with websites, apps, social media and more?
          <br />
          If I can't help, I can assist you with finding the appropriate
          service.
        </li>
      </ul>
      <StyledAkkordion className="tab">
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
      </StyledAkkordion>
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
