import Card from "../../shared/Card"

const ListKeys = () => {
const VehicleItems = ['Car','Bike','Bus','Truck'].map((item)=>(
    <li>{item}</li>
))
return (
    <div className="demo-container">
        <Card title="List Keys" subtext="Keys" description="Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys. When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort. Keys only make sense in the context of the surrounding array. Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name. Keep in mind that if the map() body is too nested, it might be a good time to extract a component"/>
        <div className="demo-box">
            <div className="lead mb-5">Inline Map JSX Variable</div>
            <ul>
                {VehicleItems}
            </ul><br/>
            <code>Reorders can also cause issues with component state when indexes are used as keys. Component instances are updated and reused based on their key. If the key is an index, moving an item changes it. As a result, component state for things like uncontrolled inputs can get mixed up and updated in unexpected ways.</code>
        </div>
    </div>
)}

export default ListKeys