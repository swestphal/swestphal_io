import React, { useContext, useState } from 'react';
// import EstimateContext from '../components/EstimateContext';
// import formatMoney from './formatMoney';

// import calculateServiceTotal from './calculateServiceTotal';
import attachNamesAndPricesFromEstimate from './attachNamesAndPricesFromEstimate';
// import category from '../../../sanity/schemas/category';

export default function useService({ categories, inputs }) {
  // create some state to hold our order
  // const [estimate, setEstimate] = useState([]);
  // now access both our state and our updater function (setEstimate) via context
  // const [estimate, setEstimate] = useContext(EstimateContext);
  const [estimate, setEstimate] = useState([]);
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
    console.log('added');
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
      console.log(orderedService);
      console.log(...estimate);
      setEstimate([...estimate, orderedService]);
    }
  }
  // make a function remove things from order

  function removeFromEstimate(index) {
    let catIndex = 0;
    for (let i = 0; i < virtualCats.length; i++) {
      if (virtualCats[i]._key === estimate[index].id) {
        catIndex = i;
      }
    }

    const copies = [...virtualCats]; // 1. Make a shallow copy of the items
    const copy = copies[catIndex]; // 2. Make a shallow copy of the item you want to mutate
    copy.isActive = false; // 3. Replace the property you're intested in
    copies[catIndex] = copy; // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
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

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function checkForm(e) {
    if (validateEmail(inputs.email) && inputs.name && inputs.name.length >= 3)
      submitContactform(e);
    e.preventDefault();
    setMessage(inputs.name ? 'E-Mail fehlt' : 'Bitte einen Namen eintragen');
  }
  async function submitContactform(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // gather all data

    const body = {
      name: inputs.name,
      email: inputs.email,
      text: inputs.textmessage,
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
      setMessage('Ihre Anfrage wurde gesendet');
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
    checkForm,
  };
}
