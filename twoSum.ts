const twoSum = (nums: number[], target: number): number[] => {
  const map = {};
  let indexes: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (map[another] > -1) {
      indexes = [map[another], i];
      return indexes;
    }
    map[nums[i]] = i;
  }
  return indexes;
};
