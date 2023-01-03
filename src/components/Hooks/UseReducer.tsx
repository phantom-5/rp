import { useReducer, useRef } from "react"

type ACTION = {
    type: string,
    payload: number
}

function counterReducer(state:number,action:ACTION){
    let value = action.payload
    
    if(!value){return state}

    switch(action.type){
        case 'ADD':
            return state+value
        case 'SUBTRACT':
            return state-value
        default:
            return state
    }
}

function initialize(val: number){
    return 0
}

const UseReducer = () => {
    const [counterState,dispatchCounterAction] = useReducer(counterReducer,0,initialize) 
    const inputRef = useRef<HTMLInputElement>(null)
    //or
    // const [counterState,dispatchCounterAction] = useReducer(counterReducer,0) 

    return (
        <div className="demo-container">
            <div className="demo-box" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <input type="number" className="form-control" ref={inputRef} placeholder={'Enter Value'} />
                <button className="btn btn-sm btn-dark" onClick={()=>{dispatchCounterAction({type:'ADD',payload:parseInt(inputRef?.current?.value?inputRef?.current?.value:'0')})}}>Add</button>
                <button className="btn-sm btn btn-dark mb-1"  onClick={()=>{dispatchCounterAction({type:'SUBTRACT',payload:parseInt(inputRef?.current?.value?inputRef?.current?.value:'0')})}}>Subtract</button>
                <div className="lead">{counterState}</div>
            </div>
            <div className="demo-box">
                <ul>
                    <li>Its end goal is exactly same as useState</li>
                    <li>useState and useReducer are interchangeable and they differ only in how we write code</li>
                    <li>useReducer forced to be more structured and scales well when state updates become complex or multiple state update logics are there</li>
                    <li>First one write the reducer function, then the initilizer funtion, then the hook, then use the state and dispath returned from hook</li>
                    <li>Use it if the setState of useState not being used in more than 2 places else use useReducer</li>
                    <li>Check Evernote for further details</li>
                </ul>
            </div>
        </div>
    )
}

export default UseReducer