import { useContext, useState } from 'react';
import EstimateContext from '../components/EstimateContext';

export default function useService({ service, inputs }) {
  // create some state to hold our order
  // const [estimate, setEstimate] = useState([]);
  // now access both our state and our updater function (setEstimate) via context
  const [estimate, setEstimate] = useContext(EstimateContext);

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

  return {
    estimate,
    addToEstimate,
    removeFromEstimate,
  };
}
