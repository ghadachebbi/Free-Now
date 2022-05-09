import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ShareNowVehiclesPage from "../../pages/ShareNowVehiclesPage";
import { Context } from "../../Context";
import "@testing-library/jest-dom/extend-expect";

const FAKE_SHARE_NOW_VEHIClES = [
  {
    id: 1833240479,
    address: "Lesserstraße 170, 22049 Hamburg",
    coordinates: [10.07526, 53.59301, 0],
    engineType: "CE",
    exterior: "UNACCEPTABLE",
    fuel: 42,
    interior: "GOOD",
    name: "HH-GO8522",
    vin: "WME4513341K565439",
  },
];

jest.mock("../../api/ShareNowApi");
jest.mock("../../api/ShareNowApi");

const renderShareNowVehiculesPage = () =>
  render(
    <Context.Provider
      value={{ ShareVehicles: [], shareVehicles: FAKE_SHARE_NOW_VEHIClES }}
    >
      <ShareNowVehiclesPage />
    </Context.Provider>
  );

afterEach(() => {
  cleanup();
});

describe("ShareNowVehiclesPage", () => {
  it("should provide context data to child component", () => {
    renderShareNowVehiculesPage();

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Vin")).toBeInTheDocument();
    expect(screen.getByText("Exterior")).toBeInTheDocument();
    expect(screen.getByText("Interior")).toBeInTheDocument();
    expect(screen.getByText("Fuel")).toBeInTheDocument();
    expect(screen.getByText("Engine")).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES[0].name)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES[0].address)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES[0].vin)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES[0].exterior)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES[0].interior)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES[0].fuel)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_SHARE_NOW_VEHIClES[0].engineType)
    ).toBeInTheDocument();
  });
});
