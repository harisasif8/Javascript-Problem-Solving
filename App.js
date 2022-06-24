// Array related Problem solving


// // question 11

// const students = ['Micheal', 'John', 'Tony']
// const studentsScores = [320, 230, 480]
// const totalMarks = 500
// const percentage = students.forEach((name, index) => {
//     const studentScore = studentsScores[index] / totalMarks * 100
//     console.log(`score of ${name} is ${studentsScores[index]}. percentage ${studentScore}%.`);
// })

// question 12

// const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']

// const askUser = () => {
//     const beginningColor = prompt('what color do you want to add to the beginning?')
//     colors.unshift(beginningColor);

//     console.log(colors)
//     const endColor = prompt('what color do you want to add to the end?')
//     colors.unshift(endColor);
//     console.log(colors)

//     const anotherColorAtBeginning = prompt('Add another color at the beginning')
//     colors.unshift(anotherColorAtBeginning);
//     const yetAnotherColorAtBeginning = prompt('Add another color at the beginning')
//     colors.unshift(yetAnotherColorAtBeginning);
//     console.log('updated colors' + '<br>')
//     displayColors()
//     const deleteBeginningColor = prompt('what color do you want to delete at the beginning?')
//     colors.shift(deleteBeginningColor)
//     console.log('updated colors' + '<br>')
//     displayColors()
//     const deleteEndingColor = prompt('what color do you want to delete at the end?')
//     colors.pop(deleteEndingColor)
//     console.log('updated colors' + '<br>')
//     displayColors()
//     const addAnotherColorAtIndex = prompt('Add another color at the desired index')
//     const addColorAtDesiredIndex = prompt('provide index no')
//     colors.splice(addColorAtDesiredIndex, 0, addAnotherColorAtIndex)
//     console.log('updated colors' + '<br>')
//     displayColors()
//     const deleteColorAtDesiredIndex = prompt('provide index no to delete another color at the desired index')
//     const deleteAnotherColorAtIndex = prompt('How many colors do you want to delete?')
//     colors.splice(deleteColorAtDesiredIndex, deleteAnotherColorAtIndex)
//     console.log('updated colors' + '<br>')
//     displayColors()

// }
// askUser()

// question 13

// const studentScores = [320, 230, 480, 120]
// const sortedScore = studentScores.sort()
// console.log(sortedScore);

// question 14

// const fruits = ['strawberry', 'apple', 'orange', 'banana'];
// const sortedFruits = fruits.sort();
// console.log(sortedFruits);

// question 15

// const cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// const SelectedCities = cities.slice(1 - 4)
// console.log(cities);
// console.log(SelectedCities);

// question 16

// const string = ['This', 'is', 'my', 'cat']
// const newString = string.join(" ")
// console.log(string);
// console.log(newString);


// question 17

// const devices = [];
// devices.push('keyboard')
// devices.push('mouse')
// devices.push('printer')
// devices.push('monitor')
// console.log(devices);

// console.log(devices[0]);



// question 18

// const devices = [];
// devices.unshift('keyboard')
// devices.unshift('mouse')
// devices.unshift('printer')
// devices.unshift('monitor')
// console.log(devices);
// console.log(devices[0]);


// question 19
// const companyList = ['Apple', 'Samsung', 'Motorola', 'Nokia']
// const company = document.getElementById('company')

// for (let i = 0; i < companyList.length; i++) {
//     const options = document.createElement('option')
//     options.innerHTML = companyList[i]
//     company.appendChild(options)
// }

// question 20

// const array = [[], []]
// console.log(array);

// question 21

// const array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
// console.table(array);


// Conditions Related problems

// question 1

// const userInput = prompt('Enter character to identify its type.')

// const characterCode = userInput.charCodeAt(0)

// console.log(characterCode);

// if (characterCode >= 65 && characterCode <= 90) {
//     console.log('Uppercase');
// }
// else if (characterCode >= 97 && characterCode <= 122) {
//     console.log('lowercase');
// }

