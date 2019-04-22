import React from "react";
import { render, waitForElement } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  it("renders lazily - suspense loading state", async () => {
    debugger;
    const { getByText } = render(<App />);
    expect(getByText(/Loading\.\.\./i)).toBeInTheDocument();
  });

  it("renders suspense - suspense loaded state", async () => {
    const { getByText } = render(<App />);
    const lazyElement = await waitForElement(() => getByText(/To Do/i));
    expect(lazyElement).toBeInTheDocument();
  });
});
