import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import FreeNowVehiclesPage from "../../pages/FreeNowVehiclesPage";
import { Context } from "../../Context";
import "@testing-library/jest-dom/extend-expect";

const FAKE_FREE_NOW_VEHIClES = [
  {
    id: 2056777518,
    coordinate: { latitude: 53.5532316, longitude: 10.0087783 },
    state: "ACTIVE",
    type: "TAXI",
  },
];

jest.mock("../../api/FreeNowApi");
jest.mock("../../api/ShareNowApi");

const renderFreeNowVehiculesPage = () =>
  render(
    <Context.Provider
      value={{ freeVehicles: FAKE_FREE_NOW_VEHIClES, shareVehicles: [] }}
    >
      <FreeNowVehiclesPage />
    </Context.Provider>
  );

afterEach(() => {
  cleanup();
});

describe("FreeNowVehiclesPage", () => {
  it("should provide context data to child component", () => {
    renderFreeNowVehiculesPage();

    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("State")).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_FREE_NOW_VEHIClES[0].type)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_FREE_NOW_VEHIClES[0].state)
    ).toBeInTheDocument();
  });
});
