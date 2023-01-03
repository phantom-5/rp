import { useLayoutEffect, useEffect, useState } from "react"
import { fetchData } from "../../shared/CommonApi"

const UseLayoutEffect = () => {

    const [dataFromEffect,setDataFromEffect] = useState('')
    const [dataFromLayoutEffect,setDataFromLayoutEffect] = useState('')

    function wait(ms:number){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    useEffect(()=>{
        console.log('ULE','useEffect executed')
        fetchData(5000).then(data=>setDataFromEffect(data))
    },[])

    useLayoutEffect(()=>{
        console.log('ULE','useLayoutEffect executed')
        fetchData(5000).then(data=>setDataFromLayoutEffect(data))
        wait(5000)
        
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
            <div className="demo-box" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="lead">Data from useEffect: {dataFromEffect}</div>
                <div className="lead mt-1">Data from useLayoutEffect: {dataFromLayoutEffect}</div>
            </div>
        </div>
    )
}

export default UseLayoutEffect