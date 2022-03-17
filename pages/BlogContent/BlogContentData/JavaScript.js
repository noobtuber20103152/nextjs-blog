const data = [
    {
        "1. JavaScript basics": [
            { "Adding internal JavaScript to HTML": "<script type='text/javascript'>" },
            { "Connect to external JS file": "<script src='file_name.js'></script>" },
            { "Write function in JS": "function Function_name() {\r\n    \/\/ function body \r\n}" },
            { "Print statement": "console.log('Hello')" },
            { "Access DOM element": "document.getElementById( 'element_id' ).innerHTML = 'Hi👌 guys'" }
        ]
    },
    {
        "Conditional Statements": [
            { "If statement": "if (condition1 ){ \n //Code for if condition1 is true \n }" },
            { "Else If statement": "else if (condition2 ){ \n //Code for else if condition2 is true \n }" },
            { "Else statement": "else { \n //Code for condition1 and condition 2 both are false  \n }" },
            { "else-if leader": "if (condtion1) {\n //if conditon1 is true \n}\nelse if (condition2){\n //if conditon2 is true  \n}\nelse{ \n//if conditon1 and condition2 both are false \n}" }
        ]
    },
    {
        "2. JavaScript loops": [
            { "For loop syntex in JavaScript": "for(initialization; condition, incrementation){\n //code block to be executed\n}" },
            { "Example": "for(let i=0; i<6; i++){\n consoloe.log(i, ' ' ) \n}" },
            { "While loop syntex in JavaScript": "while(condition){\n //code to ecuted \n}" },
            { "Example": "while(true){\n console.log(true)\n}" },
            { "do-while loop syntex in JavaScript": "do {\n //code to executed\n} while(condition)\n" },
            { "Example": "do{\n consoloe.log(true) \n} while(true)" }
        ]
    },
    {
        "3. Strings in JavaScript": [
            { "Initialization of string": "let s= 'it is a string''" },
            { "charAt method": "s.charAt(3) // return char at index of 3" },
            { "Concat strings method": "str1.concat(str2) // Join str2 at the end of str1" },
            { "indexOf method": "s.method('is') // return index of substring 'is' in string s if present otherwise return -1" },
            { "Replace method": "str1.replace(str2)" },
            { "Search method": "str.search('found')" },
            { "Split method": "str.split(' ') // split string by ' ' into an array of consisting of substrings" },
            { "Substring method": "str.substring(0, n) // return a substring from index 0 to n-1" }
        ]
    },
    {
        "4. Arrays in JavaScript": [
            { "Initialization": " let arr = [ 4,5,3]" },
            { "Concat method": "arr.concat(arr2) // add arr2 elements at the end of arr" },
            { "Join method": "arr.join(' ') // convert array element to a space seprated string" },
            { "Pop method": "arr.pop() // Delete last element of array" },
            { "Reverse method": "arr.reverse() // Reverse the array" },
            { "Sort method": "arr.sort() // sort the array element in increasing order" },
            { "toString method": "arr.toString() // Convert array element to a string" }
        ]
    },
    {
        "5. Math operation methods": [
            { "Power method": "Math.pow(x, y) // return x to the power y" },
            { "Log method": "Math.log(2) // return log(2)" },
            { "Exponential method": "Math.exp(4) // return e to the power 4" },
            { "Ceil method": "Math.ceil(7.6) // Rounds a number upward to the nearest interger. In this case answer should be 8 " },
            { "Random method": "Math.random() // return random value between 0 to 1" },
            { "sqrt method": "Math.sqrt(9) // return square root of a number" },
        ]
    },
    {
        "6. JavaScript Dates": [
            { "Initialization": "let date = new Date() // use Date object" },
            { "Date method": "date.getDate() // return date from date object" },
            { "Day method": "date.getDay() // return day form date object" },
            { "Hours method": "date.getHours() // return hour from date object" },
            { "Minutes method": "date.getMinutes() // return minute from date object" },
            { "Seconds method": "date.getSeconds() // return seconds form date object" },
            { "Time method": 'date.getTime() // return time from date object' }
        ]
    },

    {
        "7. Events in JavaScript": [
            { "Click listener": "element.addEventListener('click', ()=>{\n //Code to be executed when an element clicked\n});\n" },
            { "Oncontextmenu listener": "element.addEventListener('oncontextmenu', ()=>{\n //Code to be executed when mouse's right click button fired \n});" },

            { "Double click listener": "element.addEventListener('dbclick', ()=>{\n // Code to be executed when double click\n});" },
            { "Mouse enter listener": "element.addEventListener('mouseenter', ()=>{\n // Code to be executed when an element is entered by the mouse arrow\n});" },
            { "Mouse leave listener": "element.addEventListener('mouseleave', ()=>{\n // Code to be executed when an element is exited by the mouse arrow\n});" },
            { "Mouse move listener": "element.addEventListener('mousemove', ()=>{\n // Code to be executed when mouse is moved inside the element\n});" },
            { "Keydown listener": "element.addEventListener('keydown', ()=>{\n // Code to be executed when a key is pressing on the keyboard\n});" },
            { "Keypress listener": "element.addEventListener('keypress', ()=>{\n // Code to be executed when a key is presess on the keyboard\n});" },
            { "Keyup listener": "element.addEventListener('keyup', ()=>{\n // Code to be executed when user releases a key on keyboard\n});" },
        ]
    },

    {
        "8. Errors in JavaScript": [
            { "Try and Catch": "try{\n   // Code to be try\n    }\ncatch(error){\n   // Code to be handle errors\n    }" }
        ]
    },

    {
        "9. Window Methos": [
            { "Alert Method": "Window.alert('What is your name') or alert('What is your name') // Used to alert something on the screen" },
            { "Blue Method": "Window.blue() or blue() // Used to remove focus from current window" },
            { "SetInterval Method": "setInterval(()=>{\n consoloe.log('Hi 😁') //Executed code at a cetain interval\n}, 1000);" },

            { "SetTimeout Method": "setTimeout(()=>{\n consoloe.log('Hello 😁') //Executed code after a certain interval of time\n}, 1000);" },
            { "Close Method": "window.close() // close the current window" },
            { "Open Method": "Window.open('https://github.com/noobtuber20103152') // Open a new window of provided link" },

            { "Stop Method": "Window.stop() or stop() //Stop the further resource loading" }
        ]
    },

    {
        "10. Query and Get element method": [
            { "querySelector": "document.querySelector('query') // select the 1st match element" },
            { "querySelectorAll": "docuemnt.querySelectorAll('query') // select all the matching element" },
            { "getElementsByTagName": "document.getElemetsByTagName('div') // Select element by tag name" },
            { "getElementsByClassName": "document.getElementsByClassName('.class_name') // Select all the matching class name elements" },
            { "getElementById": "docuement.getElementById('#Id') // select element with matching id" },
            { "Creat an element": "document.createElement('div') // create div tag element" },
            { 'createTextNode': "document.createTextNode('Good bye! 😁 Please give us your feedback')" }
        ]
    }
]
export default data;