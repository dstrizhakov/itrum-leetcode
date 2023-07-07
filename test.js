

const flat = (arr) => {
  return arr.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flat(val)] : [...acc, val], []);
}

console.log(flat([[[1]],[2], [3], [4]]));