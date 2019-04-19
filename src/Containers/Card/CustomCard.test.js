import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import CustomCard from "./CustomCard";

describe("Custom Card", () => {
  // Create props for tests
  let props = null;
  // Call this first to setup the tests
  beforeEach(() => {
    // Arrange
    props = {
      id: "Card1",
      title: "John Smith",
      index: 0,
      description: "The card description",
      label: "due in a day",
      tags: [
        {
          title: "Bug",
          color: "white",
          bgcolor: "orange",
          tagStyle: {}
        },
        {
          title: "Feature",
          color: "white",
          bgcolor: "orange",
          tagStyle: {}
        }
      ],
      laneId: "Lane1",
      removeCard: jest.fn((laneId, id) =>
        console.log("removeCard called: ", laneId, id)
      ),
      onClick: () => console.log("onClick called"),
      onDelete: jest.fn((id, laneId) =>
        console.log("onDelete called: ", id, laneId)
      ),
      metaData: {},
      cardStyle: {},
      dragStyle: {},
      tagStyle: {},
      editable: true,
      titleDoubleClick: jest.fn(() => console.log("titleDoubleClick called"))
    };
  });

  afterEach(cleanup);

  test("it renders the custom card with props", () => {
    // Act
    const { getByText } = render(<CustomCard {...props} />);

    // Assert
    const titleNode = getByText(props.title);
    const descriptionNode = getByText(props.description);
    const labelNode = getByText(props.label);
    const firstTagNode = getByText(props.tags[0].title);
    const secondTagNode = getByText(props.tags[1].title);

    expect(titleNode).toBeDefined();
    expect(descriptionNode).toBeDefined();
    expect(labelNode).toBeDefined();
    expect(firstTagNode).toBeDefined();
    expect(secondTagNode).toBeDefined();
  });

  it("calls a function when the delete button is clicked", () => {
    // Act
    const { getByTestId } = render(<CustomCard {...props} />);

    // Assert
    const node = getByTestId("delete-button");

    fireEvent.click(node);

    expect(props.removeCard).toBeCalledWith(props.laneId, props.id);
    expect(props.removeCard).toHaveBeenCalledTimes(1);

    expect(props.onDelete).toHaveBeenCalledWith(props.id, props.laneId);
    expect(props.onDelete).toHaveBeenCalledTimes(1);
  });

  it("allows a user to edit the title (name) text - when the text is double clicked - and clicked again", () => {
    // Act
    const { getByText } = render(<CustomCard {...props} />);

    // Assert
    const node = getByText(props.title);

    fireEvent.doubleClick(node);

    expect(props.titleDoubleClick).toHaveBeenCalledTimes(1);
    expect(node).toHaveAttribute("contenteditable", "true");

    fireEvent.change(node, { target: { textContent: "Updated Title" } });
    fireEvent.doubleClick(node);

    expect(props.titleDoubleClick).toHaveBeenCalledTimes(2);
    expect(node).toHaveAttribute("contenteditable", "false");
    expect(node.textContent).toBe("Updated Title");
  });

  it("doesn't allow the user to leave the title (name) text empty", () => {
    // Act
    const { getByText } = render(<CustomCard {...props} />);

    // Assert
    const node = getByText(props.title);

    fireEvent.doubleClick(node);

    expect(props.titleDoubleClick).toHaveBeenCalledTimes(1);
    expect(node).toHaveAttribute("contenteditable", "true");

    fireEvent.change(node, { target: { textContent: "" } });
    fireEvent.blur(node);

    expect(node.textContent).toBe(props.title);
  });
});
