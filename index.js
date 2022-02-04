function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n²)
*/

/* 
  Add your pseudocode here
  function takes in 2 arguments, an array of numbers and a target number
  loop through array to established number for first variable i
  loop through array again to establish 2nd number for 2nd variable j
  if array item with first variable i + array item with 2nd variable j equals target number, return true
  else return false
*/

/*
  Add written explanation of your solution here
  The above function takes in 2 arguments - an array of numbers and a target number.
  The function loops through the array twice, establishing values for variables i and j.
  The if statement checks to see if array[i] + array[j] = the target number.
  If it does, it returns true.
  If it does not, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([35, 25, 15, 10, 35, 45], 50));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([30, 80, 10, 40, 50, 85], 100));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
