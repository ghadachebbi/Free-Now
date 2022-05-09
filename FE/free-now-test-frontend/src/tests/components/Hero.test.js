import React from "react";
import Hero from "../../components/Hero.js";
import { render, cleanup } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";

afterEach(cleanup);

it("should load picture", () => {
  const { getByTestId } = render(<Hero />);
  expect(getByTestId("heroStyle")).toHaveStyle(
    `background: url("./images/freeNow.jpg") center/cover no-repeat;
    `
  );
});
