import React from "react";
import { Card } from "react-trello";

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
  titleDoubleClick
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
  />
);

export default CustomCard;
