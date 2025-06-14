import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({title:"", content:""})
  
  const [isExpanded, setExpanded] = useState(false);

  function handleAdd(event) {
    const {name, value} = event.target;
    setNote(prevNote => ({...prevNote, [name]:value}))
  }

  function handleSubmit(event) {
    props.onAdd(note);  
    setNote({title:"", content:""});
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded? <input name="title" onChange={handleAdd} value={note.title}  placeholder="Title" /> : null }
        <textarea name="content" onChange={handleAdd} onClick={expand} value={note.content} placeholder="Take a note..." rows={isExpanded? 3:1} />
        <Fab onClick={handleSubmit}> <AddIcon/> </Fab>   
      </form>
    </div>
  );
}

export default CreateArea;
