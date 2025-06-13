import React from "react"

function InputArea(props) {
    return (    
        <div className="form">
            <input
            type="text"
            value={props.inputText}
            onChange={props.onInputChange}
            />
            <button onClick={props.onAddItem}>
            <span>Add</span>
            </button>
        </div>
    );
}
export default InputArea;