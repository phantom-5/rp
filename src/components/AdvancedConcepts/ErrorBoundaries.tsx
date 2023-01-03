import Card from "../../shared/Card"

const ErrroBoundaries = () => {
    return (
        <div className="demo-container">
            <Card title="Error Boundaries" subtext="Only for Classes" description="In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to emit cryptic errors on next renders. These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could not recover from them. A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them."/>
            <div className="demo-box">
                <code>This change has an important implication. As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. try / catch is great but it only works for imperative code. However, React components are declarative and specify what should be rendered</code>
                <br/>
                <code>Declarative programming is a paradigm describing WHAT the program does, without explicitly specifying its control flow. Imperative programming is a paradigm describing HOW the program should do something by explicitly specifying each instruction (or statement) step by step, which mutate the program's state.</code>
            </div>
        </div>
    )
}

export default ErrroBoundaries