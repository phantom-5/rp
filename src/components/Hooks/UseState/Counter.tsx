import { useState } from "react"

const Counter = (props:{count:number}) => {
    const [flowState,setFlowState] = useState('')
    const [prevProps,setPrevProps] = useState(props.count) //only initially its considered after that the initial value is always ignored

    if(prevProps!==props.count){
        if(props.count>prevProps){
            setFlowState('increasing')
        }else if(props.count<prevProps){
            setFlowState('decreasing')
        }

        setPrevProps(props.count)
    }

    return (
        <div style={{padding:'4px', border:'1px solid black'}}>
        <div className="lead text-center">Counter Component</div>
        <div className="lead">{props.count}</div>
        {flowState && (flowState === 'increasing' ? 'Increasing':'Decreasing')}
        </div>
    )
}

export default Counter