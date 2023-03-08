import React,{ useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import List from './List';

const Search = () => {
    
    const [input, setInput] = useState("")
    const [data, setData] = useState([])

    const fetchData = (search) => {
     return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=cd788188&app_key=0fa58cc951c60b0f2bdd2af514f3260c `)
          .then(res => res.json())
          .then(data => setData(data.hits))
          .catch(err => console.log(err))
    }
   
    const getButton = () => {
        fetchData(input)
    }
       
      useEffect(() => {
            getButton()
            fetchData("chicken")
      },[])
   
  

    const getInput = (e) => {
        setInput(e.target.value)
    }
    
    const enter = (e) => {
        if(e.code === "Enter"){
            getButton()
        }
    }
    

  return (
    <>
        <div className="main_container">
        <header>
            <h1> Recipe Finder </h1>
            <p> Find the perfect meal to dine upon</p>
        </header>
        <div className="input_box">
            <input type="text" id="input" value={input} onChange={getInput} onKeyPress={enter}/>
            <Button variant="contained" color="success" onClick={getButton}>Search</Button>
        </div>
        <div className="content_box">
            <div className="content" id="content">
                 <List data={data}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Search