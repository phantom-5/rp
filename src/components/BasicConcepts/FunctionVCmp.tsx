import Card from "../../shared/Card"

const FunctionVCmp = () => {
    const renderComponent = () => {
        return <div style={{border:'1px solid grey',padding:'4px'}}>renderComponent()</div>
    }

    const Component = () => {
        return (
            <div style={{border:'1px solid grey',padding:'4px'}}>Component</div>
        )
    }

    return (
        <div className="demo-container">
            <Card title="Function vs Component" subtext="Calling function instead of component" description="Calling function is faster and does'nt implement react lifecycle and thus can't have hooks. Functions allow recursive rendering and other logical paradigms that Component can't support."/>
            <div className="demo-box">
                <div className="lead text-info">Calling Function</div>
                {renderComponent()}
                <div className="lead text-info">Component</div>
                <Component/>
            </div>
        </div>
    )
}

export default FunctionVCmp