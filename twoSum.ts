function twoSum(nums: number[], target: number): number[] {
  let returnedNums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let i2 = 1; i2 <= nums.length; i2++) {
      if (nums[i] + nums[i2] === target) {
        returnedNums.push(i, i2);
        return returnedNums;
      }
    }
  }
  return returnedNums;
}
