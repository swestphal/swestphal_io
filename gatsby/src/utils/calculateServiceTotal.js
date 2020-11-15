import React from 'react';
import calculateServicePrice from './calculateServicePrice';

export default function calculateServiceTotal(estimate, categories) {
  // loop over each item in the estimate

  const total = estimate.reduce((runningTotal, singleEstimate) => {
    const catTotal = categories.map((a, i) => {
      let num = runningTotal;
      const rel = a.relatedCategories;
      const category = rel.find(
        (category) => category._key === singleEstimate.id
      );
      // calc the total for the items
      if (category !== undefined) {
        num = runningTotal + calculateServicePrice(category.price);
      }
      return num;
    });

    // add the total to the running total
    return catTotal.reduce((acc, current) => acc + current);
  }, 0);

  return total;
}
