// Write your code below this line.

/*
Using random number generator to generate the function
*/
function luckyNums(num) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let answer = [];
    for (i = 0; i < num; i++) { //for loop to iterate through the set array number of times specified
      let j = Math.floor(Math.random() * arr.length); // gives random number in the set array
      answer.push(arr[j]); // pushes number to new array
      arr.splice(j, 1); //find number in old array and removes it
    }
    return answer;
  }
  
  let test = luckyNums(5); // # of times to iterate
  console.log(test);