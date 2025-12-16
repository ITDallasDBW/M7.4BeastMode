/** Search in Rotated Sorted Array **
 *
 * Given a rotated sorted array and a target,
 * return the index of the number in the array
 * which equals to the target.
 *
 * Note: Your solutions' time complexity must be faster than O(n).
 * This will always mean binary search with L, Mid, R pointers
 * set l=0, r=arr.length, mid=(l+r)/2
 *
 * @example
 * search([5, 4, 1, 2, 3], 2) -> 3
 * search([7, 9, 12, 3, 4], 7) -> 0
 * search([3, 4, 2, 0], 4) -> 1
 *
 */

//Multiple cases
//Case 1:
//[8,9,10,0,1,2,3,4,5,6,7] target=1
//Blue=8,9,10. Green = 0-7
//Mid is in GREEN portion of array

//If target < nums[mid], search left of nums[mid] (new r=mid-1, new mid=(r+l)/2)
//If target > nums[r], search left of mid
//SO...combining:
//If target < nums[mid] OR target > nums[r]
//Search to left of nums[mid]
//else
//Search to the right of nums[mid]

//Case 2:
//[8,9,10,0,1,2] target=1
//Blue=8,9,10. Green=0,1,2
//l=0, r=nums.length=5, mid=floor(r+l)/2=2
//Mid is in BLUE portion of array

//If target < nums[l] OR target > nums[mid]
// Search right of nums[mid];
// New l=mid+1, new mid=(r+l)/2
// else
//Serach to left of nums[mid]

//Binary search always sets:
// l=0, r=arr.length, mid=(l+r)/2

console.log("4.11 Search in Rotated Sorted Array");
const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid
    //For green portion of array
    if (nums[mid] < nums[r]) {
      //Checks blue vs green portion of array
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    //For blue portion
    else {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      }
      else {
        r=mid-1
      }
    }
  }
  return "not found"
  //wow. Lot. of. Action.
};

module.exports = search;
