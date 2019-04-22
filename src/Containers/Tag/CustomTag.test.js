import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import CustomTag from "./CustomTag";

describe("Enhanced Tag", () => {
  // Create props for tests
  let props = null;
  // Call this first to setup the tests
  beforeEach(() => {
    // Arrange
    props = {
      title: "Tag Title",
      color: "white",
      bgcolor: "orange",
      tagStyle: {}
    };
  });

  it("should render a tag with props", () => {
    // Act
    const { getByText } = render(<CustomTag {...props} />);

    // Assert
    const node = getByText(props.title);
    expect(node).toBeDefined();
  });

  it("should render a tag with a delete button", () => {
    // Act
    const { getByTestId } = render(<CustomTag {...props} />);

    // Assert
    const node = getByTestId("tag-delete-button");
    expect(node).toBeDefined();
  });
});
