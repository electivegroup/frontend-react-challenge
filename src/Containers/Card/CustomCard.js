import React from "react";
import Card from "react-trello/dist/components/Card";
import "./Container.css";

const CustomCard = ({
  id,
  title,
  index,
  description,
  label,
  tags,
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
}) => (
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
  />
);

export default CustomCard;
