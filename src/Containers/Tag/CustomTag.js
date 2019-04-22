import React from "react";
import Tag from "react-trello/dist/components/Tag";

const CustomTag = ({ title, color, bgcolor, tagStyle }) => (
  <Tag
    key={title}
    title={title}
    color={color}
    bgcolor={bgcolor}
    tagStyle={tagStyle}
  />
);

export default CustomTag;
