/**
 * 날짜를 받아서 YYYY-MM-DD로 변환하는 함수
 * @param {*} date 날짜
 * @returns YYYY-MM-DD
 */
export const formatDate = date => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
};

/**
 * 수영장 리스트에서 선택한 수영장이 몇번째에 있는지 반환하는 함수
 * @param {*} poolList 수영장 리스트
 * @param {*} currentId model에 있는 선택한 수영장 id
 * @returns 못찾았을경우 -1, 찾았을 경우 수영장 리스트의 인덱스 반환
 */
export const getMatchedIndex = (poolList, currentId) => {
  let start = 0;
  let end = poolList.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (String(poolList[middle].id) !== currentId) {
    if (Number(currentId) < poolList[middle].id && start <= end) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (String(poolList[middle].id) === currentId) {
    return middle;
  }
  return -1;
};
