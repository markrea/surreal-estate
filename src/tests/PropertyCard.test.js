import React from "react";
import { render, getByRole } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const mockData = {
    title: "3 bedroom house",
    city: "Leeds",
    type: "Detached",
    bedrooms: "3",
    bathrooms: "1",
    price: "1500",
    email: "john_doe@gmail.com",
  };
  it("renders component correctly ", () => {
    const { asFragment } = render(<PropertyCard {...mockData} />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });
  it("renders correct elements", () => {
    const { getByText, getByRole } = render(<PropertyCard {...mockData} />);

    expect(getByText(/3 bedroom house/i)).toBeInTheDocument();
    expect(getByText(/Leeds/i)).toBeInTheDocument();
    expect(getByText(/Detached/i)).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText(/£1500/i)).toBeInTheDocument();
    expect(
      getByRole("button", { name: /Enquire about this property/i })
    ).toBeInTheDocument();
  });
});
