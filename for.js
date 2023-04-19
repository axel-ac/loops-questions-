// * =======================================================

// *                      FOR LOOP

// * =======================================================

// ! Question-1
// ? Can you make a program that prints hello 10 times?

// ! Solution-1

for (let i = 1; i <= 10; i++) {
  console.log(`${i}: Hello`);
}

// ! Question-2
// ? Calculate the mean of the grades variable?

// ! Solution-2

const grades = [55, 77, 23, 89, 100, 44, 33];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i]; //sum = sum + grades[i]
}
console.log((sum / grades.length).toFixed(2));

// ! Question-3
// ? Negative and positive numbers in arr array save in 2 separate arrays?

// ! Solution-3

const arr = [-5, 15, 22, -4, 45, 78];
let negatives = [];
let positives = [];
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}
console.log(negatives);
console.log(positives);
console.log(arr);
