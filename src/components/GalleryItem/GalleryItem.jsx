import { useState, useEffect } from 'react';


function GalleryItem({ image }) {
    const [descriptionMode, setDescriptionMode] = useState(false);

    const toggleDescription = (e) => {
        e.preventDefault();
        setDescriptionMode(!descriptionMode);
    }

    const addLike = (e) => {
        e.preventDefault();

    }

    if (descriptionMode === false) {
        return (
            <div className="gallery-item">
                <img src={image.path}></img>
                Likes: {image.likes}
                <button onClick={toggleDescription}>show description</button>
                <button onClick={addLike}>Like</button>
            </div>
        )
    }
    else {
        return (
            <div className="gallery-item">
                {image.description}.
                <button onClick={toggleDescription}>hide description</button>
                <button onClick={addLike}>Like</button>
            </div>
        )
    }
}

export default GalleryItem;
