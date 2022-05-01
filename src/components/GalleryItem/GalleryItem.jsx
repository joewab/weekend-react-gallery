import { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryItem({ image, updateLike }) {
    const [descriptionMode, setDescriptionMode] = useState(false);

    const toggleDescription = (e) => {
        e.preventDefault();
        setDescriptionMode(!descriptionMode);
    }

    const handleLike = (e) =>{
        e.preventDefault();
        updateLike(image.id);

    }


    if (descriptionMode === false) {
        return (
            <div className="gallery-item">
                <img src={image.path} className="img-thumbnail"></img>
                Likes: {image.likes}
                <button onClick={toggleDescription}>show description</button>
                <button onClick={handleLike}>Like</button>
            </div>
        )
    }
    else {
        return (
            <div className="description-area">
              <div className="description-box">
                {image.description}.
              </div>
                Likes: {image.likes}
                <button onClick={toggleDescription}>hide description</button>
                <button onClick={handleLike}>Like</button>
            </div>
        )
    }
}

export default GalleryItem;
