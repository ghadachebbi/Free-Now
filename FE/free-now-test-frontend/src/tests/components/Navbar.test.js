import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { toHaveAttribute } from "@testing-library/jest-dom";
import Navbar from "../../components/Navbar.js";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

describe("Navbar routes", () => {
  const history = createMemoryHistory();
  history.push("/Navbar");
  it("should be enabled", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );
    expect(getByTestId("button")).not.toHaveAttribute("disabled");
  });

  it("should show dropdown list", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    fireEvent.click(getByTestId("button"));
  });
  it("should render the home page", () => {
    const { container, getByTestId } = renderWithRouter(<Navbar />);
    const navbar = getByTestId("navbar");
    const link = getByTestId("home-link");

    expect(container.innerHTML).toMatch("Home");
    expect(navbar).toContainElement(link);
  });
  it("should navigate to the Free Now page", () => {
    const { container, getByTestId } = renderWithRouter(<Navbar />);

    fireEvent.click(getByTestId("freeNow-link"));

    expect(container.innerHTML).toMatch("Free Now");
  });

  it("should navigate to the Share Now page", () => {
    const { container, getByTestId } = renderWithRouter(<Navbar />);

    fireEvent.click(getByTestId("shareNow-link"));

    expect(container.innerHTML).toMatch("Share Now");
  });
  it("should navigate to the Map page", () => {
    const { container, getByTestId } = renderWithRouter(<Navbar />);

    fireEvent.click(getByTestId("map-link"));

    expect(container.innerHTML).toMatch("Map");
  });
});
