import React from 'react';
import { StyledEstimateButton } from './EstimateSelection.styled';

export default function EstimateSelection({
  categories,
  addToEstimate,
  virtualCats,
}) {
  return (
    <div className="estimate__service-items ">
      {categories[0].relatedCategories.map((item, i) => (
        <StyledEstimateButton
          colour={item.colour}
          key={`${item._key}-${i}`}
          type="button"
          className={virtualCats[i].isActive ? 'disabled' : ''}
          onClick={() => addToEstimate({ id: item._key })}
        >
          <h4>{item.name}</h4>
        </StyledEstimateButton>
      ))}
    </div>
  );
}
