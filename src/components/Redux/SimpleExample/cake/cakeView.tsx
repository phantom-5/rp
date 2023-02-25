import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import { cakeActions } from './cakeSlice';

const CakeView = () => {

    const numOfCakes = useSelector((state:{[index:string]:any})=>state.cake.numOfCakes)
    const [payloadValue,setPayloadValue] = useState(1)
    const dispatch = useDispatch()

    return (
        <div  style={{border:'1px solid black',padding:'15px', textAlign:'center', width:'200px'}}>
            <div className="lead">Number of Cakes</div>
            <div className="lead" style={{fontSize:'32px'}}>{numOfCakes}</div>
            <input type="number" className="form-control mb-1" value={payloadValue} onChange={(e)=>{setPayloadValue(parseInt(e.target.value))}} placeholder='Payload'/>
            <button className="btn btn-sm btn-dark mb-1" onClick={()=>{dispatch(cakeActions.ordered(payloadValue))}}>Simulate Cake Orders</button>
            <button className="btn btn-sm btn-dark" onClick={()=>{dispatch(cakeActions.restocked(10))}}>Restock 10</button>
        </div>
    )
}

export default CakeView