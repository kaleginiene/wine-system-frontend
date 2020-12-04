import React, { createContext, useState } from "react";

export const WineListContext = createContext();

export const WineListProvider = ({ children }) => {
  const [wineList, setWineList] = useState([]);

  return (
    <WineListContext.Provider value={{ wineList, setWineList }}>
      {children}
    </WineListContext.Provider>
  );
};

export default WineListProvider;
