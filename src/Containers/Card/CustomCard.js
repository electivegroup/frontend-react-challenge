import React, { Component } from "react";
import PropTypes from "prop-types";
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
    } else {
      return {
        tags: state.tags
      };
    }
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

CustomCard.defaultProps = {
  titleDoubleClick: () => {},
  descriptionDoubleClicked: () => {},
  deleteCard: () => {}
};

CustomCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  index: PropTypes.number,
  description: PropTypes.string,
  label: PropTypes.string,
  laneId: PropTypes.string.isRequired,
  removeCard: PropTypes.func,
  onClick: PropTypes.func,
  deleteCard: PropTypes.func,
  metadata: PropTypes.object,
  cardStyle: PropTypes.object,
  dragStyle: PropTypes.object,
  tagStyle: PropTypes.object,
  editable: PropTypes.bool,
  titleDoubleClick: PropTypes.func,
  descriptionDoubleClicked: PropTypes.func,
  status: PropTypes.bool
};

export default CustomCard;
