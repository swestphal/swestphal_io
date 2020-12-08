import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

export function AboutSingle({ about }) {
  return (
    <div className="grid__item--full ">
      <div className="section section__about">
        <div className="section__inner">
          <div className="section__content">
            <h2>{about.aboutTitle}</h2>
            <BlockContent blocks={about._rawAboutBody} />
          </div>
        </div>
      </div>
    </div>
  );
}
