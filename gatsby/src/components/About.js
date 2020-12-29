import React from 'react';
import Img from 'gatsby-image';

export function AboutSingle({ about }) {
  return (
    <div className="grid ">
      <div className="grid__item item__service">
        <p>
          My name is Simone Westphal and I am a passionate and continuously
          learning full-stack web developer. I always see the big picture and
          have a keen eye for design.
        </p>
        <p>
          For a year now I've mainly been focusing on js, React, Node.js and
          Express. I have 10 years of experience in PHP & SQL and also build
          large apps based on the MVC architecture from scratch as custom coded
          WordPress themes.
        </p>
        <p>
          When I'm not building things for the internet, I like to spend my time
          with my dogs in the mountains.
        </p>
        <p>
          If you have an idea for a project that you would like to work on, just
          call
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
      <div className="item__image grid__item">
        <Img fixed={about.aboutMainImage.asset.fixed} alt="About me" />
      </div>
    </div>
  );
}
