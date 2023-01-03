import Card from "../../../shared/Card"
import withCounter from "./withCounter"
import withBackground from './withBackground';

const HOC = () => {
    const CounterOnClick = (props: {countValue:number,setCountValue:React.Dispatch<React.SetStateAction<number>>}) => {
        return (
            <div style={{border:'1px solid black', padding:'8px', textAlign:'center'}}>
            <div className="lead">{props.countValue}</div>
            <button className="btn btn-outline-dark btn-sm" onClick={()=>{props.setCountValue(props.countValue+1)}}>On Click Count</button>
            </div>
        )
    }

    const CounterOnHover = (props: {countValue:number,setCountValue:React.Dispatch<React.SetStateAction<number>>}) => {
        return (
            <div style={{border:'1px solid black', padding:'8px', textAlign:'center'}}>
            <div className="lead">{props.countValue}</div>
            <button className="btn btn-outline-dark btn-sm" onMouseOver={()=>{props.setCountValue(props.countValue+1)}}>On Hover Count</button>
            </div>
        )
    }

    const CounterA = withCounter(CounterOnClick)
    const CounterB = withCounter(CounterOnHover)

    const ComponentC = withBackground(()=><div className="text-center">withBackground</div>)

    
    return (
        <div className="demo-container">
            <Card title="Higher Order Component" subtext="Code Reuse" description="A higher-order component (HOC) is an advanced technique in React for reusing component logic along with its render output. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature. Unling custom hooks which play with just the logic to make code re-usable, you can think of HOC as playing with logic, state and as well as taking entire components as input to return another component and help with code re-use. Concretely, a higher-order component is a function that can take a component and always returns a new component. Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects. Don’t Mutate the Original Component. Use Composition.  HOCs use containers as part of their implementation. You can think of HOCs as parameterized container component definitions. HOCs add features to a component. They shouldn’t drastically alter its contract. It’s expected that the component returned from a HOC has a similar interface to the wrapped component. Convention: Pass Unrelated Props Through to the Wrapped Component. HOC may have 10 other params apart from one or many wrapped components, but by convention when using the wrapped component only the props required by the specific component should be passed from HOC to wrapped components. Convention: Wrap the Display Name for Easy Debugging. HOC's must follow standard naming guidelines prefixed with - 'with'. Apply HOCs outside the component definition so that the resulting component is created only once. In rare cases where you need to apply a HOC dynamically, you can also do it inside a component’s lifecycle methods or its constructor. Static Methods Must Be Copied Over. For foward refs use React.forwardRef"/>
            <div className="demo-box">
                <>
                <CounterA/>
                <hr/>
                <CounterB/>
                <hr/>
                <ComponentC/>
                </>
            </div>
        </div> 
    )
}

export default HOC