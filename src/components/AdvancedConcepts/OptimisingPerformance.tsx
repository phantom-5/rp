const OptimisingPerformance = () => {
    return (
        <div className="demo-container">
            <div className="demo-box">
                <div className="lead">Check : https://reactjs.org/docs/optimizing-performance.html</div>
                <ul>
                <li className="lead">Use production builds.</li>
                <li className="lead">Minified Code.</li>
                <li className="lead">Use Profiler while developing.</li>
                <li className="lead">Virtualize Long Lists e.g react-window, react-virtualised</li>
                <li className="lead">Avoid unncessesary reconciliation.</li>
                <li className="lead">Use immutable objects for props and states</li>
                </ul>    
            </div>
        </div>
    )
}

export default OptimisingPerformance