const twoSum = (nums: number[], target: number): number[] => {
  const map = {};
  let returnedNums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (map[another] > -1) {
      returnedNums = [map[another], i];
      return returnedNums;
    }
    map[nums[i]] = i;
  }
  return returnedNums;
};
