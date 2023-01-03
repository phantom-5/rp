import Card from "../../shared/Card"
const StartingReact = () => {
    return (
        <div className="demo-container">
            <Card title="Starting a React Project" subtext="Project Setup" description="ReactJS is simply a library that helps you break thge UI into components and nothing else is available to it by default. React follows SPA Model ( Single Page Applications ). The routing that you see is an illusion in react router."/>
            <div className="demo-box">
                <ul>
                    <li>npx create-react-app myapp --template typescript</li>
                    <li>For fullstack React dev use NextJS</li>
                    <li>Check Custom toolchains section here : https://beta.reactjs.org/learn/start-a-new-react-project</li>
                    <li>If one needs to add React to an existing project : https://beta.reactjs.org/learn/add-react-to-a-website</li>
                    <li>For Mobile Applications we have React-Native</li>
                </ul>
            </div>
        </div>
    )
}

export default StartingReact