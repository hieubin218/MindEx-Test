

// Question 1: Problem Solving

function findOppositeNumber(n, inputNumber) {
    inputNumber = prompt("Enter Number (from 0 to 9): ");
    

}



// Test:
findOppositeNumber();





// Question 2: Chuoi s1 and s2 xen kẽ với nhau 
function merge2String(s1, s2) {
    s1 = prompt("Enter First String:");
    s2 = prompt("Enter Second String:");


    // Split each letter in words
    let StringA = s1.split('');
    let lengthA = StringA.length;

    let StringB = s2.split('');
    let lengthB = StringB.length;

    // Empty String for future append letters inside here
    let StringsConcaternation = "";


    for (let i = 0; i < lengthA || i < lengthB; i++) {
        if (i < lengthA) {
            StringsConcaternation += StringA[i];


        } if (i < lengthB) {
            StringsConcaternation += StringB[i];
    
        }   
    }
alert(StringsConcaternation);
}


//Test:
merge2String() 


