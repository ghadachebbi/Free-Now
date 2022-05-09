import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Context } from "../Context";
import "@testing-library/jest-dom/extend-expect";

const FAKE_FREE_NOW_VEHIClES = {
  poiList: [
    {
      id: 2056777518,
      coordinate: { latitude: 53.5532316, longitude: 10.0087783 },
      state: "ACTIVE",
      type: "TAXI",
    },
  ],
};

const FAKE_SHARE_NOW_VEHIClES = {
  placeMarks: [
    {
      id: 1833240479,
      address: "Lesserstraße 170, 22049 Hamburg",
      coordinates: [10.07526, 53.59301, 0],
      engineType: "CE",
      exterior: "UNACCEPTABLE",
      fuel: 42,
      interior: "UNACCEPTABLE",
      name: "HH-GO8522",
      vin: "WME4513341K565439",
    },
  ],
};

const renderWithContext = () => {
  const ChildComponent = () => {
    const { freeVehicles, shareVehicles } = React.useContext(Context);
    return (
      <div>
        <p>{freeVehicles.poiList[0].state}</p>
        <p>{shareVehicles.placeMarks[0].name}</p>
      </div>
    );
  };

  render(
    <Context.Provider
      value={{
        freeVehicles: FAKE_FREE_NOW_VEHIClES,
        shareVehicles: FAKE_SHARE_NOW_VEHIClES,
      }}
    >
      <ChildComponent />
    </Context.Provider>
  );
};

describe("Context", () => {
  afterEach(cleanup);

  it("should provide context data to child component", () => {
    renderWithContext();

    expect(
      screen.getByText(FAKE_FREE_NOW_VEHIClES.poiList[0].state)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES.placeMarks[0].name)
    ).toBeInTheDocument();
  });
});
