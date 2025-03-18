/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

/* my approach 
function countVowels(str) {
    // Your code here
    let vowel =['a','e','i','o','u']
    count =0;
    str =str.toLowerCase().split("")
    for(let i=0;i<str.length;i++){
      if (vowel.includes(str[i])){
        count+=1;
      }
    }
    return count;
}
*/
// better approach
function countVowels(str){
  let vowel = new Set(['a','e','i','o','u']);
  let count=0;
  for(let char of str.toLowerCase()){
     if(vowel.has(char)){    // 
      count++;   // takes o(1) time compared to o(n) in array.includes()
     }    
  }
  return count;
}




module.exports = countVowels;


