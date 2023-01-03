import { useCallback, useState } from 'react';
import './App.css';
import Home from './components/HomePage/Home';
import { INDEXDATA } from './shared/INDEXDATA';

function App() {
  const [showHome,setShowHome] = useState(true)
  const [showCompWithId,setShowCompWithId] = useState<string>('')

  const toggleHome = (status:boolean) => {
    setShowHome(status)
  }

  const toggleShowHome = useCallback((id:string)=>{
    toggleHome(false)
    setShowCompWithId(id)
  },[])

  return (
    <div className="App">
      <div className='app-container'>
      {showHome ? <Home toggleShowHome={toggleShowHome}/> : INDEXDATA.filter(item=>item.id===showCompWithId)[0]['component']}
      <div className="text-center button-back"><button className="btn btn-outline-secondary" onClick={()=>{toggleHome(true)}}>Home</button></div>
      </div>
    </div>
  );
}

export default App;
