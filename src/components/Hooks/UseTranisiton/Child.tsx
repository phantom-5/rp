import {memo, useTransition, useMemo, useRef, useState, useEffect } from 'react';

const Child = (props:{num:string}) => {
    
    const [isPending,startTransition] = useTransition()
    const [List,setList] = useState(<></>)

    
    useEffect(()=>{
        startTransition(()=>{
            console.log('Within startTransition',props.num)
            let listItems = []
            for(let i=0;i<25000*2;i++){
                listItems.push(<li key={'li'+i}>{props.num}</li>)
            }
            setList(<ol>{listItems}</ol>)
        })
    },[props.num])
            
        

    return (
        <div style={{background: isPending?'grey':'white'}}>
            {List}
        </div>
    )
   
}

export default memo(Child)