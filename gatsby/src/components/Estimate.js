import React from 'react';
import StyledEstimate from './Estimate.styled';

function EstimateButton({ category, removeFromEstimate, index, single }) {
  return (
    <>
      <StyledEstimate>
        {category.name}
        <button
          type="button"
          className="remove"
          title="Remove from wishlist"
          onClick={() => removeFromEstimate(index)}
        >
          &times;
        </button>
      </StyledEstimate>
    </>
  );
}

export default function Estimate({ estimate, categories, removeFromEstimate }) {
  return estimate.map((singleEstimate, index) => {
    const category = categories[0].relatedCategories.find(
      (category) => category._key === singleEstimate.id
    );
    return (
      <StyledEstimate
        key={`btn-${singleEstimate.id}-${index + 1}`}
        type="button"
        className="remove"
        title="Remove from wishlist"
        onClick={() => removeFromEstimate(index)}
        colour={category.colour}
      >
        <span>{category.name}</span>&times;
      </StyledEstimate>
    );
  });
}