// else {
//     console.log('number');
// }

// question 2

// const firstInteger = prompt('Enter first integer:')
// const secondInteger = prompt('Enter second integer:')

// if (firstInteger > secondInteger) {
//     console.log(firstInteger);
// }

// else if (secondInteger > firstInteger) {
//     console.log(secondInteger);
// }

// else if (firstInteger === secondInteger) {
//     console.log('Both integers are equal');
// }

// else {
//     console.log('invalid number');

// }

// question 3

// const userInput = prompt('Enter number to identify its type.')

// if (userInput > 0) {
//     console.log('number is positive.');
// }

// else if (userInput < 0) {
//     console.log('number is negative.');
// }

// else if (userInput == 0) {
//     console.log('number is zero.');
// }

// else {
//     console.log('Enter a valid number.');
// }

// question 4

// const vowel = ['a', 'e', 'i', 'o', 'u']
// const userInput = prompt('Enter String to check whether its vowel or not:').toLowerCase()

// const findCharacter = vowel.find((char) => char === userInput)

// if (findCharacter) {
//     console.log(true);
// }

// else {
//     console.log(false);
// }

// question 5

// const correctPassword = 'test123'
// const userPassword = prompt('Enter your password:')


// if (userPassword.length <= 0) {
//     alert('Please enter your password')
// }

// else if (userPassword === correctPassword) {
//     console.log('Correct! The password you entered matches the original password.');

// }

// else {
//     console.log('Incorrect password!');
// }

// question 6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     const greeting = "Good day";
//     console.log(greeting);
// }
// else {
//     const greeting = "Good evening";
//     console.log(greeting);
// }

// question 7

// const time = prompt('Enter time. (24 hours format. (i.e: 7pm = 1900))')

// if (time >= 0000 && time < 1200) {
//     alert('Good Morning!')
// }

// else if (time >= 1200 && time < 1700) {
//     alert('Good Afternoon!')
// }

// else if (time >= 1700 && time < 2100) {
//     alert('Good Evening!')
// }

// else if (time >= 2100 && time <= 2359) {
//     alert('Good Night!')
// }

// else {
//     alert('Enter valid time.')
// }



// FUNCTIONS | SWITCH | WHILE..DO - WHILE




// question 1

// function power(a, b) {
//     result = 1;

//     for (let i = 0; i < b; i++) {
//         result = result * a
//     }
//     console.log(result);
// }
// power(2, 1)



// question 2


// const year = prompt('Enter year:')

// const leapYear = () => {
//     if (year % 4 === 0) {
//         console.log('Leap year');
//     }
//     else {
//         console.log('Not a leap year');
//     }
// }

// leapYear()


// question 3


// const areaOfTriangle = (a, b, c) => {
//     const S = (a + b + c) / 2;
//     console.log(S);
//     const area = (S - a) * (S - b) * (S - c)
//     console.log(area);
// }
// areaOfTriangle(1, 2, 3)

// question 4

// const firstSubject = parseInt(prompt('Enter marks of first subject'))
// const secondSubject = parseInt(prompt('Enter marks of second subject'))
// const thirdSubject = parseInt(prompt('Enter marks of third subject'))

// const total = (firstSubject + secondSubject + thirdSubject);

// const average = () => {
//     const avg = total / 3;
//     console.log('average of student is: ' + avg);

// }

// const percentage = () => {
//     const totalPercentage = (total / 300) * 100
//     console.log('percentage of student is: ' + totalPercentage);
// }


// const mainFunction = () => {
//     average()
//     percentage()
// }
// mainFunction();



// question 5

// const str = 'hello'
// const userInput = prompt('Enter character to identify its index:')
// const charIndex = str.indexOf(userInput)
// console.log(charIndex);




// question 6


// const vowels = ['a', 'e', 'i', 'o', 'u']
// const userInput = prompt('Enter sentence to delete vowels within it.')
// const splittedCharacters = userInput.split('')

// const deleteVowel = (str) => {

