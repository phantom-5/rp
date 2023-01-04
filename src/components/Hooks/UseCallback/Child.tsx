import { memo } from "react"

const Child = (props:{getRandomNumber:()=>number}) => {
    return (
        <div style={{border:'1px solid black'}}>
            <div className="lead text-center">Child: {props.getRandomNumber()}</div>
        </div>
    )
}

export default memo(Child)