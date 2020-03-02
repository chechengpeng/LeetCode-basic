/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  var a = 0;
  nums.forEach(ele => {
    if (ele.toString().length % 2 === 0) {
      a++;
    }
  });
  return a;
};
console.log(findNumbers([12, 345, 2, 6, 7896, 22]));
