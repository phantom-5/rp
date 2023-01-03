import { useState, useEffect } from "react"

const Child = (props:{num:number}) => {

    console.log('Child INF', 'Component Rendered')

    const initializerFn = () => {
        console.log('Child INF','Triggered Initializer Fn')
        return 0
    }

    useEffect(()=>{
        console.log('Child INF','States Reset')
    },[])


    const [dummyState,setDummyState] = useState(initializerFn())  //improper

    //const [dummyState,setDummyState] = useState(initializerFn) //proper

    return (
        <div className="lead" style={{padding:'4px', border:'1px solid black'}}>
            <div >Child Component {dummyState}</div>
            <div>Prop Value: {props.num}</div>
            <button className="btn btn-sm btn-dark mt-1" onClick={()=>{setDummyState(dummyState+1)}}>Rerender Child by Updating any State within Child</button>
        </div>
    )
}

export default Child