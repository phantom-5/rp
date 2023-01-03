import ReactDOM from "react-dom"

const Portals = () => {

    const InnerComponent = () => {
        return ReactDOM.createPortal(<div>from Portal</div>, document.body)
    }

    const Component = () => {
        return (
            <>
                <InnerComponent />
            </>
        )
    }

    return (
        <div className="demo-container">
            <div className="demo-box">
                <code>Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</code><br />
                <code>The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.</code>
                <br/>
                <code>This is generally used for modals, tooltips and as such.</code>
                <div className="lead">Scroll to bottom-left of page</div>
                <code>Also check console - elements. Notice how 'from portal' is placed outside the root.</code><br/>
                <span>For more check : https://reactjs.org/docs/portals.html</span>

            </div>
            <Component />
        </div>
    )
}

export default Portals