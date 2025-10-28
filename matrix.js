const numbers = [
  [45,16,57],
  [43,55,56],
  [74,18,91],
];

for (let number = 0; number < numbers.length; number++) {
  for (let start = 0; start < numbers[number].length; start++) {


    console.log(`${number + 1} ${start + 1} = ${numbers[number][start]}`);
  }
}