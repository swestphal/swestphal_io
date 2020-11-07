import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function SingleService({ category }) {
  return (
    <li>
      <div className="row row--gutters row--aligncenter service__single">
        <div className="service__icon cell">
          <Img fixed={category.image.asset.fixed} alt="About me" />
        </div>
        <div className="row">
          <div className="service__heading cell">
            <h3 className={category.colour}>{category.name}</h3>
          </div>
          <div className="service__content cell">
            <p>{category._rawBody[0].children[0].text}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function ServiceList({ categories }) {
  console.log(categories);
  return (
    <div className="grid__item ">
      <div className="section service">
        <ul>
          {categories.map((category) => (
            <SingleService key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
}
