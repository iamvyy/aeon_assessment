/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


// Below is using Two Pointer method 
function twoSum(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    let sum = numbers[low] + numbers[high];

    if (sum === target) {
      return [low + 1, high + 1];
    } else if (sum < target) {
      ++low;
    } else {
      --high;
    }
  }

  // In case there is no solution, return [-1, -1].
  return [-1, -1];
}

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));
