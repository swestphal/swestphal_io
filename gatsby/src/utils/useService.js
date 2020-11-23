import { useContext, useState } from 'react';
import EstimateContext from '../components/EstimateContext';
import formatMoney from './formatMoney';

import calculateServiceTotal from './calculateServiceTotal';
import attachNamesAndPricesFromEstimate from './attachNamesAndPricesFromEstimate';

export default function useService({ categories, inputs }) {
  // create some state to hold our order
  // const [estimate, setEstimate] = useState([]);
  // now access both our state and our updater function (setEstimate) via context
  const [estimate, setEstimate] = useContext(EstimateContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  // make a function add things to order

  function addToEstimate(orderedService) {
    setEstimate([...estimate, orderedService]);
  }
  // make a function remove things from order

  function removeFromEstimate(index) {
    // [1,2,3,4]  -> [1,3,4]
    setEstimate([
      // before
      ...estimate.slice(0, index),
      // after
      ...estimate.slice(index + 1),
    ]);
  }
  // send data as a serverless function when they check out

  async function submitContactform(e) {
    console.log(e);
    e.preventDefault();
    setLoading(true);
    setError(null);

    // gather all data

    const body = {
      order: attachNamesAndPricesFromEstimate(estimate, categories),
      name: inputs.name,
      email: inputs.email,
    };

    // send data to the serverless function

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/sendContactForm`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());
    // check if everything works
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Contact form was submitted');
    }
  }

  return {
    estimate,
    addToEstimate,
    removeFromEstimate,
    error,
    loading,
    message,
    submitContactform,
  };
}
