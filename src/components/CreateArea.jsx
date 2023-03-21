import React, { useState } from "react";
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [khwari, setkhwari] = useState(true)
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function currentState(){
   setkhwari(false)
  }

  return (
    <div>
      <form className="create-note">
        {khwari === false ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
        onClick={currentState}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={khwari === false? "3" : "1"}
        />
        <Zoom in= {khwari===true ? false: true}>
        <Fab onClick={submitNote}><AddToQueueIcon/></Fab>
</Zoom>      
      
      </form>
    </div>
  );
}

export default CreateArea;
