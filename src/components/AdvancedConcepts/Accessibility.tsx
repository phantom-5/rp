const Accessibility = () => {
    return (
        <div className="demo-container">
            <div className="demo-box">
                <div className="lead">a11y</div>
                <code>Numeronym presenting accessibility as "a" followed by 11 more letters, followed by "y".</code>
                <div className="lead">aria</div>
                <code>The Web Accessibility Initiative - Accessible Rich Internet Applications document contains techniques for building fully accessible JavaScript widgets.</code>
                <div className="lead">Semantic HTML</div>
                <code>Use React.Fragment vs div whenever possible</code>
                <div className="lead">Form labels</div>
                <code>Use htmlFor on labels and have labels for each input.</code>
            </div>
            <div className="demo-box">
                <div className="lead">Errors</div>
                <code>Errors should be human readable.</code>
                <div className="lead">Focus Control</div>
                <code>The web-application should be fully accessible by keyboard.</code>
                <div className="lead">Navigation</div>
                <code>Navigation should allow skipping to destination.</code>
                <div className="lead">Focus</div>
                <code>Programatically managing focus when needed.</code>
            </div>
            <div className="demo-box" style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <div className="lead">Set Langauge</div>
                <div className="lead">Set Document Title</div>
                <div className="lead">Set Color Contrast</div>
                <div className="lead">Cross Browswer Compatibility</div>
            </div>
        </div>
    )
}

export default Accessibility