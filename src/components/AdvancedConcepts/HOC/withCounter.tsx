import { useState } from "react";

const withCounter = (WrappedComponent:  (props: {countValue: number, setCountValue:React.Dispatch<React.SetStateAction<number>>}) => JSX.Element) => {
   const ComponentWithCounter = () => {
    const [count,setCount] = useState(0)
    return (
        <WrappedComponent countValue={count} setCountValue={setCount}/>
    )
   }
   return ComponentWithCounter
    
}

export default withCounter