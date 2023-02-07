// Problem - 01
// About Function : The mindGame function take input as positive number and return a positive number with  a simple operation. (((num*3)+10)/2)-5. 

function mindGame(number){

    if(typeof number == 'string')
    {
        console.log("Please Provide Number As Input");
    }
    let total = (((number*3) + 10)/2) - 5;

    return total;
}

let returnValue = mindGame(5);
console.log(returnValue);


// Problem - 02
// About Function : The evenOdd function take input as string and return even or odd base on string frequency.

function evenOdd(string){

    if(typeof string == 'number')
    {
       return "Please Give Me A String";
    }

    const length = string.length;

    if(length%2 == 0)
    {
        return "even";
    }else{
        return "odd";
    }
}

let result = evenOdd('Phero');
console.log(result);


// Problem - 03
// About Function : The isLGSeven function take input as number and calculate if number different are less then seven the return number difference otherwise return  double of the input.



function isLGSeven(number)
{
    if(typeof number == 'string')
    {
       return "Please Give Number As Input";

    }

   const difference = number - 7;

   if(difference < 7)
   {
      return difference;
   }else{
    
    return number*2
   }

}

let output = isLGSeven(6);
console.log(output);

// Problem - 04
// About Function : The findingBadData function take input as array and array values can be positive and negative. Find the negative number count and return the negative number sum.

function findingBadData(numbers)
{
    if(Array.isArray(numbers))
    {
        let count = 0
    for(let i = 0; i<numbers.length; i++)
    {
        if(numbers[i] < 0)
        {
            count+=1;
        }
    }
        return count;
    }
   return "Please give me a array as input";
}

const numbers = [ -4, -9, -5, -33, -55,0 ];

let returnNumber = findingBadData(numbers);
console.log(returnNumber);


// Problem - 05
// About Function : The function gemsToDiamond take 3 parameter gem1,gem2,gem3 and find summation of diamond. if diamond summation getterthen 2000 then return subtraction of 2000 from the totaldiamond.


function gemsToDiamond(gem1,gem2,gem3){

    if(typeof gem1 == 'string'|| typeof gem2 == 'string' || typeof gem3 == 'string')
    {
       return "Please Give Number As Input All Argument";

    }
  
    let totalDiamond = (gem1*21) + (gem2*32) + (gem3*43);

    if(totalDiamond >= 2000)
    {
        let restOfDiamond = totalDiamond - 2000;
        return restOfDiamond;
    }
  return totalDiamond;
}

let returnval= gemsToDiamond(100, 5, 1);

console.log(returnval);