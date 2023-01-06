import { useEffect, useMemo, useState } from "react";

function wait(ms:number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


const UseMemo = () => {

    const [rerender,triggerRerender] = useState(0)

    const [randomNum,setRandomNum] = useState(0)

    const expensiveCalculateFunction = () => {
        wait(5000)
        return Math.floor(Math.random()*10)
    }

    const memoizedCalc = useMemo(expensiveCalculateFunction,[])

    const exampleObject = {}

    const memoizedObject = useMemo(()=>exampleObject,[])

    useEffect(()=>{
        setRandomNum(Math.floor(Math.random()*10))
    },[memoizedObject])

    return (
        <div className="demo-container">
            <div className="demo-box">
                <div className="lead">Skipping expensive re-calculations</div>
                <div className="text-center"><button className="btn btn-sm btn-dark" onClick={()=>{triggerRerender(rerender=>rerender+1)}}>Trigger Rerender</button></div>
                <div className="lead text-center" style={{fontSize:'32px'}}>{memoizedCalc}</div>
                <code>The first time useMemo runs there's a 5s delay (in dev strict mode twice = 10s) as the useMemo is within rendering logic. But upon further renderings the value doesn't change. But in contrast to useCallback example, there's no child component. Its the same component and the number doesnt change as its coming from useMemo.</code>
            </div>
            <div className="demo-box">
                <div className="lead">Memoizing reactive dependencies (function or object) of other hooks</div>
                <div className="lead text-center" style={{fontSize:'32px'}}>{randomNum}</div>
              
                <code>Trigger re-render. We have an object declared in rendering logic as a reactive dependency to useEffect and on each render the reference changes but if we wrap a function that returns the object in useMemo then we can prevent the effect from being affected as the memoized object ref wont change on every render. For function our function insde useMemo must return the a function instead of an object. But useCallbaks can help memoize functions with lesser code.</code>
            </div>
        </div>
    )
}

export default UseMemo