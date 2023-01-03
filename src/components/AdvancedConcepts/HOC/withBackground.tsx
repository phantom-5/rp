const withBackground = (WrappedComponent: (props:any)=>JSX.Element) => {
    const ComponentWithBackground = () => {
        return (
            <div className="bg-dark text-light p-4">
                <WrappedComponent/>
            </div>
        )
    }
    return ComponentWithBackground
}

export default withBackground