import { useState } from "react"
import Card from "../../shared/Card"

const HandlingEvents = () => {
    const LISTITEMS = ['Car','Bike','Bus','Truck']
    const [vahan,setVahan] = useState<string>('')

    const displayVahan = (vahan:string) => {
        setVahan(vahan)
    }
    return (
        <div className="demo-container">
            <Card title="Handling Events" subtext="Events" description="Handling events with React elements is very similar to handling events on DOM elements. There are some key differences. React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.  You cannot return false to prevent default behavior in React and must call preventDefault explicitly. React implements something called Synthetic Events which ensures cross-browser compatibility. When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered."/>
            <div className="demo-box">
                <div className="lead">Passing Arguments to Event Handler</div>
                <code className="mb-5">Click on below items</code>
                <div className="mb-5"></div>

                <ul>
                {LISTITEMS.map((item)=>(
                    <li onClick={()=>{displayVahan(item)}} key={item+'lkey'} style={{cursor:'pointer'}}>{item}</li>
                ))}
                </ul>
                <div className="lead text-center" style={{fontSize:'32px'}}>{vahan.toLowerCase()}</div>

            </div>
        </div>
    )
}
export default HandlingEvents