import React from 'react';
import formatMoney from './formatMoney';
import calculateServicePrice from './calculateServicePrice';

export default function attachNamesAndPricesFromEstimate(estimate, categories) {
  let foundCategory = '';
  const foundCategories = estimate.map((singleEstimate, index) => {
    categories.map((a, i) => {
      const rel = a.relatedCategories;
      const category = rel.find(
        (category) => category._key === singleEstimate.id
      );

      if (category !== undefined) foundCategory = category;
    });
    return {
      ...singleEstimate,
      name: foundCategory.name,
      price: formatMoney(calculateServicePrice(foundCategory.price)),
    };
  });
  return foundCategories;
}
