export const formatDate = date => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
};

export const getMatchedIndex = (poolList, currentId) => {
  for (let i = 0; i < poolList.length; i++) {
    const id = String(poolList[i].id);
    if (id === currentId) return i;
  }
};
