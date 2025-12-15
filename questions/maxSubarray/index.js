/** Maximum Subarray
 *
 * Given an integer array `nums`, find the subarray [any series of consecutive] which has the
 * largest sum and return the sum.
 *
 * @examples
 * maxSubArray([5, 4, -1, 7, 8]) = 23...add all together
 * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5...4+-1+2
 * maxSubArray([2, 4, 3, -1, -4, -9]) = 9...2+4+3
 */

// //Find every subarray:
// const nums = [0, 1, 2, 3, 4];

// for (let i = 0; i < nums.length; ++i) {
//   for (let j = i + 1; j <= nums.length; ++j) {
//     const subarray = (nums.slice(i,j))
//   }
// }

//Find every subarray:
// const nums = [0, 1, 2, 3, 4];

// for (let i = 0; i < nums.length; ++i) {
//   for (let j = i + 1; j <= nums.length; ++j) {
//     const subarray = nums.slice(i, j);
//     // //calculate sum of each subarray:
//     // let sum=0;
//     // for (let k=0; k<subarray.length;++k) {
//     //   sum +=subarray[k]
//     //   console.log(subarray, sum)
//     // }
//     //Anytime need to calc sum of all elements in array, think reduce()
//     const sum = subarray.reduce((acc, curr) => acc + curr);
//   }
// }
//Above is very slow (O(n^3) time | O(n) space

// const nums = [-2, 1, -3, 4, -1, 2, -5, 0];

// let sum = 0;
// for (let i = 0; i < nums.length; ++i) {

//   for (let j = i; j < nums.length; ++j) {
//     const subarray = nums.slice(i, j);
//   }
// }

// console.log("Max Subarray");

const maxSubArray = (nums) => {
  // let maxSum = nums[0];
  // for (let i = 0; i < nums.length; ++i) {
  //   //O(n) * O(n^2) -> O(n^3) time. BOOOOOO
  //   for (let j = 1 + i; j <= nums.length; ++j) {
  //     //O(n) * O(n)->O(n^2)
  //     const subarray = nums.slice(i, j);
  //     const sum = subarray.reduce((acc, curr) => acc + curr); //O(n)
  //     //inelegant:
  //     // if (maxSum<sum) {
  //     //   maxSum=sum
  //     // }
  //     //elegant:
  //     maxSum = Math.max(maxSum, sum);
  //   }
  // }

  //BETTER but still slow:
  //O(n^2) time | O(1) space
  // let maxSum=nums[0];
  // for (let i=0; i<nums.length; ++i) {//O(n) time
  //   let sum=0;
  //   for (let j=i; j<nums.length; ++j) {//O(n) time
  //     sum += nums[j]
  //     maxSum=Math.max(maxSum, sum);
  //          }

  //LINEAR-most optimal
  //O(n) time | 0(1) space

  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; ++i) {
    //O(n) time
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;

//LINEAR Solution:
//O(n) time | 0(1) space
//Set 'maxSum' to first array element
//Set 'sum' to 0
//Loop over every element in the array
//if 'sum' is negative
//reset 'sum' to 0
//add the current number onto 'sum'
//if 'maxSum' < 'sum'
//'maxSum'='sum'
//return 'maxSum'
