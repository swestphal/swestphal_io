import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculateServicePrice from '../utils/calculateServicePrice';
import formatMoney from '../utils/formatMoney';
import useService from '../utils/useService';
import Estimate from '../components/Estimate';
import calculateServiceTotal from '../utils/calculateServiceTotal';

export default function ContactPage({ data }) {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  const { estimate, addToEstimate, removeFromEstimate } = useService({
    data,
    inputs: values,
  });
  const categories = data.categories.nodes;
  console.log(categories);
  return (
    <div>
      <SEO title="Get in contact" />
      <form>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>
        <div className="grid grid--lg">
          <fieldset className="grid--item">
            <legend>Topics</legend>
            <div>
              {categories.map((category, index) => (
                <div className="order__service-items " key={index}>
                  <div className="row row--gutters row--aligncenter service__single">
                    <div className="service__icon cell" />
                    <div className="service__heading cell">
                      <h3 className={category.colour}>Name: {category.name}</h3>
                      {category.relatedCategories.map((item, i) => (
                        <div className="cell" key={i}>
                          <button
                            key={i}
                            type="button"
                            onClick={() => addToEstimate({ id: item._key })}
                          >
                            <h4>{item.name}</h4>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset className="estimate__calculation grid--item">
            <legend>Estimate</legend>
            <Estimate
              key={estimate.id}
              estimate={estimate}
              removeFromEstimate={removeFromEstimate}
              categories={categories}
            />
          </fieldset>
          <fieldset className="estimate__calculation grid--item">
            <legend>
              Yout total is {calculateServiceTotal(estimate, categories)}
            </legend>
            <h3>Your total is _______</h3>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export const query = graphql`
  query EstimateQuery {
    categories: allSanityEstimate(sort: { fields: _key, order: ASC }) {
      nodes {
        name
        _key
        relatedCategories {
          price
          name
          _key
        }
      }
    }
  }
`;
