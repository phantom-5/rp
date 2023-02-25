import { useSelector, useDispatch } from "react-redux"
import {creamActions} from './creamSlice'

const CreamView = () => {
    const numOfIC = useSelector((state:{[index:string]:any})=>state.cream.numOfIC)
    const dispatch = useDispatch()
    return (
        <div  style={{border:'1px solid black',padding:'15px',textAlign:'center', marginTop:'2px', marginBottom:'2px',width:'200px'}}>
            <div className="lead">Number of Ice Creams</div>
            <div className="lead" style={{fontSize:'32px'}}>{numOfIC}</div>
            <button className="btn btn-sm btn-dark mb-1" onClick={()=>{dispatch(creamActions.ordered())}}>Simulate IceCream Orders</button>
            <button className="btn btn-sm btn-dark" onClick={()=>{dispatch(creamActions.restocked(10))}}>Restock 10</button>
        </div>
    )
}

export default CreamView