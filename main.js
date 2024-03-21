/**
 * Time to test our Knowledge!
 * This test is designed to challenge your understanding of various JavaScript concepts,
 *  including the Document Object Model (DOM), loops, arrays, objects, and more. It's a
 * fantastic opportunity to showcase your skills and see how far you've come in your
 * JavaScript learning adventure. Remember, this test isn't just about getting the right
 * answers—it's about applying what you've learned and thinking critically about each
 * question.
 *
 * Here's how to navigate through the test:
 *
 * Multiple Choice Questions:
 * For questions with multiple-choice answers, please place an asterisk (*) before the
 * letter of the option you believe is correct. For example, if you think the answer to
 * question 1 is A, you should format your answer like this:
 *
 *     *A) Document Object Model
 *
 * True or False:
 * For true or false questions, follow the same format by placing an asterisk (*) before
 * your chosen answer. Here's how you should do it:
 *
 *     *True
 *
 * Fill in the Blanks:
 * For fill-in-the-blank questions, please write your answer within a JavaScript comment
 * For instance:
 *
 *     // className
 *
 * Short Answer:
 * Similar to the fill-in-the-blank section, please provide your answers within
 * JavaScript comments. For example:
 *
 *     // function getObjectName(object) { return object.name; }
 *
 * Function Creation Problems:
 * For the Function Creation problems, you can write your JavaScript functions directly
 * in the provided file. Make sure your functions are named correctly according to the
 * problem statement and test them to ensure they work as expected.
 *
 * Remember: There's no rush, take your time to think through the problems, and apply
 * your knowledge creatively. Good luck, and let's have some fun with JavaScript!
 */

/**
 * Multiple Choice Questions

1.) What does DOM stand for?

    *A) Document Object Model
    B) Data Object Markup
    C) Document Oriented Model
    D) Data Object Model

2.) How can you access an HTML element by its ID using JavaScript?

    *A) document.getElementByName('id')
    B) document.getElementById('id')
    C) document.querySelector('#id')
    D) Both B and C

3.) Which method is used to add a class to an HTML element?

    *A) element.classList.add('className')
    B) element.className.add('className')
    C) element.addClass('className')
    D) element.styles.addClass('className')

4.) What is the correct syntax to change the text color of an element to red?

    A) element.style.color: 'red';
    B) element.style.textColor = 'red';
    C) element.styles.color = 'red';
   * D) element.style.color = 'red';

5.) The spread operator is denoted by which symbol?

    A) #
    *B) ...
    C) &
    D) *
*/

/**
 * True or False

1.) The .innerHTML property can be used to add HTML content to an element.

    *True
    False

2.) Loops in JavaScript can only iterate forward through an array.

    True
    *False

3.) The document.querySelector() method can select elements based on both class and id selectors.

    *True
    False

4.) In JavaScript, the spread operator is used to mutate the original array.

    True
    *False

5.) The document.querySelectorAll() method returns a NodeList representing a list of the document's elements that match the specified group of selectors.

    *True
    False
 
*/

/**
 * Fill in the Blanks

1.) To remove a class from an element, you should use the ____remove()______ method.

2.) When creating a loop, the syntax includes three main parts: initialization, condition, and ___update expression________.

3.) To select all elements with a specific class, the method document._getElementsByClassName_________('className') is used.

4.) Creating a copy of an array without mutating the original one can be done using the __spread______ operator.

5.) A function that is a property of an object is called a __method______.
 
*/

/**
 * Short Answer

1.) Explain the difference between .className and .classList when working with elements in the DOM.

The main difference between className and classList lies in how they handle adding/removing classes. className directly assigns or removes a single string value

The .className property is a string that represents the class attribute of an element.
When using .className, you are essentially setting or getting the entire list of classes as a single string.
If you want to add or remove a class using .className, you need to manipulate the entire string, which can be cumbersome and error-prone, especially when dealing with multiple classes.

The .classList property returns a collection of the class attributes of an element as a DOMTokenList object.
The classList object provides several methods like add(), remove(), toggle(), and contains() that make it easier to manipulate individual classes without affecting others.
With .classList, you can directly add or remove specific classes without having to worry about parsing and modifying strings.

2.) Describe how to use a for loop to iterate over an array in JavaScript.
Initialize the Loop: Start by declaring a for loop and initializing a counter variable to 0. This variable will be used to access elements in the array.

Set the Condition: Define the condition for the loop to run. Typically, this condition checks if the counter variable is less than the length of the array.

Access Array Elements: Within the loop, access elements of the array using the counter variable as the index.

Perform Operations: Perform any operations needed on each element of the array inside the loop.

Increment Counter: Increment the counter variable at the end of each iteration to move to the next element in the array.

3.) What is the purpose of using the spread operator in JavaScript arrays?

Merging Arrays: The spread operator allows for merging multiple arrays into a single array without creating nested or multi-dimensional arrays.

Cloning Arrays: It enables the creation of a shallow copy of an array, ensuring that changes made to the copied array do not affect the original array.

Converting Iterables to Arrays: Spread can convert various iterables like strings, sets, node lists, and arguments objects into arrays easily and efficiently.

4.) How can you access a property of an object using a property name that contains a space?

Bracket notation

5.) Write a simple function in JavaScript that takes an object as an argument and returns the value of the "name" property of that object.

function getNamePropertyValue(obj) {
    return obj.name;
}

*/

// Function Creation -- Create the functions BELOW the Comment.
/**
 * 1.) Find Object by ID
    -- Create a function named findObjectById that takes an array of objects and an ID as arguments and returns the object with the matching ID.

    Each object in the array is structured as follows:
     const myObject = {
        id: 1,
        name: "John",
        age: 27,
        city: "New York"
     }
*/



function findObjectById(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id === id){
            return arr[i];
        }
    }
}

/*
  * 2.) Transform to Array of Names
    --Design a function extractNames that receives an array of objects, each object having a name property, and returns an array of names.
    
    Each object in the array is structured as follows:
     const myObject = {
        id: 1,
        name: "John",
        age: 27,
        city: "New York"
     }
 */

     function extractNames(arr) {
        let names = [];
        for (let i = 0; i < arr.length; i++) {
          names.push(arr[i].name);
        }
        return names;
      }

     