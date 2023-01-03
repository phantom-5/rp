const SuspenseCmp = () => {
    return (
        <div className="demo-container">
            <div className="demo-box">
            <div className="lead">Suspense</div>
            <code>Only Suspense-enabled data sources will activate the Suspense component. They include:</code>
            <ul style={{fontSize:'14px'}}>
                <li>Data fetching with Suspense-enabled frameworks like Next.js (app directory)</li>
                <li>Lazy-loading component code with lazy</li>
            </ul>
            <code>1. It can be used to suspend multiple different children at once, and it will show fallback after all have loaded.</code><br/>
            <code>2. It was only two props one is children and the other fallback.</code><br/>
            <code>3. transition and deferred are used to avoid showing fallback when a component is suspended.</code><br/>
            <code>4. Multiple suspenses can be nested to show fallback in stages</code>
            </div>
        </div>
    )
}

export default SuspenseCmp