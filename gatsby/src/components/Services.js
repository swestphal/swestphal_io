import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const StyledServiceItem = styled.li`
  .service__heading {
    color: ${(props) => props.colour};
  }
`;
function SingleService({ category }) {
  return (
    <StyledServiceItem colour={category.colour}>
      <div className="row row--gutters  service__single">
        <div className="service__icon cell">
          {category.image !== null ? (
            <Img fixed={category.image.asset.fixed} alt="About me" />
          ) : (
            ''
          )}
        </div>
        <div className="row">
          <h3 className="service__heading cell h4">{category.name}</h3>

          <div className="service__content cell">
            <BlockContent blocks={category._rawExcerpt} />
          </div>
        </div>
      </div>
    </StyledServiceItem>
  );
}

export default function ServiceList({ categories, about }) {
  return (
    <>
      <div className="grid">
        <div className="grid__item item__service">
          <ul>
            {categories.map((category) =>
              category.image !== null ? (
                <SingleService key={category.id} category={category} />
              ) : (
                ''
              )
            )}
          </ul>
        </div>

        <div className="item__image grid__item">
          <Img fixed={about.aboutMainImage.asset.fixed} alt="About me" />
        </div>
      </div>
    </>
  );
}
