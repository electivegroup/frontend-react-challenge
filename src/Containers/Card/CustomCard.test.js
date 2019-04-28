import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import CustomCard from "./CustomCard";
import { formatDate } from "./Utilities";
import { getData } from "../../data/Store";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

describe("Custom Card", () => {
  // Mock the store
  let mockStore = null;
  let store = null;
  // Create data for tests
  let data = null;
  // Create props for tests
  let props = null;
  // Create tags for tests
  let tags = null;

  // Call this first to setup the tests
  beforeEach(() => {
    // Arrange
    mockStore = configureMockStore();
    store = mockStore({});

    const cardProperties = {
      removeCard: jest.fn((laneId, id) => {}),
      onClick: jest.fn(() => {}),
      deleteCard: jest.fn((id, laneId) => {}),
      metaData: {},
      cardStyle: {},
      dragStyle: {},
      tagStyle: {},
      editable: true,
      titleDoubleClick: jest.fn(() => {}),
      descriptionDoubleClicked: jest.fn(() => {}),
      deleteTag: jest.fn((cardId, tagId) => {})
    };

    data = getData();

    data.lanes.forEach(lane => {
      lane.cards.forEach(card => {
        card = Object.assign(card, cardProperties);
      });
    });

    props = data.lanes[0].cards[0];

    tags = [
      {
        editable: false,
        cardId: props.id,
        tagId: "0",
        title: "High",
        color: "white",
        bgcolor: "#EB5A46",
        tagStyle: {}
      }
    ];
  });

  test("it renders the custom card with props", () => {
    // Act
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );
    // Assert
    const titleNode = getByText(props.title);
    const descriptionNode = getByText(props.description);
    const dueDate = formatDate(props.label);
    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];
    expect(titleNode).toBeDefined();
    expect(descriptionNode).toBeDefined();
    expect(labelNode).toBeDefined();
    expect(labelNode.value).toBe(dueDate);
  });

  test("it renders the custom card with props and tags", () => {
    // Arrange
    props.tags = tags;

    // Act
    const { debug, getByTestId, getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );
    // Assert
    const titleNode = getByText(props.title);
    const descriptionNode = getByText(props.description);
    const dueDate = formatDate(props.label);
    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];
    const tagNode = getByText(props.tags[0].title);
    expect(titleNode).toBeDefined();
    expect(descriptionNode).toBeDefined();
    expect(labelNode).toBeDefined();
    expect(labelNode.value).toBe(dueDate);
    expect(tagNode).toBeDefined();
  });

  it("calls a function when the delete button is clicked", () => {
    // Act
    const { getByTestId } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

    // Assert
    const node = getByTestId("delete-button");
    fireEvent.click(node);
    expect(props.removeCard).toBeCalledWith(props.laneId, props.id);
    expect(props.removeCard).toHaveBeenCalledTimes(1);
    expect(props.deleteCard).toHaveBeenCalledWith(props.id, props.laneId);
    expect(props.deleteCard).toHaveBeenCalledTimes(1);
  });

  it("allows a user to edit the title (name) text - when the text is double clicked - and clicked again", () => {
    // Act
    const { getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

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
    const { getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

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
    const { getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

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
    const { getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

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
    const { getByTestId } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

    const dueDate = formatDate(props.label);
    const datePickerNode = getByTestId("date-picker");
    const labelNode = datePickerNode.getElementsByTagName("input")[0];

    // Assert
    expect(labelNode.value).toBe(dueDate);
  });

  it("should allow the user to change the date in the date picker input field", () => {
    // Act
    const { getByTestId } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

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
    const { getByTestId } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

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
    const { getByTestId } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

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

  it("should create a tag", () => {
    // Act
    const { getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

    // Assert
    const node = getByText("New Tag");
    fireEvent.click(node);
    const tagNode = getByText("Double click to edit");
    expect(tagNode).toBeDefined();
  });

  it("should allow a user to edit a tag", () => {
    // Act
    const { getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

    // Assert
    const node = getByText("New Tag");
    fireEvent.click(node);
    const tagNode = getByText("Double click to edit");
    expect(tagNode).toBeDefined();
    const newTagTitle = "Tag 1";
    fireEvent.doubleClick(tagNode);
    expect(tagNode).toHaveAttribute("contenteditable", "true");
    fireEvent.change(tagNode, { target: { textContent: newTagTitle } });
    fireEvent.doubleClick(tagNode);
    expect(tagNode).toHaveAttribute("contenteditable", "false");
    expect(tagNode.textContent).toBe(newTagTitle);
  });

  it("should allow a user to delete a tag", () => {
    // Act
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <CustomCard {...props} />
      </Provider>
    );

    // Assert
    const node = getByText("New Tag");
    fireEvent.click(node);
    const tagNode = getByText("Double click to edit");
    expect(tagNode).toBeDefined();
    const newTagTitle = "Tag 1";
    fireEvent.doubleClick(tagNode);
    expect(tagNode).toHaveAttribute("contenteditable", "true");
    fireEvent.change(tagNode, { target: { textContent: newTagTitle } });
    fireEvent.doubleClick(tagNode);
    expect(tagNode).toHaveAttribute("contenteditable", "false");
    expect(tagNode.textContent).toBe(newTagTitle);
    const tagDeleteButtonNode = getByTestId("tag-template-delete-button");
    expect(tagDeleteButtonNode).toBeDefined();
    fireEvent.click(tagDeleteButtonNode);
    expect(tagNode).not.toBeInTheDocument();
  });
});
