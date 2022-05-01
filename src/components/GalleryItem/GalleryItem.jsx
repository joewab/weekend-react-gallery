import { useState, useEffect } from 'react';

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
                <button className= "btn btn-primary btn-block" onClick={toggleDescription}>show description</button>
                <button className= "btn btn-primary btn-block" onClick={handleLike}>So Cool!</button>
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
                <button className= "btn btn-primary btn-block" onClick={toggleDescription}>hide description</button>
                <button className= "btn btn-primary btn-block" onClick={handleLike}>So Cool!</button>
                <button className= "btn btn-primary btn-block" onClick={handleDelete}>delete</button>
            </div>
        )
    }
}

export default GalleryItem;
