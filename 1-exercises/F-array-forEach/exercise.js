/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const multipliesOfThreeAndFive = arr.map(num => {
  return num % 15 === 0 ? 'FizzBuzz' : num % 5 === 0 ? 'Buzz' : num % 3 === 0 ? 'Fizz' : num;
})

console.log(multipliesOfThreeAndFive, `<-------- multipliesOfThreeAndFive array, multiplies of 3: Fizz, multiplies of 5: Buzz, and multiplies of both 3 and 5: Fizzbuzz`);

multipliesOfThreeAndFive.forEach(num => {  // log each element of the array to the console
  console.log(num);
})

console.log(arr, '<--------- original array checked if it has been mutated')

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
