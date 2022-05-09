import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../App";
import FreeNowVehiclesPage from "../pages/FreeNowVehiclesPage";
import ShareNowVehiclesPage from "../pages/ShareNowVehiclesPage";
import MapPage from "../pages/MapPage";
import Home from "../pages/Home";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../pages/Home");
jest.mock("../pages/MapPage");
jest.mock("../pages/FreeNowVehiclesPage");
jest.mock("../pages/ShareNowVehiclesPage");

afterEach(() => {
  jest.clearAllMocks();
});

describe("App routes", () => {
  it("should show Home component for / router", () => {
    // Arrange
    Home.mockImplementation(() => <div>HomePageMock</div>);

    // Act
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });

  it("should show free now vehicules component for /freeNowVehicles router", () => {
    // Arrange
    FreeNowVehiclesPage.mockImplementation(() => (
      <div>FreeNowVehiclesPageMock</div>
    ));

    // Act
    const history = createMemoryHistory();
    history.push("/freeNowVehicles");
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    expect(screen.getByText("FreeNowVehiclesPageMock")).toBeInTheDocument();
  });

  it("should show share now vehicles for /shareNowVehicles router", () => {
    // Arrange
    ShareNowVehiclesPage.mockImplementation(() => (
      <div>ShareNowVehiclesPageMock</div>
    ));

    // Act
    const history = createMemoryHistory();
    history.push("/shareNowVehicles");
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    expect(screen.getByText("ShareNowVehiclesPageMock")).toBeInTheDocument();
  });

  it("should show map component for /webMap router", () => {
    // Arrange
    MapPage.mockImplementation(() => <div>MapPageMock</div>);

    // Act
    const history = createMemoryHistory();
    history.push("/map");
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    expect(screen.getByText("MapPageMock")).toBeInTheDocument();
  });
});
