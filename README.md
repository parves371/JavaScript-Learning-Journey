# JavaScript Learning Journey
 
## Question 1: Difference between "undefined" and "null" in JavaScript

In JavaScript, `undefined` is a primitive value automatically assigned to variables that have been declared but not initialized, while `null` is an assignment value representing the intentional absence of any object value.

## Question 2: Difference between '==' and '===' operators in JavaScript

The '==' operator checks for equality after type coercion, whereas '===' checks for equality of both values and types without type coercion.

```javascript
const a = 5;
const b = '5';

console.log(a == b); // true (due to type coercion)
console.log(a === b); // false (strict equality)

