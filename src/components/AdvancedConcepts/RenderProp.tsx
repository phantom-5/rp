
import { ReactNode, useState } from "react"
import Card from "../../shared/Card"
import { ReactElement } from "react"

const RenderProp = () => {
    const Mouse = (props:{customRenderProp: (mousePos:{x:number,y:number})=>JSX.Element}) => {
        const [mousePos,setMousePos] = useState<{x:number,y:number}>({x:0,y:0})
        return (
            <>
            <div style={{height:'95vh', width:'95vw', position:'absolute'}} onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{setMousePos({x:e.clientX,y:e.clientY})}}></div>
            {props.customRenderProp(mousePos)}
            </>
        )
    }
    const Waddle = (mousePos:{x:number,y:number}) => {
        return (
            <img src="/waddle.gif" alt="error" height="64px" width="64px" style={{position:'absolute',left:mousePos.x,top:mousePos.y}} />
        )
    }
    return (
        <div className="demo-container">
            <Card title="Render Prop" subtext="Code Reusability" description="Basically passing a functional component as prop. The Render Prop should be a function that returns JSX. The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. It helps in code reuse. For example instead of the duck, let's say we had a component, we could easily integrate it to follow mouse without making much changes. Any prop that is a function that a component uses to know what to render is technically a “render prop”. Using a render prop can negate the advantage that comes from using React.PureComponent if you create the function inside a render method. This is because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop."/>
            <Mouse customRenderProp={Waddle}/>
        </div>
    )
}
export default RenderProp