import React, { Component } from "react";
import Card from "react-trello/dist/components/Card";
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
    const filteredTags = this.state.tags.filter(
      item => item.cardId !== cardId && item.tagId !== tagId
    );
    this.setState(
      {
        tags: filteredTags
      },
      () => {
        deleteTag(cardId, tagId);
      }
    );
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
      onDelete,
      metaData,
      cardStyle,
      dragStyle,
      tagStyle,
      editable,
      titleDoubleClick,
      descriptionDoubleClicked
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
        onDelete={onDelete}
        metaData={metaData}
        cardStyle={cardStyle}
        dragStyle={dragStyle}
        tagStyle={tagStyle}
        editable={editable}
        titleDoubleClick={titleDoubleClick}
        descriptionDoubleClicked={descriptionDoubleClicked}
        deleteTag={this.deleteTag}
      />
    );
  }
}

export default CustomCard;
