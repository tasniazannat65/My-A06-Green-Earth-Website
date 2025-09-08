## 1. What is the difference between var, let, and const?

### Answer:
### **Var:-**

#### Var is a type of JavaScript keyword that is used to declare variables. Var is also called function scope or global scope. This means that variables declared with var can be accessed from anywhere in the function. In addition, variables declared with var can also be hoisted. That is, the variable is hoisted to the top of their scope but it is undefined because it does not contain any value. Moreover, variables declare with var can be redeclared and reassigned without any errors.

***For Example:***


      var age = 23;

      age = 20;

      console.log(age);


### **Let:-**

#### In JavaScript, the let keyword is a feature of ES6 that is used to declare variables. In addition, let is called block scope that is, a variable declared with let can only be accessed within curly braces {}. If the variable is accessed outside the block scope, which means it is not inside a loop or conditional statement, a ReferenceError will occur. Hoisting a variable declared with let technically hoists it, but since it is in the "Temporal Dead Zone" an error will occur if it is used before declaring it. In addition, a variable declared with let cannot be redeclared but can be reassigned. 

***For Example:***

    if(true){

        let message = "I am inside the block scope";
        console.log(message);
    }
    
    console.log(message); // ReferenceError: message is not defined

### **Const:-**

#### The const keyword in JavaScript is a feature of ES6 that allows a variable to be declared and assigned a value but cannot be reassigned after their initial value is set. A variable declared with const will only work inside that block {} and cannot be accessed outside. Moreover, a variable declared with const cannot be redeclared. But if an object or array is declared with const, the data inside them can be modified. A variable declared with const is technically hoisted, but it cannot be used before it is declared due to the "Temporal Dead Zone".

***For Example:***

    if(true){

        const name = "Green Earth";
        console.log(name);

    }
    console.log(name); // ReferenceError: name is not defined

    const number = 13;
    number = 10;
    console.log(number); // TypeError: Assignment to constant variable.


## 2. What is the difference between map(), forEach(), and filter()?

### Answer:

### **map():-**

#### map() is an array method that applies a function to each element and returns a new array.It does not modify the original array. However, where in a for loop we have to push elements separately, map() can do it in one line.

***For Example:***

    const numbers = [3, 2, 4, 5, 7];
    const multiplyNumbers = numbers.map(num => num * 2);
    console.log(multiplyNumbers);

### **forEach():-**

#### forEach() is a type of array method that simply loops but does not return anything. For every array element, a callback function is executed once.

***For Example:***

    const ages = [22, 12, 5, 9];

    ages.forEach(age => {
        console.log(age);
    });

### **filter():-**

#### filter() is an array method in JavaScript. It checks a condition on each element and returns a new array with only those elements for which the condition is true. However, it doesn't modify the original array.

***For Example:***

    const numbers = [2, 3, 4, 6, 7, 11];

    const evenNumbers = numbers.filter(num => num % 2 === 0);

    console.log(evenNumbers);


## 3. What are arrow functions in ES6?

### Answer:

#### Arrow functions are a feature of the ES6 version of JavaScript. They are a short and simple way to declare functions. Arrow functions are cleaner and can do the same task with less code than regular functions. Also, for a one-line function body, curly braces and return do not need to be written separately. But in the case of a multi-line function body, curly braces and return must be written. Arrow functions do not allow the use of this or constructor methods.

#### ***3 ways to write an arrow function:***

#### 1. Where there is no parameter, there should be used an empty parenthesis.

    const name = () => console.log("Alice");

#### 2. If there is only one parameter, it should not be used  parenthesis.

    const num = a => a * a;

#### 3. When there is more than one parameter, parenthesis should be used.

    const add = (a, b) => a + b;


## 4. How does destructuring assignment work in ES6?

### Answer:

#### Destructuring is a feature of JavaScript where the values of an array or object can be easily divided into separate variables. In other words, there is no need to declare the variables individually and everything is done in one line. As a result, the code is concise and clear. The values can be used directly in the parameters of the function. Additionally, values can be extracted quickly from object and array.

***For Example:***

    const [first, , third] = [1, 2, 3];
    console.log(first);
    console.log(third);

    const person = {name: "Rahim", age: 22};
    const {name, age} = person;
    console.log(name);
    console.log(age);


## 5. Explain template literals in ES6. How are they different from string concatenation?

### Answer:

#### Template literals are a modern and concise way to declare strings in JavaScript. They are enclosed by backtick (``) characters instead of double quotes ("") or single quotes (''). In normal strings, we had to use (\n) to write multi-line characters, but template literals allow to use line breaks directly. In addition, variables or expressions can be embedded directly in strings using the (${}) syntax. Through which dynamic values can be set in strings. String concatenation (+) is used to join strings and  variables. This is more complicated. On the other hand, template literals can do this work much easier.


***For Example:***

    const name = 'Rahim';
    const age = 25;
    const message = `My name is ${name} and I am ${age} years old`;
    console.log(message);

