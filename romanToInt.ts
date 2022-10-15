function romanToInt(s: string): number {
  let result: number = 0;
  let map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  s = s
    .replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("XL", "XXXX")
    .replace("XC", "LXXXX")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");
  for (const c of s) {
    result += map[c as keyof object];
  }
  return result;
}
