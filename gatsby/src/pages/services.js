import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { FiCheckCircle } from 'react-icons/fi';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { StyledBadgeButton } from '../components/BadgeButton.styled';
import { StyledAkkordion } from '../components/AkkordionStyled';
import SEO from '../components/SEO';

export const StyledListItem = styled.li`
  position: relative;
  padding: 0 1em;
  &:first-of-type {
    margin-top: 1em;
  }
  svg {
    position: absolute;
    font-size: 1.5rem;
    left: 0.5rem;
    color: black;
    -webkit-filter: drop-shadow(3px 3px 0px #fded27);
    filter: drop-shadow(3px 3px 0px #fded27);
  }
  div.list__content {
    margin-left: 1.5rem;
  }
`;
export const AkkordionContent = styled.div`
  li {
    background: ${(props) => props.colour};
    color: white;
  }
`;
export default function ServicesPage({ data, pageContext }) {
  const [services, setServices] = useState(data.services.nodes);
  const [value, setValue] = useState(0);

  return (
    <section className="page page-services">
      <SEO
        title="Services & Skills"
        description="You are a Small to medium-sized business who is looking for assistance or an agency and want to outsource coding? Have a look, what I can do for you!"
      />
      <h1>What can I do for you?</h1>
      <h2>Your are...</h2>
      <ul className="services__list">
        <StyledListItem>
          <FiCheckCircle />
          <div className="list__content">
            <p>
              An
              <span className="internlink">
                Art director and/or web designer
              </span>{' '}
              who would prefer to avoid coding.
              <br />
              Let me code that for you!
            </p>
          </div>
        </StyledListItem>

        <StyledListItem>
          <FiCheckCircle />
          <div className="list__content">
            <p>
              A <span className="internlink">Digital Media firm</span> needing
              an extra hand with overflow projects?
              <br />
              I'm also open to a more permanent role in part time with the right
              company.
            </p>
          </div>
        </StyledListItem>
        <StyledListItem>
          <FiCheckCircle />
          <div className="list__content">
            <p>
              A
              <span className="internlink">
                Small to medium-sized businesses
              </span>{' '}
              needing expert guidance and assistance with websites, apps and
              more?
              <br />
              If I can't help, I can assist you with finding the appropriate
              service.
            </p>
          </div>
        </StyledListItem>
      </ul>
      <br />
      <h2>My toolbelt</h2>
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
              <AkkordionContent
                className={`${
                  (index === value && 'tab__accordion--active') || ''
                } tab__container tab__accordion --dashed-border`}
                colour={service.colour}
              >
                {services[value]._rawBody && (
                  <BlockContent blocks={services[value]._rawBody} />
                )}
              </AkkordionContent>
            </>
          ))}
        </div>
        <AkkordionContent
          className="tab__container tab__tabs --dashed-border"
          colour={services[value].colour}
        >
          {services[value]._rawBody && (
            <BlockContent blocks={services[value]._rawBody} />
          )}
        </AkkordionContent>
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
