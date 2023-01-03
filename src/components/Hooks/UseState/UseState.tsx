import { useState } from "react"
import Child from "./Child";
import Counter from "./Counter";


const UseState = () => {
    const [dummyState, setDummyState] = useState('Ricky')
    const [childKey, setChildKey] = useState(0)
    const [childProp, setChildProp] = useState(0)

    const [counterProp,setCounterProp] = useState(0)

    const initalizerFn = () => {
        return 0;
    }

    const [count, setCount] = useState(initalizerFn)



    const withoutUpdater = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

    const withUpdater = () => {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }

    return (
        <>
            <div className="demo-container">
                <div className="demo-box">
                    <div className="lead">Calling the set function does not change the current state in the already executing code.</div>
                    <button className="btn btn-dark btn-sm" onClick={() => { setDummyState('Rudra'); console.log('how state update works', dummyState) }}>Trigger Console</button><br />
                    <code>Check console 'how state update works'.</code>
                    <div className="lead mt-2">Initializer and Updater Function</div>
                    <button className="btn btn-sm btn-dark" onClick={withoutUpdater}>Increment thrice without updater fn</button>
                    <button className="btn btn-sm btn-dark mt-1" onClick={withUpdater}>Increment with updater fn</button>
                    <br />
                    <code>Note: It doesn't render thrice, the updates still get batched.</code>
                    <div className="lead mt-1 text-center">{count}</div>
                    <br />
                    <code>Always clear console before working with buttons.</code>
                </div>
                <div className="demo-box">
                    <code>Console : 'Child INF'</code>
                    <div className="lead mb-2">Even though useState initial value is ignored but the function call if in initial argument gets triggered on every rerender</div>
                    <Child key={'child' + childKey} num={childProp} />
                </div>
                <div className="demo-box">
                    <code>Console : 'Child INF'</code>
                    <Child key={'child' + childKey} num={childProp} />
                    <button className="btn btn-sm btn-dark mt-2" onClick={() => { setChildKey(childKey + 1) }}>Rerender Child & Reset State by Updating Key State</button>
                    <button className="btn btn-sm btn-dark mt-2" onClick={() => { setChildProp(childProp + 1) }}>Rerender Child by Updating State in any other prop</button>
                    <code>Updating a state in parent re-renders parent the child re-renders too but its state is not lost and reset. It only happens if its unmounted and mounted again which updating key does.</code>
                </div>
                <div className="demo-box">
                    <div className="lead mb-2">Storing Info on Previous Props (prop-state)</div>
                    <button onClick={()=>{setCounterProp(counterProp+1)}} style={{marginRight:'8px'}}>Add</button>
                    <button onClick={()=>{setCounterProp(counterProp-1)}}>Subtract</button>
                    <br/>
                    <br/>
                    <Counter count={counterProp}/>

                </div>
            </div>
            <span className='HooksEvernote lead' style={{}} onClick={() => { window.location.href = 'https://www.evernote.com/client/web?login=true#?an=true&n=f3096877-4aab-3685-7e4f-f5c3bf6307b8&' }}>Check Evernote for Important Notes on useState. This page compliments the notes for demos.</span>
        </>
    )
}

export default UseState