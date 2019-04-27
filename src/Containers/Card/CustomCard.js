import React, { Component } from "react";
import Card from "react-trello/dist/components/Card";
import { tagTemplate } from "../Tag/Utilities";
import uuidv1 from "uuid/v1";
import "./Container.css";

class CustomCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: null
    };
  }

  /**
   * getDerivedStateFromProps
   * Invoked right before calling the render method,
   * both on the initial mount and on subsequent updates.
   * It should return an object to update the state,
   * or null to update nothing.
   * @param {object} - the new props
   * @param {object} - the current state
   * @returns {object} - the updated state
   * @returns {null} - no changes were made
   */
  static getDerivedStateFromProps = (props, state) => {
    if (state.tags === null) {
      return {
        tags: props.tags
      };
    }
    if (state.tags !== null) {
      return {
        tags: state.tags
      };
    }
    if (props.tags !== state.tags) {
      return {
        tags: props.tags
      };
    }
    return null;
  };

  deleteTag = (cardId, tagId) => {
    const { deleteTag } = this.props;
    const filteredTags = this.state.tags.filter(item => item.tagId !== tagId);
    this.setState(
      {
        tags: filteredTags
      },
      () => {
        deleteTag(cardId, tagId);
      }
    );
  };

  createTag = () => {
    const { id } = this.props;
    const source = {
      cardId: id,
      tagId: uuidv1(),
      title: "Double click to edit"
    };
    const newTag = Object.assign(tagTemplate(), source);

    this.setState(previousState => {
      return {
        tags: [...previousState.tags, newTag]
      };
    });
  };

  render() {
    const {
      id,
      title,
      index,
      description,
      label,
      laneId,
      removeCard,
      onClick,
      deleteCard,
      metaData,
      cardStyle,
      dragStyle,
      tagStyle,
      editable,
      titleDoubleClick,
      descriptionDoubleClicked,
      status
    } = this.props;
    const tags = this.state.tags;
    return (
      <Card
        data-testid={id}
        id={id}
        title={title}
        index={index}
        description={description}
        label={label}
        tags={tags}
        laneId={laneId}
        removeCard={removeCard}
        onClick={onClick}
        deleteCard={deleteCard}
        metaData={metaData}
        cardStyle={cardStyle}
        dragStyle={dragStyle}
        tagStyle={tagStyle}
        editable={editable}
        titleDoubleClick={titleDoubleClick}
        descriptionDoubleClicked={descriptionDoubleClicked}
        deleteTag={this.deleteTag}
        createTag={this.createTag}
        status={status}
      />
    );
  }
}

export default CustomCard;