//     str.forEach(() => {
//         const findVowel = str.find((inputStr) => vowels.find((vowel) => vowel === inputStr))
//         console.log(findVowel);
//         const vowelIndex = str.indexOf(findVowel)
//         if (findVowel) {
//             str.splice(vowelIndex, 1)
//         }
//         console.log(str);
//     })
//     const sentenceWithoutVowels = str.join("")
//     console.log(`Your sentence without vowels is: ${sentenceWithoutVowels}`);
// }

// deleteVowel(splittedCharacters)


// question 7



// const userString = prompt('Enter sentence to find out the number of occurrences of any two vowels in succession in a sentence.')


// const vowels = ['a', 'e', 'i', 'o', 'u']
// const splittedCharacters = userString.split('')
// console.log(splittedCharacters);

// let count = 0;

// const repeatedVowels = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         const firstOccurrence = vowels.find((vowel) => vowel === str[i])
//         const secondOccurrence = vowels.find((vowel) => vowel === str[i + 1])

//         if (firstOccurrence && secondOccurrence) {
//             count++;
//         }

//     }
//     console.log(`Such Occurances are ${count} times.`);
// }
// repeatedVowels(splittedCharacters)



// question 8


// const cityDistance = prompt('Enter distance (in Km) between two cities')

// const meters = () => {
//     const distanceInMeters = cityDistance * 1000;
//     console.log(`Distance in meters is: ${distanceInMeters}m`);
// }

// const feet = () => {
//     const distanceInFeet = cityDistance * 3280.84;
//     console.log(`Distance in feet is: ${distanceInFeet}ft`);
// }

// const inches = () => {
//     const distanceInInches = cityDistance * 39370.1;
//     console.log(`Distance in inches is: ${distanceInInches}in`);
// }

// const centimeters = () => {
//     const distanceInCentimeters = cityDistance * 100000;
//     console.log(`Distance in centimeters is: ${distanceInCentimeters}cm`);
// }

// const main = () => {

//     switch (true) {

//         case (cityDistance === '' || isNaN(cityDistance)):
//             alert('Enter valid number')
//             break;
//         default:
//             meters()
//             feet()
//             inches()
//             centimeters()
//     }
// }

// main();




// question 9



// const employeeHours = prompt('Enter your worked hours.')

// switch (true) {
//     case (employeeHours > 40):
//         const extraHours = employeeHours - 40;
//         const overtimePay = (extraHours * 12).toFixed(2);
//         console.log(`Your overtime pay is Rs. ${overtimePay}.`);
//         break;

//     default:
//         console.log("You didn't work any extra hours");

// }


// question 10

// let amount = prompt('Enter amount (in hundreds) to be withdrawn')

// let hundredNotes = 0;
// let fiftyNotes = 0;
// let tenNotes = 0;

// const firstPriority = 100;
// const secondPriority = 50;
// const thirdPriority = 10;


// while (amount >= thirdPriority) {
//     switch (true) {
//         case (amount >= firstPriority):
//             amount = amount - firstPriority;
//             hundredNotes++
//             break;

//         case (amount < firstPriority && amount >= secondPriority):
//             amount = amount - secondPriority;
//             fiftyNotes++
//             break;

//         case (amount < secondPriority):
//             amount = amount - thirdPriority;
//             tenNotes++
//             break;
//     }
// }

// console.log(`You will have ${hundredNotes} hundred notes ${fiftyNotes} fifty notes ${tenNotes} ten notes.`);



// Functions related Problem solving

// question 1


// const date = new Date
// console.log(date);


// question 2


// const firstName = prompt('Enter first name')
// const lastName = prompt('Enter last name')

// const displayName = () => {
//     console.log(`${firstName} ${lastName}`);
// }
// displayName()


// question 3


// const firstNumber = parseInt(prompt('Enter first number'))
// const secondNumber = parseInt(prompt('Enter second number'))

// const add = () => {
//     sum = firstNumber + secondNumber;
//     console.log(sum);
// }
// add()


