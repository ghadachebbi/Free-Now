import React, { useState, useEffect } from "react";
import FreeNowApi from "./api/FreeNowApi";
import ShareNowApi from "./api/ShareNowApi";
import FreeNowModel from "./model/FreeNowModel";
import ShareNowModel from "./model/ShareNowModel";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [freeVehicles, setFreeVehicles] = useState([]);
  const [shareVehicles, setShareVehicles] = useState([]);

  useEffect(() => {
    FreeNowApi.getFreeNowVehicules()
      .then((data) => new FreeNowModel({ poiList: data.poiList }))
      .then((data) => setFreeVehicles(data.poiList));
  }, []);

  useEffect(() => {
    ShareNowApi.getShareNowVehicules()
      .then((data) => new ShareNowModel({ placemarks: data.placemarks }))
      .then((data) => setShareVehicles(data.placemarks));
  }, []);

  return (
    <Context.Provider value={{ freeVehicles, shareVehicles }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
