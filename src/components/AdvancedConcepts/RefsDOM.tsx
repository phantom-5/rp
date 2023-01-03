import {useState} from 'react';
const RefsDOM = () => {
    
    const [rerender,triggerRerender] = useState(0)
    
    return (
        <div className="demo-container">
            <div className="demo-box">
                <div className="lead">When to use refs:</div>
                <ul>
                    <li>Managing focus, text selection, or media playback.</li>
                    <li>Triggering imperative animations.</li>
                    <li>Integrating with third-party DOM libraries.</li>
                </ul>
                <code>Avoid using refs for anything that can be done declaratively. For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.
                </code>
                <div className="lead">Accessing Refs</div>
                <ul>
                    <li>When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.</li>
                    <li>You may not use the ref attribute on function components because they don’t have instances.</li>
                </ul>
            </div>
            <div className="demo-box">
                <div className="lead">Callback refs</div>
                <code>Instead of passing a ref attribute created by createRef(), you pass a function. The function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere.</code>
                <div className="mt-3 text-center">
                    <button className="btn btn-sm btn-dark" ref={(e)=>{console.log('Callback Ref Button Name - ',e?.innerText)}}>Ricky</button>
                    <span style={{marginLeft:'4px',fontSize:'12px'}}>Check console 'Callback Ref'</span>
                </div>
                <code>Callback refs give more control than normal ref in the sense that we can accurately detect when the ref is created and instantiated.</code><br/>
            </div>
            <div className="demo-box">
            <code>If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn’t matter in most cases.</code><br/>
                <button className="btn btn-sm btn-dark mt-3" onClick={()=>{triggerRerender(rerender+1)}}>Trigger Rerender</button><br/>
                Check console
            </div>
        </div>
    )
}

export default RefsDOM