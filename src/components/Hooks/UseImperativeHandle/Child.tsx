import { forwardRef, useImperativeHandle, useRef, useState} from "react"

//in forwardRef types must be given like this and not inside params
const Child = forwardRef<{indianFlagMode: () => void},any>((props,ref) => {

    const saffronBtn = useRef<HTMLButtonElement>(null) //null is also required for typescript to calm down
    const whiteBtn = useRef<HTMLButtonElement>(null)
    const greenBtn = useRef<HTMLButtonElement>(null)

    const [ashokaChakra,setAshokaChakra] = useState(false)

    useImperativeHandle(ref,()=>{
        return {
            indianFlagMode: () => {
                if(saffronBtn?.current){
                    saffronBtn.current.style.background='#FF9933'
                }
                if(whiteBtn?.current){
                    whiteBtn.current.style.background='#FFFFFF'
                    setAshokaChakra(true)
                    
                }
                if(greenBtn?.current){
                    greenBtn.current.style.background='#138808'
                }
            }
        }
    })
    return (
        <div className="text-center" style={{padding:'24px',border:'1px solid black'}}>
            <div className="lead">Child Component</div>
            <button className="btn btn-sm btn-secondary" style={{width:'150px', height:'24px'}} ref={saffronBtn}>{' '}</button><br/>
            <button className="btn btn-sm btn-secondary" style={{width:'150px', height:'24px'}} ref={whiteBtn}>{ashokaChakra?<img src='/ac.png' width='24px' height='24px' alt='' style={{marginTop:'-10px'}}/>:' '}</button><br/>
            <button className="btn btn-sm btn-secondary" style={{width:'150px', height:'24px'}} ref={greenBtn}>{' '}</button>
        </div>
    )
})

export default Child