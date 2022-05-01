import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        value={imageInput}
        onChange={(e) => { setImageInput(e.target.value) }}
        placeholder="image link" />
      <input
        value={descriptionInput}
        onChange={(e) => { setDescriptionInput(e.target.value) }}
        placeholder="description" />
      <button className= "btn btn-primary btn-block">Submit</button>
    </form>
  )
}

export default ImageForm;