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
    messageName,
    messageEmail,
    messageSuccess,
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
      <form className="form" onSubmit={checkForm} autoComplete="off">
        <fieldset disabled={loading}>
          <legend>Your contact details</legend>
          <div className="grid grid--lg  estimate">
            <div className="grid__item ">
              <div className="form__container">
                <label
                  className={`${
                    !values.name && messageName ? 'label__error' : ''
                  }`}
                  htmlFor="name"
                >
                  Name
                </label>
                <p className="form__error">
                  {!values.name && messageName ? messageName : ''}
                </p>
                <div className="input__container">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={updateValue}
                    autoComplete="new-name"
                    className="effect-9"
                  />

                  <span className="focus-border">
                    <i />
                  </span>
                </div>
              </div>
              <div className="form__container">
                <label
                  className={`${
                    !values.name && messageName ? 'label__error' : ''
                  }`}
                  htmlFor="email"
                >
                  Email
                </label>
                <p className="form__error">
                  {!values.email && messageEmail ? messageEmail : ''}
                </p>
                <div className="input__container">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    autoComplete="new-email"
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
                    autoComplete="new-content"
                    name="textmessage"
                    id="textmessage"
                    placeholder="Your message"
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
            <legend>I'm interested in:</legend>

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
            {error ? <p>{error} </p> : ''}

            {!values.email || !values.name ? (
              <p
                className={!values.email || !values.name ? 'label__error' : ''}
              >
                {message}
              </p>
            ) : (
              ''
            )}

            <button type="submit" disabled={loading}>
              {loading ? '... sending ' : 'Send'}
            </button>
            {messageSuccess ? `<p>${messageSuccess}</p>` : ''}
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
