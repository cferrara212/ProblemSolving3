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