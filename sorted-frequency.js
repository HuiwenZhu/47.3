function sortedFrequency(arr, val) {
  let firstIdx = firstOcc(arr, val);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = lastOcc(arr, val);
  return lastIdx - firstIdx + 1;

  function firstOcc(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val && (mid === 0 || arr[mid - 1] != val)) {
        return mid;
      } else if (val > arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  }

  function lastOcc(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val && (mid === arr.length - 1 || arr[mid + 1] != val)) {
        return mid;
      } else if (val < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
}

module.exports = sortedFrequency;
