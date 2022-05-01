import { useState } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ImageForm({addImage}) {
  const [imageInput, setImageInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    let theNewImage = {
      path: imageInput,
      description: descriptionInput,
    }
    console.log(theNewImage);
    addImage(theNewImage);
  }

  return (
    <form className = "image-form">
      <TextField id="outlined-textarea"
        value={imageInput}
        onChange={(e) => { setImageInput(e.target.value) }}
        placeholder="image link" />
      <TextField fullWidth
          id="fullWidth"
        value={descriptionInput}
        onChange={(e) => { setDescriptionInput(e.target.value) }}
        placeholder="description" />
      <Button variant="text" onClick={handleSubmit}>Submit</Button>
    </form>
  )
}

export default ImageForm;