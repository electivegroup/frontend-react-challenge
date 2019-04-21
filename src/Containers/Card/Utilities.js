export const formatDate = date => {
  var today = new Date(date);
  if (today === "Invalid date") return null;
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  return `${mm}/${dd}/${yyyy}`;
};
