import {memo, useDeferredValue, useMemo, useRef } from 'react';

const ChildB = (props:{num:string}) => {

    let isStale = useRef(true)
    isStale.current = true

    console.log('From Normal',props.num)

    const createdList = useMemo(()=>{
        let listItems = []
            for(let i=0;i<20000;i++){
                listItems.push(<li key={'li'+i}>{props.num}</li>)
            }
            isStale.current = false
            return <ul>{listItems}</ul>
        
    },[props.num])

    return (
        <div style={{background: isStale.current?'grey':'white'}}>
            {createdList}
        </div>
    )
    
   
}

export default memo(ChildB)