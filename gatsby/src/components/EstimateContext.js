import React, { useState } from 'react';

// Create Estimate context
const EstimateContext = React.createContext();

export function EstimateProvider({ children }) {
  // stick state in here

  const [estimate, setEstimate] = useState([]);
  return (
    <EstimateContext.Provider value={[estimate, setEstimate]}>
      {children}
    </EstimateContext.Provider>
  );
}

export default EstimateContext;
