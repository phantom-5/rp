import { createContext, useContext, useState } from "react"
import Card from "../../shared/Card"

const Context = () => {
    const MyContextVehicle = createContext('vehicle-default')
    const MyContextCar = createContext('car-default')
   
    const GrandChildProviderComponent = () => {
        const car = useContext(MyContextCar)
        const vehicle = useContext(MyContextVehicle)
        return (
            <div className="lead" style={{border:'1px solid black', padding:'4px'}}>Grand Child : {vehicle} - {car}</div>
        )
    }

    const ChildProviderComponent = () => {
        const [car,setCar] = useState('car')
        return (
            <MyContextCar.Provider value={car}>
                <div style={{border:'1px solid black', padding:'4px'}}>
                Child : <GrandChildProviderComponent/>
                <br/>
                <div className="text-center"><button className="btn btn-sm btn-dark" onClick={()=>{setCar((prevValue)=>{return prevValue==='car'?'Nexon':'car'})}}>Change Car</button></div>
                </div>
            </MyContextCar.Provider>
        )
    }

    const ParentProviderComponent = () => { 
        const [vehicle,setVehicle] = useState('vehicle')
        return (
            <MyContextVehicle.Provider value={vehicle}>
                <div style={{border:'1px solid black', padding:'4px'}}>
                Parent : <ChildProviderComponent/>
                <br/>
                <div className="text-center"><button className="btn btn-sm btn-dark" onClick={()=>{setVehicle((prevValue)=>{return prevValue==='vehicle'?'4-wheeler':'vehicle'})}}>Change Vehicle</button></div>
                </div>
            </MyContextVehicle.Provider>
        )
    }

    const DefaultValueExample = () => {
        const valueCar = useContext(MyContextCar)
        return (
            <div style={{border:'1px solid black', padding:'4px'}}>{valueCar}</div>
        )
    }

    const renderFunction = (value:string) => {
        return <div style={{border:'1px solid black', padding:'4px'}}>Render Function : {value}</div>
    }



    return (
        <div className="demo-container">
            <Card title="Context" subtext="State Management" description="Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is not a global management replacement for redux. It just makes sure that we can access state in multiple children and further down without explicitly passing down as props. For changing state from deep down tree so at to change state everywhere else, one has to do pass the setState function around in props, so its not like redux's global state management. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Basically global but read-only is more preferred. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. This inversion of control can make your code cleaner in many cases by reducing the amount of props you need to pass through your application and giving more control to the root components. Such inversion, however, isn’t the right choice in every case. However, sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Because context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders. Uses useContext hook to get value."/>
            <div className="demo-box">
                <div className="lead">createContext(defaultValue)</div>
                <code>Used to create a context. The defaultValue argument is only used when a component does not have a matching Provider for the given context above it in the tree.</code>
                <div className="lead">Context.Provider</div>
                <code>Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.<br/>The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.</code>
                <div className="lead">Context.Consumer</div>
                <code>A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component. Requires a function as a child.</code>
                <div className="lead">Context.displayName</div>
                <code>Used for debugging within react dev tools</code>
            </div>
            <div className="demo-box">
                    <div className="lead">Provider Example</div>
                    <ParentProviderComponent/>
                    <div className="lead mt-2">Default Value Example</div>
                    <DefaultValueExample/>
                    <code>The context i.e MyContextVehicle & MyContextCar should be accessible to child components to pass as parameter to useContext. The general approach is to have a share file that contains all contexts, just like we do for types/interfaces.</code>
                </div>
                <div className="demo-box">
                    <div className="lead mb-3">Consumer Example</div>
                    <div>Not Inside Provider</div>
                    <MyContextCar.Consumer>
                        {value => renderFunction(value)}
                    </MyContextCar.Consumer>
                    <hr/>
                    <div>Inside Provider</div>
                    <MyContextCar.Provider value={'Alto'}>
                        <MyContextCar.Consumer>
                            {value => renderFunction(value)}
                        </MyContextCar.Consumer>
                    </MyContextCar.Provider>
                    <hr/>
                    <code>It is meant for inline JSX functions</code>

                </div>
                
        </div>
    )
}

export default Context