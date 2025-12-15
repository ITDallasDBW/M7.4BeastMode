/** Two Sorted Sum **
 *
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array.
 *
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 *
 */

//Establish pointers (variables) for left and right.
//WHILE pointers don't overlap
//Start at ends of SORTED array
//If sum is bigger than target,
//Shift right pointer left
//If sum is smaller than target,
//Shift left pointer right


console.log("Two Sorted Sum");

const twoSortedSum = (nums, target) => {
    //O(n) time | O(1) space
  let l = 0;
  let r = nums.length-1;

  while (l < r) {     //O(n)
    const sum = nums[l] + nums[r];

    if (sum > target) {
      r--;
    }
    else if (sum < target) {
      l++;
    }
    else {
      return [l, r];
    }
  }
};

module.exports = twoSortedSum;
