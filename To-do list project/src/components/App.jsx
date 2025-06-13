import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const[inputText, setInputText] = useState("")
  const [items, setItems] = useState([]);      

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleAddItem() {
    if (inputText.trim() !== "") {
      setItems(prevItems => [...prevItems, inputText])
      setInputText("") // Set input text to empty string again
    }
  }

  function handelDeleteItem(id) {
    setItems(prevItems => prevItems.filter((item, index) => index !== id))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        inputText={inputText}
        onInputChange={handleInputChange}
        onAddItem={handleAddItem}
      />
      {/* <div className="form">
        <input type="text" 
              value = {inputText}
              onChange={hanedleInputChange}/>
        <button onClick={handleAddItem}>
          <span>Add</span>
        </button>
      </div> */}
      <div>
        <ul>
          {/* <li> {items.map(toDoItem => (<li>{toDoItem}</li>))} </li> */}
          {items.map((toDoItem, index) => (<ToDoItem key={index} id={index} text={toDoItem} onChecked={handelDeleteItem} />))} 
        </ul>
      </div>
    </div>
  );
}

export default App;
