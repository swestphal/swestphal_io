import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

export function AboutSingle({ about }) {
  return (
    <div className="grid__item ">
      <div className="section section__about">
        <div className="section__inner row ">
          <div className="cell section__image">
            <Img fixed={about.aboutMainImage.asset.fixed} alt="About me" />
          </div>

          <div className="cell no-flex section__content">
            <h2>{about.aboutTitle}</h2>
            <BlockContent blocks={about._rawAboutBody} />
          </div>
        </div>
      </div>
    </div>
  );
}
