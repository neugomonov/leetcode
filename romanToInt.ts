function romanToInt(s: string): number {
  let result: number = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        s[i + 1] !== "V" || "X" ? result++ : result;
        break;
      case "V":
        s[i - 1] === "I" ? (result = result + 4) : (result = result + 5);
        break;
      case "X":
        s[i + 1] !== "L" || "C"
          ? s[i - 1] === "I"
            ? (result = result + 9)
            : (result = result + 10)
          : result;
        break;
      case "L":
        s[i - 1] === "X" ? (result = result + 40) : (result = result + 50);
        break;
      case "C":
        s[i + 1] !== "D" || "M"
          ? s[i - 1] === "X"
            ? (result = result + 90)
            : (result = result + 100)
          : result;
        break;
      case "D":
        s[i - 1] === "C" ? (result = result + 400) : (result = result + 500);
        break;
      case "M":
        s[i - 1] === "C" ? (result = result + 900) : (result = result + 1000);
        break;
      default:
        result;
        break;
    }
  }
  return result;
}

//2216-1000+900-100+90-5+4=2105!=1994
