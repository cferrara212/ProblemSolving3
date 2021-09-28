"use strict"


//////
//////1.Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
//////a.Use Case:
//////i.Given numbers in an array: [5, 17, 77, 50] 
//////ii.Target: 55
//////


let chosenNumbers= [5,17,77,50];
let numberToAddTo=67;
let doTheyAdd=findIndices(chosenNumbers,numberToAddTo);
console.log(doTheyAdd);


function findIndices(numberArray,numberCanAddTo)
{
    let myIndices=[];
    let counter=0;
    for (let i=0; i<numberArray.length; i++)
    {
        
        if(counter===0)
        {
        for(let j=0;j<numberArray.length;j++)
        {
            
            if(numberArray[j]+numberArray[i]===numberCanAddTo && counter === 0)
            {
                counter+=1;
                myIndices.push(numberArray[j]);
                myIndices.push(numberArray[i]);
                break;
            }
        }
        }
        
    }
    return myIndices;
    console.log(myIndices);
}



//////
//////
//////2.Palindrome is a word, phrase, or sequence that reads the same backward as forward i.e. madam. Write code that takes a user input 
//////and checks to see if it is a Palindrome and reports the result. You must handle spaces. 
//////


              ///
                    /// writing variables for palindrom

                    // let wordToCheck= prompt("please enter a word to check if it is a palindrome!");
                    // let trimmedWordToCheck = wordToCheck.trim();
                    // let wordReversed = reverseThisWord(trimmedWordToCheck);
                    // let isPalindrome = checkIfPalindrome(trimmedWordToCheck, wordReversed);


                    ////
                    //// adding function to reverse word
                    
                // function reverseThisWord(wordToBeReversed)
                //  {   
                //      let wordNowReversed ="";
                //     for (let i = wordToBeReversed.length-1; i>=0; i--)
                //     {
                //        wordNowReversed += wordToBeReversed[i];
                //     }
                //     return wordNowReversed;
                // }
                //     console.log(wordReversed);
                //     console.log(isPalindrome);


                    ////
                    //// adding bool function to cross reference the word to the reversed word and return true or false for palindrome.


                    // function checkIfPalindrome(wordToBeChecked, reversedWordToCheck)
                    
                    // {
                    //     let palindrome;
                    //   for (let i=0; i<wordToBeChecked.length; i++)
                    //     {
                            
                             
                    //              if (reversedWordToCheck[i] === wordToBeChecked[i])
                    //               {
                    //                   palindrome =true
                                      
                    //               }
                    //               else
                    //               {
                    //                   palindrome = false
                    //                   break;
                    //               }
                             
                    //     }
                    //     return palindrome
                    // }





//////
//////
//////3.Given a list of integers, return a bool that represents whether or not all integers in the list can form a sequence of incrementing integers
//////a.Use case: 
//////i.{5, 7, 3, 8, 6}  false (no 4 to complete the sequence)
//////ii.{17, 15, 20, 19, 21, 16, 18}  true



                    
                    // let numberSequence= [7,6,4,3,1,2];
                    // let isNumberSequencePossible= checkThisSequence(numberSequence);
                    // console.log(isNumberSequencePossible);


                    // function checkThisSequence(yourNumberSequence)
                    // {
                    //     yourNumberSequence.sort()
                    //     let isItPossible=true;
                    //     if (isItPossible===true)
                    //     {
                    //     for(let i=1; i<yourNumberSequence.length; i++)
                    //     {
                    //          if(yourNumberSequence[i]-1 !== yourNumberSequence[i-1])
                    //          {
                    //              isItPossible=false;
                    //          }
                    //     }
                    //     }
                    //     return isItPossible;
                    // }




//////
//////
//////4.Create a method that takes an array of positive and negative numbers. Return an array where the first element is the count of the positive numbers and the second element is the sum of negative numbers. 
//////Use case: [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21





                  let arrayToCount = [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21];

                  ///easier to do the two functions by creating two new arrays then joining them after

                  let negativeNumberArray=arrayToCount.filter(i=> i <0);
                  let positiveNumberArray=arrayToCount.filter(i=> i>-1);

                  /// now that we have two arrays, we need to add the negative numbers together.

                  let negativeNumberSum=negativeNumberArray.reduce((accumulator, i)=> accumulator + i, 0);
                  let positiveNumberCount= positiveNumberArray.length;

                  //console.log(negativeNumberSum);
                  //console.log(positiveNumberCount);


                  ///the next step is to join these together in a single array

                  let posCountNegSum=[positiveNumberCount,negativeNumberSum];
                  console.log(posCountNegSum);




//////
/////
//////5.Create a method that accepts a string of space separated numbers and returns the highest and lowest number as a string
//////a.Use case: “3 9 0 1 4 8 10 2”  “0 10”




                   let stringOfSpaceSeparatedNumbers= "3 9 0 1 4 8 10 2"
                   // first I need to turn the strings into numbers in an array and sort them
                   //keep in mind that in the .split(" ") function, whatever is designated inside of the " " marks is the split, aka could be a space a number a comma ect. it will split when it sees it.
                   // the opposite is true for .join(" ") what is between the commas will separate each part of an array that you join to a string.
                   let stringNumberArray= stringOfSpaceSeparatedNumbers.split(" ").map(Number);
                   console.log(stringNumberArray);



                  // Next I need to sort the numbers
                  // if you use the .sort() function without the comparitors it will sort alphabetically aka [1 10 2 22 3]
                  // the comparitors are (a,b) and the a-b is the direction of comparison, aka ascending order
                  // if b-a is used the order will be decending

                    stringNumberArray.sort((a,b)=> a-b);
                    console.log(stringNumberArray);


                    // Now I can pull the first and last numbers out of the sorted array to give the arrays range. and return it as a string using .join() method

                    let arrayFirstAndLast= [];
                    arrayFirstAndLast.push(stringNumberArray[0]);
                    arrayFirstAndLast.push(stringNumberArray.pop())
                    console.log(arrayFirstAndLast);
                    // here you have to convert the arrayfirstand last into a new variable.....i dont know why
                    let arrayFirstAndLastString= arrayFirstAndLast.join(" ");
                    console.log(arrayFirstAndLastString);
                    
                
                    

                   

                   