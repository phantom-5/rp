import Card from "../../shared/Card"

const ComponentPropsParent = () => {

    const NameComponent = (props: {name:string}) => {
        return (
            <div className='lead' style={{border:'1px solid grey', borderRadius:'5px', padding:'5px', fontSize:'16px'}}>{props.name} : Example Component From Within Same File</div>
        )
    }

    const showName = (name:string) => {
        return (
            <div className="lead" style={{border:'1px solid grey', borderRadius:'5px', padding:'5px', fontSize:'16px'}}>{name} : Calling a function does not create a component.</div>
        )
    }

    return (
        <div className="demo-container">
            <Card title='Component & Props' subtext='This is React' description='Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. Reacts supports two kinds of Components Functional and Class based. Function and Class components both have some additional features.'/>
            <div className="demo-box">
                <div className="lead">Always start component names with a capital letter.</div>
                <code>React treats components starting with lowercase letters as DOM tags. For example, {'<div />'} represents an HTML div tag, but {'<Welcome />'} represents a component and requires Welcome to be in scope.</code>
            </div>
            <div className="demo-box">
                <div className="lead">Composing Components</div>
                <code>It is nothing but the use of child component(s) inside (composed within) another parent component. These components can be a functional or class component within the same file or can be imported from another file like the Card component used here.</code><br/><hr/>
                <span className="badge bg-dark">Function Component:</span>
                <NameComponent name="Ricky"/>
                <span className="badge bg-dark">Calling Function Instead:</span>
                {showName('Ricky')}
                More on this in dedicated part.
            </div>
            <div className="demo-box">
                <div className="lead">Extracting Components</div>
                <code>Breaking down of a larger component requirement to a composition of smaller components.</code>
                <div className="lead">Props are Read Only</div>
                <code>All React components must act like pure functions with respect to their props. Whether you declare a component as a function or a class, it must never modify its own props. Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.</code>
                <div className="lead">key and ref</div>
                <code>key and ref are not available in props</code>
            </div>
        </div>
    )
}

export default ComponentPropsParent