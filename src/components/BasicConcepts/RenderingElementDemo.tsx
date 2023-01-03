import Card from "../../shared/Card"

const RenderingElementDemo = () => {
    return (
        <div className='demo-container'>
            <Card title='Rendering Element' subtext='Elements in React' description='Elements are the smallest building block of React Apps. A component is a collection of elements and logic. Check https://reactjs.org/docs/rendering-elements.html for how React.createRoot() is used to make React attach to the actual DOM. React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time. If one were disallowed from using state, one could use root.render() multiple times to update DOM, but this makes things messy and its only used once to attach the React App to the root. '/>
            <div className="demo-box">
                <code>React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state. Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM. More at - https://reactjs.org/docs/rendering-elements.html. This process in React is called reconcilitaion(covered in Advanced Section)</code>
            </div>
        </div>
    )
}

export default RenderingElementDemo