// question 4


// const calculator = (firstValue, secondValue, operator) => {
//     if (operator === '+') {
//         sum = firstValue + secondValue;
//         console.log(sum);
//     }

//     else if (operator === '-') {
//         subtract = firstValue - secondValue;
//         console.log(subtract);
//     }

//     else if (operator === '*') {
//         multiple = firstValue * secondValue;
//         console.log(multiple);
//     }

//     else if (operator === '/') {
//         divide = firstValue / secondValue;
//         console.log(divide);
//     }
// }
// calculator(1, 2, '*')



// question 5


// const square = (num) => {
//     num = num * num;
//     console.log(num);
// }

// square(120)



// question 6


// const factorial = (num) => {

//     let fact = 1;

//     for (let i = num; i > 0; i--) {
//         fact = fact * i;
//     }

//     console.log(fact);


// }
// factorial(6)


// question 7

// const start = prompt('enter number to start counting')
// const end = prompt('enter number to end counting')

// const counting = () => {
//     for (let i = start; i <= end; i++) {
//         // console.log(i);
//         document.write(i + '<br>')
//     }
// }
// counting()



// question 8

// const base = parseInt(prompt('enter base to compute hypotenuse'))
// const perpendicular = parseInt(prompt('enter perpendicular to compute hypotenuse'))


// const calculateHypotenuse = () => {

//     const calculateSquare = (num) => {
//         return num * num;
//     }

//     const baseSquare = calculateSquare(base)
//     const perpSquare = calculateSquare(perpendicular)



//     const hypotenuse = baseSquare + perpSquare;
//     console.log(`Hypotenuse² : ${hypotenuse}`);

// }

// calculateHypotenuse()



// question 9


// const areaOfRectangle = (width, height) => {

//     const A = width * height
//     console.log(A);
// }
// areaOfRectangle(2, 3)



// question 10



// const str = prompt('Enter string to check if its palindrome.')

// let newStr = '';

// const palindrome = () => {

//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i]
//     }

//     if (str === newStr) {
//         console.log('The string is palindrome');
//     }

//     else {
//         console.log('Not palindrome');
//     }
// }

// palindrome()



// question 11


// let newStr = []

// const upperCaseFirstLetter = (str) => {

//     const splittedWords = str.split(' ')
//     console.log(splittedWords);

//     splittedWords.forEach((word) => {

//         const firstLetter = word[0]
//         const firstCapitalLetter = firstLetter.toUpperCase()
//         const splittedCharacters = word.split('')
//         splittedCharacters.splice(0, 1, firstCapitalLetter)
//         const joinCharacter = splittedCharacters.join('')
//         newStr.push(joinCharacter)

//     })

//     const finalOutput = newStr.join(' ')
//     console.log(finalOutput);

// }


// upperCaseFirstLetter('the quick brown fox')



// question 12


// const longestString = (str) => {

//     const splittedString = str.split(' ')
//     let longestWord = '';
//     console.log(splittedString);

//     for (let i = 0; i < splittedString.length; i++) {

//         if (splittedString[i].length > longestWord.length) {
//             longestWord = splittedString[i];
//         }

//     }

//     console.log(longestWord);

// }

// longestString('Web Development Tutorial')




// question 13


// let count = 0


// const searchLetter = (str, letter) => {

//     const splittedCharacters = str.split('')
//     for (let i = 0; i < splittedCharacters.length; i++) {
//         if (splittedCharacters[i] === letter) {
//             count++
//         }
//     }

//     console.log(`Such occurances are ${count} times.`);
// }

// searchLetter('aaaaaaaa', 'a')



// question 14



// const calcCircumference = (radius) => {

//     const circumference = 2 * 3.142 * radius;
//     console.log(`circumference of circle ===> ${circumference}`);

// }





// const calcArea = (radius) => {
//     const area = 3.142 * (radius * radius);
//     console.log(`area of circle ===> ${area}`);
// }

// calcCircumference(2)
// calcArea(3)