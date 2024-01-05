// A closure in JavaScript is a function bundled together with references to its lexical environment, allowing the function to access variables from its outer scope even after the outer function has finished execution.


let counter = 0;
function myFunction() {
    return counter += 1;
}

// console.log(myFunction()) // output 1
// console.log(myFunction()) // output 2
// console.log(myFunction()) // output 3

// There is a problem with  above code : Any code on the page can change the counter, without calling myFunction().

// counter = 10

// console.log(counter) // output 10

// to prevent other code from changing it you can use local variable

// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
}

// Call add() 3 times
// add();
// add();
// add();
//The counter should now be 3. But it is 0



// Global variables live until the page is discarded, like when you navigate to another page or close the window.


// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

// so we need a We need a closure.
// function createCounter() {
//     let counter = 0;

//     function add() {
//       counter++;
//       console.log(counter);
//     }

//     return add;
//   }

// Create an instance of the counter
// const myCounter = createCounter();

// Use the counter
// myCounter(); // Outputs: 1
// myCounter(); // Outputs: 2
//   In this example, createCounter is a function that returns the add function. The counter variable is declared using let inside createCounter, making it local to that function. When you call createCounter(), it returns the add function, and you can use the returned function (myCounter in this case) to increment and log the counter. The counter variable is not directly accessible from outside the createCounter function, providing a level of encapsulation.

function createCounter() {
    let counter = 0;
    return function add() {
        return counter+=1
    }
}
// Create an instance of the counter
// console.log(createCounter())
//ƒ add() {
//     return counter+=1
// }
const myCounter2 = createCounter();

// Use the counter
console.log(myCounter2()); // Outputs: 1
console.log(myCounter2());// Outputs: 2




