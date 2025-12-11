/** Two Sum **
 *
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 *
 */
const nums = [1, 2, 4, 9];
const target = 13;
const twoSums = (nums, target) => {
  //Use double-for loop
  //4th loop unnecessary. So, subtract 1 from .length
  for (let i = 0; i < nums.length - 1; ++i) {
    // console.log(`loop ${i}`);
    //Redundant testing a:b, b:a. So, start with j=i
    //BUT, don't want to test a:a. So start with j=i+1
    //Reduces 25 iterations to 10
    for (let j = i + 1; j < nums.length; ++j) {
    //   console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        console.log(i, j)
        return [i, j];
      }
    }
  }
};
twoSums(nums, target);

console.log("twoSum")
const twoSum = (nums, target) => {
    //VERY JUNIOR LEVEL SOLUTION $60K-80K
    //Absolute brute force solution:
    //When both loop start at 0, Both loop over whole array.

    //MID LEVEL SOLUTION $80k-100k
    //O(n^2) time (looping n*n times) | O(1) space (loop not saving anything)
    //limits iterations
//   for (let i = 0; i < nums.length - 1; ++i) {
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[i] + nums[j] === target) {
//         console.log(i, j)
//         return [i, j];
//       }
//     }
//   }

    //TOP TECH SOLUTION $150K-200K+
    //twoSum([1, 2, 4, 9], 13) -> [2, 3]
    //O(n): Only want to loop through array ONCE:
    //Use map to store values as iterate through array
    //O(n) space: Potentially store entire set in new array
    
//Create an empty 'map'(want to set the number we are looking for (13-n) to current index)
//For each element in the array(1,2,4,9):
    //If the current element tested exists in the map (starts empty):
        //Return the map's value and the current index
    //Else:
    //Store the number we are looking for in 'difference'
    //Set 'difference' to the current index in map
//So: 1, 2, 4, 9 and 13:
//digits[0]=1 DNE in map. 13-1=12. map={12:[0]}
//digits[1]=2 DNE in map. 13-2=11. map={12:0, 11:[1]}
//digits[2]=4 DNE in map. 13-4=9. map={12:0, 11:1, 9:[2]}
//digits[3]=9 exists in map at map[2]
//Solution=[2,3]

    const mapDifferenceToIndex = new Map();
    
    for (let i=0; i<nums.length; ++i) {
        if (mapDifferenceToIndex.has(nums[i])) {
            return [mapDifferenceToIndex.get(nums[i]), i]
        }
        const difference=target-nums[i]
        mapDifferenceToIndex.set(difference, i);
    }
};



//Do not edit below here

module.exports = twoSum;
