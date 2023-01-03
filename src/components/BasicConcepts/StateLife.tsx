import { useEffect,useState } from "react"
import Card from "../../shared/Card"

const StateLife = () => {
    const [val,setVal]= useState<boolean>(true)
    useEffect(()=>{
        console.log('StateLife','useEffect[]',val)
        return () => {
            console.log('StateLife','return fn()',val)
        }
    },[])
    useEffect(()=>{
        console.log('StateLife','useEffect[name]',val)
    },[val])

    const updateState = (val:boolean) => {
        setVal(val)
    }

    return (
        <div className="demo-container">
            <Card title="State & Life Cycle" subtext="State Management" description="States help with component reusability, encapsulation. For converting function to class refer here : https://reactjs.org/docs/state-and-lifecycle.html. In function components we use useState to create and update state and useEffect to manage life cycle. There are 3 3 basic steps in the life cycle of React. In class based component they are given explicit names like componentDidMount(), componentStateUpdated() and componentWillUnmount(). Every state change will clead to re-render of the component and its children(depends on pure/impure and change in props). State can't be modified directly but need to use setState which schedules and update. State updates are asynchronous. State updated are batched/merged. Data flows down - State exist on a component and passed down as prop to its children but setState only runs on the original component where the state is defined, thus showing encapsulation."/>
            <div className="demo-box">
                <div className="lead">Component Did Mount or []</div>
                <code>It is called after the DOM has been changed with respect to the mounted component. Thus it will be after the initial states are set and initial DOM is set.Check console ('useEffect[]'). It triggers only once except in dev and strict mode it runs twice.</code>
                <div className="lead">Component Did Update or [dependencies]</div>
                <div className="button btn btn-secondary btn-sm" style={{marginRight:'4px'}} onClick={()=>{updateState(val)}}>Update State Same</div>
                <div className="button btn btn-dark btn-sm" onClick={()=>{updateState(!val)}}>Update State Diff</div>
                <br/>
                <code>It is called everytime any of the state changes (not if it changes to same as current i.e wont cause re-render) in the component and also initially once just like useEffect with empty dependency array. Check in console('useEffect[name]')</code>
            </div>
            <div className="demo-box">
                <div className="lead">Component Will Unmount or return fn()</div>
                <code>This is called just before the component is removed from DOM and should be used to have clean up code. Check in console ('return fn()')</code>
            </div>
            <div className="demo-container demo-box">
                <div className="lead" style={{fontSize:'32px'}}>{val.toString()}</div>
            </div>

        </div>
    )
}

export default StateLife