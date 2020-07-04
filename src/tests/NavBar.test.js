import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavBar from "../components/NavBar";

test("component renders correctly", () => {
  const history = createMemoryHistory();
  const { asFragment } = render(
    <Router history={history}>
      <NavBar />
    </Router>
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

test(" renders NavBar component", () => {
  const history = createMemoryHistory();
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <NavBar />
    </Router>
  );


  expect(getByTestId("logo-id")).toBeInTheDocument();
  expect(getByText("View Properties")).toBeInTheDocument();
  expect(getByText("Add a Property")).toBeInTheDocument();

});
