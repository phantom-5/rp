import { ReactNode } from "react"
import Card from "../../shared/Card"

const Composition = () => {

    const ContainmentParent = (props:{children:ReactNode}) => {
        return (
            <div style={{border:'2px solid cyan', padding:'4px'}}>
                {props.children}
            </div>
        )
    }

    const ConatainmentChild = () => {
        return(
            <div>Containment-Child</div>
        )
    }
    
    const SpecializationChild = () => {
        return (
            <SpecializationParent name='Ricky'/>
        )
    }

    const SpecializationParent = (props:{name:string}) => {
        return (
            <div style={{color:'green'}}>{props.name}</div>
        )
    }

    return (
        <div className="demo-container">
            <Card title="Composition" subtext="props.children" description="React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components. Generally there are two cases that require composition. Containment - Parent does'nt care what its children will be for ex- parent component adds border to children no matter what. Specialization - When child implements generic method of Parent and does something specific. If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or class, without extending it."/>
            <div className="demo-box">
                <div className="lead">Containment</div>
                <ContainmentParent>
                    <ConatainmentChild/>
                </ContainmentParent>
                <br/>
                <hr/>
                <div className="lead">Specialization</div>
                <SpecializationChild/>
            </div>
        </div>
    )
}

export default Composition