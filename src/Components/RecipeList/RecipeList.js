import React ,{useEffect,useState} from 'react'
// we are using useEffect because we need some data while our
//page is loading
import {BsSearch} from "react-icons/bs"
import { fetchData } from '../../service';

function RecipeList(props) {
    const [searchedTerm, setSearchedTearm] = useState("");
    const [query,setQuery] = useState('pizza');
    const [data,setData] = useState(""); //this state will render in our application

    const searchrecipe = (searchQuery) => {
      fetchData(searchQuery).then((response)=>{
        setData(response)
        props.setLoader(false)
        
    })
    }

// since we have to pass defaultQuery inside fetchData which is
// in service.js so that's why we are writing
// fetchData(query) and query is the useSate whos initial
// value is pizza
// through .then(response) we are recieving response
// and by calling a function => we are updating setData
// which means whenever we will find response it will 
// update data from useState

    useEffect(()=>{
        fetchData(query).then((response)=>{
            setData(response)
            props.setLoader(false)
        })
    },[])
  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input 
                  onChange={(e)=>setSearchedTearm(e.target.value)} 
                  // {/* whatever we are typing inside input, we are updating setSearchedTearm and it is 
                  // returning a value which is updating e */}
                  value={searchedTerm} 
                  type="text" 
                  placeholder='Search your recipe...' 
                  />
                <button onClick={()=>(searchrecipe(searchedTerm),props.setLoader(true))} ><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
        {
            data && data.hits.map((item,index) => (
            <div key={index} className='flexItem'>
              <div className='img-wrapper'>
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
            ))
        }  
        </div>
    </div>
  )
}

export default RecipeList
