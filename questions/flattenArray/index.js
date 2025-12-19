/** Flatten Array **
 *
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array.
 *
 *
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 *
 */

// function flatten(nums) {
// for (elem of nums) {
// if (elem is an array) {
// flatten(elem)}
// else {
//   results.push(elem)}
//   }}

console.log("4.13 Flatten Array");
console.log("RECURSION");
const flatten = (nums) => {
  const result = [];

  const flattenHelper = (nums) => {
    for (elem of nums) {
      if (Array.isArray(elem)) {
        flattenHelper(elem);
      } else {
        result.push(elem);
      }
    }
  };
  flattenHelper(nums);
  return result;
};

module.exports = flatten;

// const result = []

// const flattenHelper = (nums) => {
//   for (elem of nums){
//     if (Array.isArray(elem)){
//       flattenHelper(elem)
//     }else{
//       result.push(elem)
//     }
//   }
// }

// flattenHelper(nums)

// return result
