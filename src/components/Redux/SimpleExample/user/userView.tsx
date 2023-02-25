

import { ThunkDispatch} from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
    const userData = useSelector((state:{[index:string]:any})=>state.user)
    const dispatch = useDispatch<ThunkDispatch<any,void,any>>()
    return (
        <div style={{border:'1px solid black',padding:'15px',textAlign:'center'}}>
            <div className="lead" style={{fontSize:'32px'}}>{'Loading: '+userData.loading}</div>
            {!userData.loading && <ul>
                    {userData.data.map((item:{[index:string]:string})=><li key={item.id+item.name}>{item.name}</li>)}
                </ul>}
            <button className="btn btn-sm btn-dark" onClick={()=>{dispatch(fetchUsers())}}>Simulate Users Async Thunk</button>
        </div>
    )
}

export default UserView