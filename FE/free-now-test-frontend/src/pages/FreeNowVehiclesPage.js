import React, { useContext } from "react";
import FreeNowVehicles from "../components/FreeNowVehicles";
import { Context } from "../Context";

export default function FreeNowVehiclesContainer() {
  const { freeVehicles } = useContext(Context);
  console.log();
  return <FreeNowVehicles FreeNowVehiclesData={freeVehicles} />;
}
