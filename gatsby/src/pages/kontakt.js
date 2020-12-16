import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculateServicePrice from '../utils/calculateServicePrice';
import formatMoney from '../utils/formatMoney';
import useService from '../utils/useService';
import Estimate from '../components/Estimate';
import calculateServiceTotal from '../utils/calculateServiceTotal';

const StyledEstimateButton = styled.button`
  border: 1px solid ${(props) => props.colour};
  border-left: 5px solid ${(props) => props.colour};
`;

export default function ContactPage({ data }) {
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
      <h1>Sie haben ein neues Projekt?</h1>
      <SEO title="Get in contact" />
      <form className="form" onSubmit={checkForm}>
        <fieldset disabled={loading}>
          <legend>Ihre Kontaktdaten</legend>
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
                <label htmlFor="email">E-Mail</label>
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
                    placeholder="... Ihre Nachricht an mich"
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
            <legend>Ich bin interessiert an...</legend>

            {categories.map((category, index) => (
              <div className="estimate__service-items " key={index}>
                <div className="row ">
                  <div className="service__icon cell" />
                  <div className="service__heading cell">
                    {category.relatedCategories.map((item, i) => (
                      <div className="cell" key={i}>
                        <StyledEstimateButton
                          colour={item.colour}
                          className={virtualCats[i].isActive ? 'disabled' : ''}
                          key={i}
                          type="button"
                          onClick={() => addToEstimate({ id: item._key })}
                        >
                          <h4>{item.name}</h4>
                        </StyledEstimateButton>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </fieldset>
          <div className="grid__item ">
            <fieldset className="estimate__calculation " disabled={loading}>
              <legend>Ihre Wunschliste</legend>
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
              {loading ? 'Anfrage wird versendet ...' : 'Absenden'}
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
          colour
          price
          name
          _key
        }
      }
    }
  }
`;
