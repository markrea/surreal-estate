import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("component renders correctly", () => {
  const { asFragment } = render(<NavBar />);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});
