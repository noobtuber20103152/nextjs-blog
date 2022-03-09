const data = [
    {
        "Installation":
            [
                { "Create react app with npx": "npx create-react-app app_name" },
                { "Create react app with yarn": "yarn create react-app app_name" },
                { "Run app on browser with npm": "npm run start" },
                { "Run app on browser with yarn": "yarn run dev" },
                { "For view our app on browser": "http://localhost:3000" },
            ],
    },
       {
           "Introduction about JSX":[
               {"What is JSX?":"const element = <h1>Hello World!</h1> \n//About syntex is neither HTML or neither JavaScript it is call jsx(JavaScript XML)"},
           ]
       },
    {
        "React components": [
            {"React component are divide the whole website code into parts which is easy to use and debugging":"import React from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends React.Component {\n    render(){\n    return <div classname='message-box'> Hello {this.props.name}\n    </div>\n    }\n}"},
            {"Imports multiple components in our react app":"import React, {Component} from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends Component{\n   ...\n}"},
            {"React fragment use to return more than one tags or components":"import React, {Component} from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends Component{\n   return (\n   <>\n   <h1>Hello<h1>\n   <p>This is CodeWithMe blog</p>\n  </>\n )\n}"}
        ]
    },
    {
        "React components styles":[
            {"CSS style of tags using jsx":"import React from 'react'\nimport ReactDOM from 'react-dom'\n\nclass Hello extends React.Component {\n render(){\n     return <h1 style={{color:'red',font-size:'15px'}} > Hey it's me CodeWithMe</h1>\n}"}
        ]
    },
    {
        "Props and states in react":[
            {"Props - It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.":"function Hello(props){\n   return <h1>Hello, {props.name}</h1>\n}\nconst element = <Welcome name='Shruti' />;\nReactDOM.render(\n  element,document.getElementById('root')\n  )\n}"},

            {"State - The state object is where you store property values that belongs to the component":"function time(){\n   const element = (\n     <div>\n      <h1>Hello, World</h1>\n      <h2>It is {new Date().toLocaleTimeString()} </h2>\n    </div>\n);\nReactDOM.render(\n   element,\n   document.getElementById('root'  )\n  );\n}\nsetInterval(tick, 1000);"}
        ]
    },
    {
        "Handling Events in react":[
            {"Handling events in React elements is very similar to handling events on DOM elements in pure JavaScript":"import React form 'reat'\nlet count = 0;\nfunction counting(){\n   console.log(count++);\n}\nexport default APP(){\n  return (\n   <button onClick={counting)>Click</button>\n  )\n};\n//In this program every click on button count increment by 1 and print incremented value of count in console"}
        ]
    },
    {
        "Conditional rendering":[
           { "In React you can render components and elements based on condition.":"let login = ()=>{\n  return <h1>You logged in successfully</h1>\n}\nlet signup = ()=>{\n  return <h1>Please sign up</h1>\n}\nexport default APP(){\n   let condition = true;\n   if(condition){\n   return login\n  }\n   else{\n    return signup\n  }\n"}
        ]
    }
];
export default data;