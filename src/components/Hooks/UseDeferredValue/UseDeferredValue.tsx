import { lazy, Suspense, useDeferredValue, useState } from "react"


const Child = lazy(()=>import('./Child'))

const UseDeferredValue = () => {
    const [randomNumber,setRandomNumber] = useState(0)
    //const deferredValue = useDeferredValue(randomNumber)

    const changeChildProp = () => {
        setRandomNumber(Math.floor(Math.random()*100))
    }

    return (
        <div className="demo-container">
            <div className="demo-box">
                <div className="text-center"><button className="btn btn-sm btn-dark" onClick={changeChildProp}>Change Child Prop</button></div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Child num={randomNumber}/>
                </Suspense>
            </div>
        </div>
    )
}

export default UseDeferredValue