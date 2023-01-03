import { useLayoutEffect, useEffect } from "react"

const UseLayoutEffect = () => {
    useEffect(()=>{
        console.log('ULE','useEffect executed')
    },[])

    useLayoutEffect(()=>{
        console.log('ULE','useLayoutEffect executed')
    },[])

    return (
        <div className="demo-container">
            <div className="demo-box">
                <ul>
                    <li>Exactly same syntax and properties as useEffect but with the few major differences</li>
                    <li>It runs after DOM Mutation</li>
                    <li>It runs before browser paint after which the useEffect runs</li>
                    <li>It's not supported in server side rendering as it depends on DOM layout on client</li>
                    <li>The only advantage it offers is, if the same functionality was to be used in useEffect, users would see a flicker but useLayoutEffect will avoid that as it will execute before browser paint</li>
                    <li>It is blocking in nature</li>
                </ul>
            </div>
        </div>
    )
}

export default UseLayoutEffect