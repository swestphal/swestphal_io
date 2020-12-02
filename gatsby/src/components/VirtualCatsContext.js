import React, { useState } from 'react';

// Create Estimate context
const VirtualCatsContext = React.createContext();

export function VirtualCatsProvider({ children }) {
  // stick state in here

  const [virtualCats, setVirtualCats] = useState([]);
  return (
    <VirtualCatsContext.Provider value={[virtualCats, setVirtualCats]}>
      {children}
    </VirtualCatsContext.Provider>
  );
}

export default VirtualCatsContext;
