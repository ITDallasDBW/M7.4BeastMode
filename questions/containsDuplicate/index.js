/** Contains Duplicate **
 *
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 *
 */

console.log("4.2 Contains Duplicate");
//Brute force
//Double for loop= Time complexity: O(n^2) |  Space complexity (no map): O(1)
//Loop i from 0 to n-1
//Loop j from i+1 to ?
//If elements at index i and j are equal
//return true
//Else return false

//Sorting Method
// Sort the given array= Time complexity: O(nlog(n)) | Space complexity (sort array): O(n)
//Loop from 0 to n-1
//If the current element is equal to its next element
//return true
//return false

//Optimal Solution
//Create an empty 'set' (or 'map)= Time complexity: O(n) | Space complexity: O(n)
//For each element in the array
//If the current element exists in the set
//Return true
//Add the current number in the set
//Return false

const containsDuplicate = (nums) => {
  //BRUTE FORCE SOLUTION 60k-80k
  //o(n^2) time | 0(1) space
  //   for (let i = 0; i < nums.length - 1; ++i) {
  //     for (let j = i + 1; j < nums.length; ++j) {
  //       if (nums[i] === nums[j]) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;

  //SORTING SOLUTION 80k-100k
  //   const sortedArr = nums.sort((a, b) => a - b); //O(n) space | O(nlog(n)) time

  //   for (let i = 0; i < sortedArr.length - 1; ++i) { //O(n) time
  //     if (sortedArr[i] === sortedArr[i + 1]) {
  //       return true;
  //     }
  //   }
  //   return false;

  //OPTIMAL SOLUTION
  //O(n) time | O(n) space
  const set = new Set();//O(n) space
  //or const map=new Map()

  for (let i = 0; i < nums.length; ++i) {//O(n) time
    if (set.has(nums[i])) {//or map.has     //O(1) time
      return true;
    }
    set.add(nums[i]);//if map: map.set(nums[i], true)
  }
  return false;
};

module.exports = containsDuplicate;
