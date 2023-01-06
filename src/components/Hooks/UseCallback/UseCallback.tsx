import { useCallback, useState, useEffect } from "react"
import Child from "./Child"

const UseCallback = () => {

    const [rerender,triggerRerender] = useState(0)
    

    const getRandomNumber = () => {
        return Math.floor(Math.random()*100)
    }

    const optimisedGetRandomNumber = useCallback(getRandomNumber,[])

    const [showNum,setShowNum] = useState(0)
    const optimisedRandomFunction = useCallback(()=>{setShowNum(Math.floor(Math.random()*10))},[])

    useEffect(()=>{
        optimisedRandomFunction()
        console.log('Effect Executed')
    },[optimisedRandomFunction])

    return (
        <div className="demo-container">
            <div className="demo-box text-center">
                <div className="lead">Prevents rerendering due to function reference change</div>
                <button className="btn btn-sm btn-dark mt-1 mb-2" onClick={()=>{triggerRerender(rerender+1)}}>Trigger Parent Rerender</button>
                <br/>
                <code>Without useCallback</code>
                <Child getRandomNumber={getRandomNumber}/>
                <code>With useCallback</code>
                <Child getRandomNumber={optimisedGetRandomNumber}/>
                <br/>
                <br/>
                <code>Note*: Here the 2nd Child doesn't change because the function passed in prop to it doesnt change in terms of its reference due to useCallback</code>
            </div>
            <div className="demo-box">
                <div className='lead'>Memoizing reactive dependency (only functions) of other hooks</div>
                <div className="lead text-center" style={{fontSize:'32px'}}>{showNum}</div>
                <code>Even though the random number shows up due to useEffect calling optimised callback function, but upon state change when compoenent re-renders the useEffect wont get triggered again even though the reactive dependency has a function as its running from cache and its reference hasnt changed.</code>
                <br/>
                <br/>
                <code>Check Console : 'Effect Executed'</code>
            </div>
            
        </div>
    )
}

export default UseCallback