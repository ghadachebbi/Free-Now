import React, { useContext } from "react";
import ShareNowVehicles from "../components/ShareNowVehicles";
import { Context } from "../Context";

export default function FreeNowVehiclesContainer() {
  const { shareVehicles } = useContext(Context);

  return <ShareNowVehicles ShareNowVehiclesData={shareVehicles} />;
}
