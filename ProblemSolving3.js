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

                    let wordToCheck= prompt("please enter a word to check if it is a palindrome!");
                    let trimmedWordToCheck = wordToCheck.trim();
                    let wordReversed = reverseThisWord(trimmedWordToCheck);
                    let isPalindrome = checkIfPalindrome(trimmedWordToCheck, wordReversed);


                    ////
                    //// adding function to reverse word
                    
                function reverseThisWord(wordToBeReversed)
                 {   
                     let wordNowReversed ="";
                    for (let i = wordToBeReversed.length-1; i>=0; i--)
                    {
                       wordNowReversed += wordToBeReversed[i];
                    }
                    return wordNowReversed;
                }
                    console.log(wordReversed);
                    console.log(isPalindrome);


                    ////
                    //// adding bool function to cross reference the word to the reversed word and return true or false for palindrome.


                    function checkIfPalindrome(wordToBeChecked, reversedWordToCheck)
                    
                    {
                        let palindrome;
                      for (let i=0; i<wordToBeChecked.length; i++)
                        {
                            
                             
                                 if (reversedWordToCheck[i] === wordToBeChecked[i])
                                  {
                                      palindrome =true
                                      
                                  }
                                  else
                                  {
                                      palindrome = false
                                      break;
                                  }
                             
                        }
                        return palindrome
                    }
