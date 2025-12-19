/** Sum of Two **
 * 
 * Given two arrays, 'nums1' and 'nums2', return true if 
 * there are two numbers in both arrays which can add up to
 * an integer target. Otherwise, return false. 
 * 
 * @example
 * sumOfTwo([1, 2, 3], [5, 2], 8) -> true
 * sumOfTwo([0, 12, 8], [3, 1, 4], 2) -> false
 * sumOfTwo([4, 5, 8], [3, 1, 4], 9) -> true
 * 
 */

console.log("4.15 Sum of Two")
//twoSum used hashmaps. This uses sets

//naive way = nested for loops. 
//Add each number in nums1 to each in nums2
//Time=n^2. Boo

//Better:
//Start with target-nums1[0]=difference
//Need to find x iff nums2[x]===difference
//Need to store difference temporarily
//Temp array inefficient b/c time
//Temp array hashmaop would need key. Boo
//So use SET to store difference
//Set= think of as hashmap without key. Just a 'set' of UNIQUE values (or as array w/o dups)
//establish set = {nums1[0]-target=set[0], nums1[1]-target=set[1], etc}
//Then, can loop through set against nums2 checking for === w/set.has

 const sumOfTwo = (nums1, nums2, target) => {
  const set=new Set()

  for (num of nums1) {
    set.add(target-num)
  }

  for (num of nums2){
    if (set.has(num)){
      return true
    }
  }

  return false;
  
 };

module.exports = sumOfTwo;


  //  const set = new Set();

  //  for (num of nums1) {
  //    set.add(target - num);
  //  }

  //  for (num of nums2) {
  //    if (set.has(num)) {
  //      return true;
  //    }
  //  }

  //  return false;
