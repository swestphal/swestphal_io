import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

export function AboutSingle({ about }) {
  return (
    <div className="item__about ">
      <h2 className="heading--hl">{about.aboutTitle}</h2>
      <BlockContent blocks={about._rawAboutBody} />
    </div>
  );
}
