import { useState } from "react"
import Card from "../../shared/Card"

const Forms = () => {
    const [inputValue,setInputValue] = useState<string>('')
    return (
        <div className="demo-container">
            <Card title="Forms" subtext="Types" description="There are two types of form inputs/elements/components in React. Controlled & Uncontrolled. Controlled is where we manage form input with state and uncontrolled is where we do it using traditional JS approach(refs). We can combine the two by making the React state be the 'single source of truth'. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a 'controlled component'. Input with type 'file' is read-only, it is an uncontrolled component in React"/>
            <div className="demo-box">
                <div className="lead mb-5">Controlled Input Example</div>
                <input type="text" className="form-control" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Enter text here"/>
                <div className="lead text-center mt-5">{inputValue}</div>
            </div>
            <div className="demo-box">
                <div className="lead">Uncontrolled Component</div>
                <code>
                It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.
                </code>
            </div>
        </div>
    )   
}

export default Forms
