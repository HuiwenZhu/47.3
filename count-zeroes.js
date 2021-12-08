function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  if (arr[rightIdx] === 1) return 0;

  while (leftIdx < rightIdx) {
    let middleIndex = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIndex] === 0) {
      rightIdx = middleIndex;
    } else if (arr[middleIndex] === 1) {
      leftIdx = middleIndex + 1;
    }
  }
  return arr.length - rightIdx;
}

//SOLUTION CODE:
// function countZeroes(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   let firstZero = findFirst(arr)
//   if (firstZero === -1) return 0;

//   return arr.length - firstZero
// }

// function findFirst(arr, low = 0, high = arr.length - 1) {
//   if (high >= low) {
//     let mid = low + Math.floor((high - low) / 2)
//     if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
//       return mid;
//     } else if (arr[mid] === 1) {
//       return findFirst(arr, mid + 1, high)
//     }
//     return findFirst(arr, low, mid - 1)
//   }
//   return -1;
// }

// module.exports = countZeroes
