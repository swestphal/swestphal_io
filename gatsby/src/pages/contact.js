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
    textmessage: '',
  });
  const {
    estimate,
    addToEstimate,
    removeFromEstimate,
    error,
    loading,
    message,
    submitContactform,
  } = useService({
    categories: data.categories.nodes,
    inputs: values,
  });

  const categories = data.categories.nodes;

  return (
    <div className="page page-contact">
      <h1>Want to start a new project?</h1>
      <SEO title="Get in contact" />
      <form className="form" onSubmit={submitContactform}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <div className="grid grid--lg estimate">
            <div className="grid-item ">
              <div className="form__container">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={updateValue}
                />
              </div>
              <div className="form__container">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={updateValue}
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="form__container">
                <textarea
                  name="textmessage"
                  id="textmessage"
                  placeholder="...leave me a message"
                  value={values.textmessage}
                  onChange={updateValue}
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div className="grid grid--lg estimate">
          <fieldset className="grid--item" disabled={loading}>
            <legend>You Are Interested In...</legend>
            <div>
              {categories.map((category, index) => (
                <div className="estimate__service-items " key={index}>
                  <div className="row ">
                    <div className="service__icon cell" />
                    <div className="service__heading cell">
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
          <div className="grid--item">
            <fieldset className="estimate__calculation " disabled={loading}>
              <legend>Your Wishlist</legend>
              <Estimate
                key={estimate.id}
                estimate={estimate}
                removeFromEstimate={removeFromEstimate}
                categories={categories}
              />
            </fieldset>
            {error ? <p> {error} </p> : ''}
            {message ? <p> {message} </p> : ''}
            <button type="submit" disabled={loading}>
              {loading ? 'Send your request ...' : 'Send my request'}
            </button>
          </div>
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
