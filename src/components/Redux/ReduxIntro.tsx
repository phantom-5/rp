import Card from "../../shared/Card"

const ReduxIntro = () => {
    return (
        <div className="demo-container">
            <Card title="Redux" subtext="Global State Management" description="Redux is not just for React, it can work with Vue, Angular etc. Redux is for JS Applications in general. Redux is a state container (stores state of an application). State of an application is the states shared by all of the individual components of the app. Redux is predictable. In redux a pattern is enforced to ensure all state transitions are explicit and can be tracked. Thus redux is a predictable state container for JS Apps. Its used to manage the application/global state in predictable manner. Redux-toolkit is the standard way to write redux logic in applications.  "/>
            <div className="demo-box">
                <code>Check more at : Evernote</code>
            </div>
        </div>
    )
}

export default ReduxIntro