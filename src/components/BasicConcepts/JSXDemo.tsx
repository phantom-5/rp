import Card from "../../shared/Card"

const JSXDemo = () => {
    const JSXinVariable = <div className="lead">JSX assigned to Variable</div>
    const JSXinFunction = (name:string) => {
        return (
            <div className="lead">JSX returned from a Function: {name}</div>
        )
    }
    const JSXinFunctionLogic = (val: number) => {
        if(val%2===0){
            return <h2>Even</h2>
        }else{
            return <h2>Odd</h2>
        }
    }

    return (
        <div className="demo-container">
            <Card title='JSX' subtext='JavaScript XML' description='It is used to write React Elements. Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. React separates concerns with loosely coupled units called “components” that contain both markup and logic. But we can also write React code without JSX, however it will make it messy. It also helps React show useful warning and error in our markup. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions. By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks. Babel compiles JSX down to React.createElement() calls. More on this at : https://reactjs.org/docs/introducing-jsx.html'/>
            <div className="demo-box">
                {JSXinVariable}
                {JSXinFunction('Ricky')}
                {JSXinFunctionLogic(5)}
                {JSXinFunctionLogic(10)}
                <code>Thus, we can implement various logics with JSX including Recursion, Iteration, etc.</code>
            </div>
            <div className="demo-box">
                <code>Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code.</code><br/>
                <code>If you pass no value for a prop, it defaults to true. In general, we don’t recommend not passing a value for a prop</code><br/>
                <code>false, null, undefined, and true are valid children. They simply don’t render. These JSX expressions will all render to the same thing:</code><br/>
                <code>Conversely, if you want a value like false, true, null, or undefined to appear in the output, you have to convert it to a string first.</code>
            </div>
        </div>
    )
}

export default JSXDemo