import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "../components/App";

test("component renders correctly", () => {
  const history = createMemoryHistory();
  const { asFragment } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});
