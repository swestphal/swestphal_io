import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

function SingleService({ category }) {
  return (
    <li>
      <div className="row row--gutters  service__single">
        <div className="service__icon cell">
          {category.image !== null ? (
            <Img fixed={category.image.asset.fixed} alt="About me" />
          ) : (
            ''
          )}
        </div>
        <div className="row">
          <h3 className={`service__heading cell h4 ${category.colour}`}>
            {category.name}
          </h3>

          <div className="service__content cell">
            <BlockContent blocks={category._rawExcerpt} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default function ServiceList({ categories }) {
  return (
    <div className="grid__item ">
      <div className="section service">
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
    </div>
  );
}
