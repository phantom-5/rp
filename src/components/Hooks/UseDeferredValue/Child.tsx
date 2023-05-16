import {memo, useDeferredValue, useMemo, useRef, useEffect} from 'react';

const Child = (props:{num:string}) => {
    
    const deferredValue = useDeferredValue(props.num)

    useEffect(()=>{
        console.log('from Deferred', deferredValue)
    },[deferredValue])

    let isStale = useRef(true)
    isStale.current = true

    const createdList = useMemo(()=>{
        let listItems = []
            for(let i=0;i<25000*2;i++){
                listItems.push(<li key={'li'+i}>{deferredValue}</li>)
            }
            isStale.current = false
            return <ol>{listItems}</ol>
        
    },[deferredValue])

    return (
        <div style={{background: isStale.current?'grey':'white'}}>
            {createdList}
        </div>
    )
   
}

export default memo(Child)