import React from 'react'


const List = ({data}) => {
    
  return (
    <>
   {data.map((ele, indx) => {
    return <div className="box" key={indx} title=" Click to get Recipe">
        <a href={ele.recipe.shareAs} target="_blank" rel="noreferrer"> <img src={ele.recipe.image} /></a>
        <a href={ele.recipe.shareAs} target="_blank" rel="noreferrer"> <p> {ele.recipe.label} </p> </a>
    </div>
   })}
    </>
  )
}

export default List