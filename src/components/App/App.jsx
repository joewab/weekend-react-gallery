import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import ImageForm from '../ImageForm/ImageForm';

function App() {
  useEffect(() => {
    getImages();
  }, [])

  const [galleryList, setGalleryList] = useState([]);

  const getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery list broke:', error);
    })
  }

  const addImage = (newImage) => {
        
    axios({
      method: 'POST',
      url: '/gallery',
      data: newImage
    }).then((response) => {
     getImages();
    }).catch((error) => {
      console.log('POST /list broke:', error);
    })
  
  }

  const updateLike = (imageId) => {
    console.log('this will update!');
    axios({
        method: 'PUT',
        url: `/gallery/like/${imageId}`
    }) .then(function(response) {
        console.log(response);
        getImages();
    }) .catch(function(error){
        console.log(error);
    })

}

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">The Nakasendo</h1>
      </header>
      <p>Stations:</p>
      <>
          <ImageForm addImage={addImage} />
      </>
     <GalleryList galleryList={galleryList} updateLike={updateLike}/>
    </div>
  );
}

export default App;