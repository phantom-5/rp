import Card from "../../shared/Card"
import CakeView from "./SimpleExample/cake/cakeView"
import CreamView from "./SimpleExample/icecream/creamView"
import UserView from "./SimpleExample/user/userView"
import {Provider} from 'react-redux'
import store from './SimpleExample/store'


const Redux = () => {
    return (
        <Provider store={store}>
        <div className="demo-container">
            <Card title="Redux" subtext="Global State Management" description="Redux is not just for React, it can work with Vue, Angular etc. Redux is for JS Applications in general. Redux is a state container (stores state of an application). State of an application is the states shared by all of the individual components of the app. Redux is predictable. In redux a pattern is enforced to ensure all state transitions are explicit and can be tracked. Thus redux is a predictable state container for JS Apps. Its used to manage the application/global state in predictable manner. Redux-toolkit is the standard way to write redux logic in applications.  "/>
            <div className="demo-box" style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
                <CakeView/>
                <CreamView/>
            </div>
            
            <div className="demo-box" style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
            <UserView/>
            </div>
            <div className="demo-box">
                <code>Check redux-logger in console</code>
                <br/>
                <br/>
                <code>Make sure to check Evernote and ReduxFromBasics Project Folder where Redux is used on plain JS.</code>
                <br/>
                <br/>
                <code>**Extra Reducers Demo : Order {'>=2'} Cakes and get an Ice Cream Free.</code>
            </div>
        </div>
        </Provider>
    )
}

export default Redux