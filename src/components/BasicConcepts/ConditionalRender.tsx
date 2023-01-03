import { useState } from "react"
import Card from "../../shared/Card"

const ConditionalRender = () => {
    const val = 0
    const [show,setShow] = useState(true)
    return (
        <div className="demo-container">
            <Card title="Conditional Rendering" subtext="Conditions within JSX" description="Condition on elements/components. Condition on variables within elements. Inline if with &&. Inline if else with ? conditional operator. If conditions become too complex, you should rather extract components. Preventing component from rendering using null. Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called."/>
            <div className="demo-box">
                <div className="lead">Unique case of truthy values</div>
                <code>In JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.<br/> When we use && suppose - flag && {'<element/>'} in JSX, if the flag is boolean in case of false it wont render element, but if its falsy then it will return the value but not the element. Example below:</code>
                <div className="lead text-center" style={{fontSize:'32px'}}>{val && <h1>Hello</h1>}</div>
                <code>Using null in conditions to not render anything</code><br/>
                <div className="text-center"><button className="btn btn-sm btn-dark" onClick={()=>{setShow(!show)}}>{show?'Hide':'Show'}</button></div>
                <div className="lead text-center" style={{fontSize:'32px'}}>{show ? <span>Hello</span>:null}</div>
            </div>
        </div>
    )
}

export default ConditionalRender