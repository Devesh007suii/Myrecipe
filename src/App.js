import { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import RecipeList from './Components/RecipeList/RecipeList';
import Tabs from './Components/Tabs/Tabs';

function App() {
  const [loader,setLoader] = useState(true)
  return (
    <div className='main'>
      <Header/>
      <Tabs/>
      <RecipeList setLoader={setLoader}/>
      {loader && <div className="loader">
        <div className='spinner'></div>
      </div>}
    </div>
  )
  
}

export default App;
