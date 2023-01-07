import { lazy, Suspense, useDeferredValue, useState } from "react"


const Child = lazy(()=>import('./Child'))
const ChildB = lazy(()=>import('./Child2'))

const UseDeferredValue = () => {
    const [text,setText] = useState('')
    const [text2,setText2] = useState('')
    

    //console.log('Current State',randomNumber,'Deferred State',deferredValue)

 

    return (
        <div className="demo-container">
            <div className="demo-box">
                <div className="lead">With useDeferredValue</div>
                <div className="text-center"><input type="text" className="form-control" onChange={(e)=>{setText(e.target.value)}} placeholder="Type as fast as you can"/></div>
                <Suspense fallback={<div>Loading...</div>}> 
                       {text && <Child num={text}/>}
                </Suspense>
            </div>
            <div className="demo-box">
                <div className="lead">Without useDeferredValue</div>
                <div className="text-center"><input type="text" className="form-control" onChange={(e)=>{setText2(e.target.value)}} placeholder="Type as fast as you can"/></div>
                <Suspense fallback={<div>Loading...</div>}> 
                       {text2 && <ChildB num={text2}/>}
                </Suspense>
            </div>
            <div className="demo-box">
                <code>The difference between the both is how debounce effect is brought upon by useDeferredValue</code><br/><br/>
                <code>For example if you type 'rickrudra' as fast as you can in the input boxes and for deferred filter the console with 'From Deferred' and for non deferred filter with 'From Normal', you would notice that in deferred due to debounce effect the value in defferedValue comes up as 'ri - ric - rickrudra' whereas in non defereed  its 'r-ri-ric-rick...rickrudra' </code><br/><br/>
                <code>Thus, deferred at least gives some time in between for UI to render and not block it entirely</code>
            </div>
        </div>
    )
}

export default UseDeferredValue