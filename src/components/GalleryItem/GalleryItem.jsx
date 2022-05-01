import { useState, useEffect } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function GalleryItem({ image, updateLike, deletePost }) {
    const [descriptionMode, setDescriptionMode] = useState(false);

    const toggleDescription = (e) => {
        e.preventDefault();
        setDescriptionMode(!descriptionMode);
    }

    const handleLike = (e) =>{
        e.preventDefault();
        updateLike(image.id);

    }

    const handleDelete = (e) =>{
        e.preventDefault();
        deletePost(image.id);

    }


    if (descriptionMode === false) {
        return (
            <div className="gallery-item">
                <img src={image.path} className="img-thumbnail"></img>
                Cool Rating: {image.likes}
                <Button variant="outlined" onClick={toggleDescription}>show description</Button>
                <Button variant="outlined" onClick={handleLike}>So Cool!</Button>
                <button className= "btn btn-primary btn-block" onClick={handleDelete}>delete</button>
            </div>
        )
    }
    else {
        return (
            <div className="description-area">
              <div className="description-box">
                {image.description}.
              </div>
                Cool Rating: {image.likes}
                <Button variant="outlined" onClick={toggleDescription}>hide description</Button>
                <Button variant="outlined" onClick={handleLike}>So Cool!</Button>
                <button className= "btn btn-primary btn-block" onClick={handleDelete}>delete</button>
            </div>
        )
    }
}

export default GalleryItem;
