import { useEffect, useState, memo } from 'react';
const Child = (props:{num:number}) => {
    const [nextNum,setNextNum] = useState(props.num)
    
    function wait(ms:number){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

     useEffect(()=>{
        setNextNum(props.num+1)
     },[props.num])

    wait(2000)
   
    return (
        <>
        <div className="lead">Child: {nextNum}</div>
        </>
    )
}

export default memo(Child)