import Card from '../../shared/Card';
const Reconciliation = () => {
    return (
        <div className="demo-container">
            <Card title="Reconciliation" subtext="The Diffing Algorithm" description="This explains the choices we made in React’s “diffing” algorithm so that component updates are predictable while being fast enough for high-performance apps. When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree. There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3(cube)) where n is the number of elements in the tree.  Instead, React implements a heuristic O(n) algorithm based on two assumptions. 1- Two elements of different types will produce different trees. 2- The developer can hint at which child elements may be stable across different renders with a key prop."/>
            <div className="demo-box">
                <code>1. When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.</code><br/>
                <code>2. Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. Going from {'<a>'} to {'<img>'}, or from {'<Article>'} to {'<Comment>'}, or from {'<Button>'} to {'<div>'} - any of those will lead to a full rebuild.</code><br/>
                <code>3. When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive UNSAFE_componentWillMount() and then componentDidMount(). Any state associated with the old tree is lost.</code><br/>
                <code>4. Any components below the root will also get unmounted and have their state destroyed. UNSAFE life-cycle methods are legacy.</code>
            </div>
            <div className="demo-box">
                <code>5. When a component updates, the instance stays the same, so that state is maintained across renders</code><br/>
                <code>6. By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.</code><br/>
                <code>7. If you implement it naively, inserting an element at the beginning has worse performance. For example, converting between these two trees works poorly</code><br/>
                <code>8. In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient. See the example in link under : 'Recursing on children and keys'.</code><br/>
                <code>9. Reorders can also cause issues with component state when indexes are used as keys. Component instances are updated and reused based on their key. If the key is an index, moving an item changes it. As a result, component state for things like uncontrolled inputs can get mixed up and updated in unexpected ways.</code>
                <div className="lead">Check below for further details</div>
                <code>https://reactjs.org/docs/reconciliation.html</code><br/>
            </div>
            <div className="demo-box">
                <code>Because React relies on heuristics, if the assumptions behind them are not met, performance will suffer.</code><br/>
                <ul className='lead' style={{fontSize:'16px'}}>
                    <li>The algorithm will not try to match subtrees of different component types. If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven’t found this to be an issue.</li>
                    <li>Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.</li>
                </ul>
            </div>
        </div>
    )
}

export default Reconciliation