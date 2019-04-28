/**
 * tagTemplate
 * Return the shape of the tag.
 * @return {object} the newly request tag shape.
 */
export const tagTemplate = () => {
  const data = {
    editable: true,
    cardId: null,
    tagId: null,
    title: null,
    color: "white",
    bgcolor: "orange",
    tagStyle: {}
  };
  return data;
};
