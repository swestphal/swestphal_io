import React, { useContext, useState } from 'react';
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
  // todo multiple cats
  const firstCatsInit = categories[0].relatedCategories.map((cats) => ({
    ...cats,
    isActive: false,
  }));
  const [virtualCats, setVirtualCats] = useState([...firstCatsInit]);

  // make a function add things to order

  function addToEstimate(orderedService) {
    let oldItem;
    estimate.map((a) => {
      if (orderedService.id === a.id) oldItem = true;
    });
    if (!oldItem) {
      // get id
      const index = categories.map((a, i) => {
        const rel = a.relatedCategories;

        const category = rel.findIndex(
          (category) => category._key === orderedService.id
        );
        return category;
      });

      const copies = [...virtualCats]; // 1. Make a shallow copy of the items
      const copy = copies[index]; // 2. Make a shallow copy of the item you want to mutate
      copy.isActive = true; // 3. Replace the property you're intested in
      copies[index] = copy; // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      // 5. Set the state to our new copy
      setVirtualCats(copies);

      setEstimate([...estimate, orderedService]);
    }
  }
  // make a function remove things from order

  function removeFromEstimate(index) {
    const copies = [...virtualCats]; // 1. Make a shallow copy of the items
    const copy = copies[index]; // 2. Make a shallow copy of the item you want to mutate
    copy.isActive = false; // 3. Replace the property you're intested in
    copies[index] = copy; // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    // 5. Set the state to our new copy
    setVirtualCats(copies);

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
    e.preventDefault();
    setLoading(true);
    setError(null);

    // gather all data

    const body = {
      name: inputs.name,
      email: inputs.email,
      estimate: attachNamesAndPricesFromEstimate(estimate, categories),
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
    virtualCats,
    submitContactform,
  };
}
