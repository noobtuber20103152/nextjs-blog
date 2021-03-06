const data = [
    {
        "1. Installation":
            [
                { "Create react app with npx": "npx create-react-app app_name" },
                { "Create react app with yarn": "yarn create react-app app_name" },
                { "Run app on browser with npm": "npm run start" },
                { "Run app on browser with yarn": "yarn run dev" },
                { "For view our app on browser": "http://localhost:3000" },
            ],
    },
    {
        "2. Introduction about JSX": [
            { "What is JSX?": "const element = <h1>Hello World!</h1> \n//Above syntex is neither HTML or neither JavaScript it is call jsx(JavaScript XML)" },
        ]
    },
    {
        "3. React components": [
            { "React component are divide the whole website code into parts which is easy to use and debugging": "import React from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends React.Component {\n    render(){\n    return <div classname='message-box'> Hello {this.props.name}\n    </div>\n    }\n}" },
            { "Imports multiple components in our react app": "import React, {Component} from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends Component{\n   ...\n}" },
            { "React fragment use to return more than one tags or components": "import React, {Component} from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends Component{\n   return (\n   <>\n   <h1>Hello<h1>\n   <p>This is CodeWithMe blog</p>\n  </>\n )\n}" }
        ]
    },
    {
        "4. React components styles": [
            { "CSS style of tags using jsx": "import React from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends React.Component {\n render(){\n     return <h1 style={{color:'red',font-size:'15px'}} > Hey it's me CodeWithMe</h1>\n}" }
        ]
    },
    {
        "5. Props and states in react": [
            { "Props - It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.": "function Hello(props){\n   return <h1>Hello, {props.name}</h1>\n}\nconst element = <Welcome name='Shruti' />;\nReactDOM.render(\n  element,\n  document.getElementById( 'root' )\n  )\n}" },

            { "State - The state object is where you store property values that belongs to the component": "function time(){\n   const element = (\n     <div>\n      <h1>Hello, World</h1>\n      <h2>It is {new Date().toLocaleTimeString()} </h2>\n    </div>\n);\nReactDOM.render(\n   element,\n   document.getElementById('root'  )\n  );\n}\nsetInterval(tick, 1000);" }
        ]
    },
    {
        "6. Handling Events in react": [
            { "Handling events in React elements is very similar to handling events on DOM elements in pure JavaScript": "import React form 'reat'\nlet count = 0;\nfunction counting(){\n   console.log(count++);\n}\nexport default APP(){\n  return (\n   <button onClick={counting)>Click</button>\n  )\n};\n//In this program every click on button count increment by 1 and print incremented value of count in console" }
        ]
    },
    {
        "7. Conditional rendering": [
            { "In React you can render components and elements based on condition.": "let login = ()=>{\n  return <h1>You logged in successfully</h1>\n}\nlet signup = ()=>{\n  return <h1>Please sign up</h1>\n}\nexport default APP(){\n   let condition = true;\n   if(condition){\n    return login\n  }\n   else{\n    return signup\n  }\n" }
        ]
    },
    {
        "8. Iterate items in list": [
            { "Iterate items in any lise we are use map function in react": "const data = [1,2,3,4,5]\ndata.map((element)=>{\n   console.log(element)\n})" },
            { "Rendering components": "const data = [1,2,3,4,5,6,7]\nconst items = data.map((element)=>{\n  <h1>Heading {element}</h1>\n})\nReactDOM.render(\n    <ul>{items}</ul>\n    document.getElementById('root')\n);" }
        ]
    },

    {
        "9. Hooks in React": [
            { "useState hook - useState hook use to update the state of variable dynamically": "import React, {useState} from 'react'\n\nfunction App(){\n  // Declare a new state variable, which we'll call 'count'\n   const [count, setcount] = useState(0)\n   return (\n      <div>\n       <p>You clicked {count} times</p>\n      <button onClick={()=>setcount(count+1)}> Click me </button>\n     </div>\n   );\n}\n//On every click on button count increment by 1 and update. " },
            { "useEffect hook - useEffect hook lets you perform side effects in function based components": "import React, {useState, useEffect} form 'react'\nfunction App(){\n  cont [count, setcount] = useState(0);\n  useEffect(()=>{\n   document.title=`you clicked ${count} times1;\n },[]);\n\n  return (\n    <div>     \n     <p> You clicked {count} times </p>\n     <button onClick={()=>setcount(count+1)}></button>\n   </div>\n  );\n}" }
        ]
    }
];
export default data;