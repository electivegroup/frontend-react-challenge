import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import CustomTag from "./CustomTag";

describe("Enhanced Tag", () => {
  // Create props for tests
  let props = null;
  // Call this first to setup the tests
  beforeEach(() => {
    // Arrange
    props = {
      cardId: "Card1",
      tagId: 0,
      title: "Tag Title",
      color: "white",
      bgcolor: "orange",
      tagStyle: {},
      deleteTag: jest.fn((cardId, tagId) => {})
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

  it("should call tagOnDelete when the delete button is pressed", () => {
    // Act
    const { getByTestId } = render(<CustomTag {...props} />);

    const node = getByTestId("tag-delete-button");

    fireEvent.click(node);

    expect(props.deleteTag).toHaveBeenCalledWith(props.cardId, props.tagId);
    expect(props.deleteTag).toHaveBeenCalledTimes(1);
  });
});
