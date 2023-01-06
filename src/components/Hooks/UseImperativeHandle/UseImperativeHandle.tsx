import { useRef } from "react"
import Child from "./Child"

const UseImperativeHandle = () => {
    //should be initialised to null for ts to calm down
    const childRef  = useRef<{indianFlagMode:()=>void}>(null)

    return (
        <div className="demo-container">
            <div className="demo-box" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <div className="text-center mb-2"><button className="btn btn-sm btn-dark" onClick={()=>{childRef?.current?.indianFlagMode()}}>India Flag Mode</button></div>
                <Child ref={childRef}/>
            </div>
        </div>
    )
}

export default UseImperativeHandle