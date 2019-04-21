import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import CustomCard from "./CustomCard";
import { formatDate } from "./Utilities";

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
      label: "Fri Apr 19 2019 15:50:40 GMT+0100",
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
      titleDoubleClick: jest.fn(() => console.log("titleDoubleClick called")),
      descriptionDoubleClicked: jest.fn(() =>
        console.log("descriptionDoubleClicked called")
      )
    };
  });

  afterEach(cleanup);

  test("it renders the custom card with props", () => {
    // Act
    const { getByTestId, getByText } = render(<CustomCard {...props} />);

    // Assert
    const titleNode = getByText(props.title);
    const descriptionNode = getByText(props.description);

    const dueDate = formatDate(props.label);
    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];

    const firstTagNode = getByText(props.tags[0].title);
    const secondTagNode = getByText(props.tags[1].title);

    expect(titleNode).toBeDefined();
    expect(descriptionNode).toBeDefined();
    expect(labelNode).toBeDefined();
    expect(labelNode.value).toBe(dueDate);
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

  it("allows a user to edit the description text - when the text is double clicked - and clicked again", () => {
    // Act
    const { getByText } = render(<CustomCard {...props} />);

    // Assert
    const node = getByText(props.description);

    fireEvent.doubleClick(node);

    expect(props.descriptionDoubleClicked).toHaveBeenCalledTimes(1);
    expect(node).toHaveAttribute("contenteditable", "true");

    fireEvent.change(node, { target: { textContent: "Updated Description" } });
    fireEvent.doubleClick(node);

    expect(props.descriptionDoubleClicked).toHaveBeenCalledTimes(2);
    expect(node).toHaveAttribute("contenteditable", "false");
    expect(node.textContent).toBe("Updated Description");
  });

  it("doesn't allow the user to leave the description text empty", () => {
    // Act
    const { getByText } = render(<CustomCard {...props} />);

    // Assert
    const node = getByText(props.description);

    fireEvent.doubleClick(node);

    expect(props.descriptionDoubleClicked).toHaveBeenCalledTimes(1);
    expect(node).toHaveAttribute("contenteditable", "true");

    fireEvent.change(node, { target: { textContent: "" } });
    fireEvent.blur(node);

    expect(node.textContent).toBe(props.description);
  });

  it("should display a predefined date in the date picker input field", () => {
    // Act
    const { getByTestId } = render(<CustomCard {...props} />);

    const dueDate = formatDate(props.label);
    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];

    // Assert
    expect(labelNode.value).toBe(dueDate);
  });

  it("should allow the user to change the date in the date picker input field", () => {
    // Act
    const { getByTestId } = render(<CustomCard {...props} />);

    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];

    const newDate = formatDate(new Date());
    labelNode.value = newDate;

    fireEvent.change(labelNode, { target: { value: newDate } });

    // Assert
    expect(labelNode.value).toBe(newDate);
  });

  it("should default to the predefined props date if field is empty", () => {
    // Act
    const { getByTestId } = render(<CustomCard {...props} />);

    const dueDate = formatDate(props.label);
    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];

    const newDate = "";
    labelNode.value = newDate;

    fireEvent.change(labelNode, { target: { value: newDate } });
    fireEvent.blur(labelNode);

    // Assert
    expect(labelNode.value).toBe(dueDate);
  });

  it("should default to the predefined props date if bad data is enterd", () => {
    // Act
    const { getByTestId } = render(<CustomCard {...props} />);

    const dueDate = formatDate(props.label);
    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];

    const newDate = "sdgasghsh 23rwgs sg";
    labelNode.value = newDate;

    fireEvent.change(labelNode, { target: { value: newDate } });
    fireEvent.blur(labelNode);

    // Assert
    expect(labelNode.value).toBe(dueDate);
  });
});
