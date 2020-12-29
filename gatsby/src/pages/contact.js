import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
// import calculateServicePrice from '../utils/calculateServicePrice';
// import formatMoney from '../utils/formatMoney';
import useService from '../utils/useService';
import Estimate from '../components/Estimate';
import EstimateSelection from '../components/EstimateSelection';
// import calculateServiceTotal from '../utils/calculateServiceTotal';

const ContactPage = ({ data }) => {
  const { values, updateValue } = useForm({
    name: false,
    email: false,
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
    virtualCats,
    checkForm,
  } = useService({
    categories: data.categories.nodes,
    inputs: values,
  });

  const categories = data.categories.nodes;
  return (
    <div className="page page-contact">
      <h1>New project planned?</h1>
      <SEO title="Get in contact" />
      <form className="form" onSubmit={checkForm}>
        <fieldset disabled={loading}>
          <legend>Your contact details</legend>
          <div className="grid grid--lg  estimate">
            <div className="grid__item ">
              <div className="form__container">
                <label htmlFor="name">Name</label>
                <div className="input__container">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={updateValue}
                    className="effect-9"
                  />
                  <span className="focus-border">
                    <i />
                  </span>
                </div>
              </div>
              <div className="form__container">
                <label htmlFor="email">Email</label>
                <div className="input__container">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    className="effect-9"
                  />
                  <span className="focus-border">
                    <i />
                  </span>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="form__container">
                <div className="input__container --textarea">
                  <textarea
                    name="textmessage"
                    id="textmessage"
                    placeholder="... Your message"
                    value={values.textmessage}
                    onChange={updateValue}
                    className="effect-9"
                  />
                  <span className="focus-border">
                    <i />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="grid grid--lg grid--fit estimate">
          <fieldset className="grid__item " disabled={loading}>
            <legend>I'm interested in ...</legend>

            <EstimateSelection
              categories={categories}
              virtualCats={virtualCats}
              addToEstimate={addToEstimate}
            />
          </fieldset>
          <div className="grid__item ">
            <fieldset className="estimate__calculation " disabled={loading}>
              <legend>My wishlist</legend>
              <Estimate
                estimate={estimate}
                removeFromEstimate={removeFromEstimate}
                categories={categories}
              />
            </fieldset>
            {error ? <p> {error} </p> : ''}
            {message ? <p> {message} </p> : ''}
            <button type="submit" disabled={loading}>
              {loading ? '... sending ' : 'Send'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;

export const query = graphql`
  query EstimateQuery {
    categories: allSanityEstimate(sort: { fields: _key, order: ASC }) {
      nodes {
        name
        _key
        relatedCategories {
          colour
          price
          name
          _key
        }
      }
    }
  }
`;
