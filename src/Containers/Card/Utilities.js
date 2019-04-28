export const formatDate = date => {
  const today = new Date(date);

  if (today.toString() === "Invalid Date") {
    return null;
  }

  const dd = String("0" + today.getDate()).slice(-2);
  const mm = String("0" + (today.getMonth() + 1)).slice(-2);
  const yyyy = today.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};
