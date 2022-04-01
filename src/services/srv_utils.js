export function isEmpty(str) {
  return !str || str.length === 0;
}

export function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

export function checkingString(str) {
  if (isEmpty(str) || isBlank(str)) return false;
  return true;
}

export function thruncateString(str, num) {
  if (str.length <= num) return str;
  return str.slice(0, num) + "...";
}

export function uniqueValues(arr) {
  let uniqeuArray = [];
  for (let i = 0; i < arr.length; i++) {
    uniqeuArray.push(arr[i]);
  }
  return uniqeuArray;
}
