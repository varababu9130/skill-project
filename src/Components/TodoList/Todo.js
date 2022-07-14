import React, { useState } from 'react'

const Todo = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState([]);

  const changeHandler = e => {
    setData(e.target.value);
  }
  const clickHandler = e => {
    if(!data) {
    }else {
      setInput([...input, data])
      setData("")
    }
  }
  // delete items

  const deleteHandler = (id) => {
    const updatedItems = input.filter((elem, index) => {
      return index !== id
    });
    setInput(updatedItems)
  }
  return (
    <>
        <div className="main-div">
            <div className='child-div'>
                <h2>Todo List</h2>
                <input value={data}
                 placeholder='Enter Something..'
                 onChange={changeHandler}
                 />
                <input onClick={clickHandler} type="submit" />
            </div>
            <div className='showItems'>
              {
                input.map((elem,index)=>{
                  return(
                    <div className='deleteItem' key={index}>
                      <h3>{elem}</h3>
                        <button onClick={()=>deleteHandler(index)}>Delete</button>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </>
  )
}

export default Todo