import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders component correctly", () => {
    const { asFragment } = render(<AddProperty />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  it("renders AddProperty", () => {
      const { getByLabelText, getByRole } = render(<AddProperty />);
      
      expect(getByLabelText("Property Description")).toBeInTheDocument();
      expect(getByLabelText("City")).toBeInTheDocument();
      expect(getByLabelText("Type")).toBeInTheDocument();
      expect(getByLabelText("Bedrooms")).toBeInTheDocument();
      expect(getByLabelText("Bathrooms")).toBeInTheDocument();
      expect(getByLabelText("Price")).toBeInTheDocument();
      expect(getByLabelText("Email")).toBeInTheDocument();
      expect(getByRole("button")).toBeInTheDocument();
  });
 
});
