import { useState } from "react"
import Child from "./Child"
import Child2 from "./Child2"

const UseTransition = () => {

    const [text,setText] = useState('')
    const [text2,setText2] = useState('')
    
    
    return (
        <div className="demo-container">
            <div className="demo-box">
                <div className="lead">With useTransition</div>
            <div className="text-center"><input type="text" className="form-control" onChange={(e)=>{setText(e.target.value)}} placeholder="Type as fast as you can"/></div>
            {text && <Child num={text}/>}
            </div>
            <div className="demo-box">
                <div className="lead">Without useTransition</div>
            <div className="text-center"><input type="text" className="form-control" onChange={(e)=>{setText2(e.target.value)}} placeholder="Type as fast as you can"/></div>
            {text2 && <Child2 num={text2}/>}
            </div>
            <div className="demo-box">
                <code>Console : 'From Normal' for normal(right) and 'within StartTransition'</code><br/><br/>
                <code>If you check the difference in console logs, theres no difference but startTransition is faster and has its own debouncing effect because as it slows down the various setState calls they get batched into the one final call.</code>
                <br/>
                <br/>
                <code>In summary it does what useDeferredValue does but in much cleaner way(in terms of code)</code><br/><br/>
                <code>For more check Evernote</code>
            </div>
            <div className="demo-box">
                <code>the startTransition always executes all of its logic whenever its invoked but only the state updates within it are marked as transition. This explains the same console log outputs</code><br/><br/>
                <code>startTransition can't be used on controlled inputs</code><br/><br/>
                <code>Function passed to startTranisition must have synchronous logic. If async logic is required then keep startTransition within async logic instead.</code>
            </div>
        </div>
    )
}

export default UseTransition