import { forwardRef, useRef, useState } from "react"
import Card from "../../../shared/Card"


const FRMain = () => {
    type AppProps = {}
    const btnRef = useRef<HTMLButtonElement>(null)
    const [btnName,setBtnName] = useState('')
    const ChildComponent = forwardRef<HTMLButtonElement,AppProps>((props,ref) => {
        return (
            <div style={{border:'1px solid grey', padding:'4px'}}>
            <div className="lead">Child</div>
            <button className="btn btn-sm btn-dark" ref={ref} value="Ricky">Ricky</button>
            </div>
        )
    })
    return (
        <div className="demo-container">
            <Card title="Forwarding Refs" subtext="" description="Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries. The most common scenarios are described below. Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child. Generally used by component library makers. This technique can also be particularly useful with higher-order components. Uses useRef hook for creating refs."/>
            <div className="demo-box">
                <ChildComponent ref={btnRef}/>
                <button className="btn btn-sm btn-dark mt-2 mb-2" onClick={()=>{setBtnName(btnRef.current?btnRef.current.value:'')}}>Get Button Name from Within Child using Ref</button>
                <div className="lead mb-2 text-center">Button Name: {btnName}</div>
                <code>Since ref is not part of props, the forwardRef function helps get ref in addition to props within a child.</code>
                <br/>
                <code>For purpose of debugging in devTools use a named function as the argument to forwardRef.</code>
            </div>
        </div>
    )
}

export default FRMain