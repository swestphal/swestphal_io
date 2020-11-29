import React from 'react';

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
                <div className="estimate__item" key={singleEstimate.id}>
                  <p>{category.name}</p>
                  <button
                    type="button"
                    className="remove"
                    title="Remove from wishlist"
                    onClick={() => removeFromEstimate(index)}
                  >
                    &times;
                  </button>
                </div>
              );
          })}
        </div>
      ))}
    </>
  );
}
