import { useCallback, useState } from "react"
import Child from "./Child"

const UseCallback = () => {

    const [rerender,triggerRerender] = useState(0)

    const getRandomNumber = () => {
        return Math.floor(Math.random()*100)
    }

    const optimisedGetRandomNumber = useCallback(getRandomNumber,[])

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
            </div>
            
        </div>
    )
}

export default UseCallback