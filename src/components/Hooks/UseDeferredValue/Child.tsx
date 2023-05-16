import {memo, useDeferredValue, useMemo, useRef } from 'react';

const Child = (props:{num:string}) => {
    
    const deferredValue = useDeferredValue(props.num)

    console.log('From Deferred',deferredValue)

    let isStale = useRef(true)
    isStale.current = true

    const createdList = useMemo(()=>{
        let listItems = []
            for(let i=0;i<20000;i++){
                listItems.push(<li key={'li'+i}>{deferredValue}</li>)
            }
            isStale.current = false
            return <ul>{listItems}</ul>
        
    },[deferredValue])

    return (
        <div style={{background: isStale.current?'grey':'white'}}>
            {createdList}
        </div>
    )
   
}

export default memo(Child)