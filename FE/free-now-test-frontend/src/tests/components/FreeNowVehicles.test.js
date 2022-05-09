import React from "react";
import { render, screen } from "@testing-library/react";
import FreeNowVehicles from "../../components/FreeNowVehicles";
import FreeNowPoiModel from "../../model/FreeNowPoiModel";
import "@testing-library/jest-dom/extend-expect";

const FAKE_FREE_NOW_VEHIClES = [
  new FreeNowPoiModel({
    id: 2056777518,
    coordinate: { latitude: 53.5532316, longitude: 10.0087783 },
    state: "INACTIVE",
    type: "TAXI",
  }),
];

jest.mock("../../api/FreeNowApi");

const renderFreeNowVehicules = () =>
  render(<FreeNowVehicles FreeNowVehiclesData={FAKE_FREE_NOW_VEHIClES} />);

afterEach(() => {
  jest.clearAllMocks();
});

describe("FreeNowVehicles", () => {
  it("should render table header", () => {
    renderFreeNowVehicules();

    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("State")).toBeInTheDocument();
  });

  it("should render table data", () => {
    renderFreeNowVehicules();

    expect(
      screen.getByText(FAKE_FREE_NOW_VEHIClES[0].type)
    ).toBeInTheDocument();
    expect(
      screen.getByText(FAKE_FREE_NOW_VEHIClES[0].state)
    ).toBeInTheDocument();
  });
});
