import React from "react";
import { render, screen } from "@testing-library/react";
import ShareNowVehicles from "../../components/ShareNowVehicles";
import ShareNowPlacemarkModel from "../../model/ShareNowPlacemarkModel";
import "@testing-library/jest-dom/extend-expect";

const FAKE_SHARE_NOW_VEHIClES = [
  new ShareNowPlacemarkModel({
    id: 1833240479,
    address: "Lesserstraße 170, 22049 Hamburg",
    coordinates: [10.07526, 53.59301, 0],
    engineType: "CE",
    exterior: "UNACCEPTABLE",
    fuel: 42,
    interior: "GOOD",
    name: "HH-GO8522",
    vin: "WME4513341K565439",
  }),
];

jest.mock("../../api/FreeNowApi");

const renderShareNowVehicules = () =>
  render(<ShareNowVehicles ShareNowVehiclesData={FAKE_SHARE_NOW_VEHIClES} />);

afterEach(() => {
  jest.clearAllMocks();
});

describe("ShareNowVehicles", () => {
  it("should render table header", () => {
    renderShareNowVehicules();

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Vin")).toBeInTheDocument();
    expect(screen.getByText("Exterior")).toBeInTheDocument();
    expect(screen.getByText("Interior")).toBeInTheDocument();
    expect(screen.getByText("Fuel")).toBeInTheDocument();
    expect(screen.getByText("Engine")).toBeInTheDocument();
  });

  it("should render table data", () => {
    renderShareNowVehicules();

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
