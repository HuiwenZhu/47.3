function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[left] < arr[right]) return 0;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

Solution code: