import { Fragment } from "react"
import Card from "../../shared/Card"

const Fragments = () => {
    const FragmentExample = () => {
        return (
            <Fragment>
                <div className="lead">Child A</div>
                <div className="lead">Child B</div>
            </Fragment>
        )
    }
    return(
        <div className="demo-container">
            <Card title="Fragments" subtext="Grouping Children" description="A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. <React.Fragment> is full syntax while <> is the short syntax. We can assign keys only in full syntax."/>
            <div className="demo-box" style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <FragmentExample/>
            </div>
        </div>
        
    )
}

export default Fragments