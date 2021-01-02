import React from 'react';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import styled from 'styled-components';
import sanityConfig from '../../../sanity/sanity.json';

export const IconContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2em;
  @media (max-width: 730px) {
    li {
      width: 33.3%;
      margin: 0 0 1em;
      text-align: center;
    }
  }
`;

export function AboutSingle({ about }) {
  const builder = imageUrlBuilder(sanityConfig.api);
  const renderedFigures = about._rawAboutBody.map((item) => {
    if (item._type === 'figure') {
      const imageObj = {
        asset: { _ref: item.asset._ref || item.asset._id },
      };

      if (item.crop) imageObj.crop = item.crop;
      if (item.hotspot) imageObj.hotspot = item.hotspot;
      return (
        <li>
          <img src={builder.image(imageObj).width(80)} />
        </li>
      );
    }
    return '';
  });

  return (
    <div>
      <IconContainer>{renderedFigures}</IconContainer>
      <div className="grid-about ">
        <div className="grid-intro1">
          <p>
            My name is Simone Westphal and I am a passionate and continuously
            learning full-stack web developer. I always see the big picture and
            have a keen eye for design.
          </p>
        </div>
        <div className="grid-intro2">
          <p>
            I have 10 years of experience in PHP & SQL and also build large apps
            based on the MVC architecture from scratch as custom coded WordPress
            themes. For a year now I've mainly been focusing on js, React,
            Node.js and Express.
          </p>
        </div>

        <div className="grid-att">
          <p>
            When I'm not building things for the internet, I like to spend my
            time with my dogs in the mountains.
          </p>
          <p>
            If you have an idea for a project that you would like to work on,
            just call
            <a className="internlink" href="tel:+4935873159989">
              +49 35873 / 15 99 89
            </a>
            or use the
            <a className="internlink" href="/contact">
              contact form
            </a>{' '}
            on this page and you can reach me directly!
          </p>
        </div>

        <div className="grid-img">
          <Img fluid={about.aboutMainImage.asset.fluid} alt="About me" />
        </div>
      </div>
    </div>
  );
}
