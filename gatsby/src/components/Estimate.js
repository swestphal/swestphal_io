import React from 'react';
import styled from 'styled-components';

const StyledEstimateItem = styled.div`
  p {
    color: ${(props) => props.colour};
  }
`;
export default function Estimate({ estimate, categories, removeFromEstimate }) {
  return (
    <>
      {estimate.map((singleEstimate, index) => (
        <div key={index}>
          {categories.map((a, i) => {
            const rel = a.relatedCategories;
            const category = rel.find(
              (category) => category._key === singleEstimate.id
            );

            if (category !== undefined)
              return (
                <StyledEstimateItem
                  colour={category.colour}
                  className="estimate__item"
                  key={singleEstimate.id}
                >
                  <p>{category.name}</p>
                  <button
                    type="button"
                    className="remove"
                    title="Remove from wishlist"
                    onClick={() => removeFromEstimate(index)}
                  >
                    &times;
                  </button>
                </StyledEstimateItem>
              );
          })}
        </div>
      ))}
    </>
  );
}
