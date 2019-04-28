import React from "react";
import Tag from "react-trello/dist/components/Tag";

const CustomTag = ({
  title,
  color,
  bgcolor,
  tagStyle,
  cardId,
  tagId,
  deleteTag
}) => (
  <Tag
    key={tagId}
    title={title}
    color={color}
    bgcolor={bgcolor}
    tagStyle={tagStyle}
    cardId={cardId}
    tagId={tagId}
    deleteTag={deleteTag}
  />
);

export default CustomTag;
