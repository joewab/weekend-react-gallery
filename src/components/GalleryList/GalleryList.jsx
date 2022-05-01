
import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList({galleryList, updateLike}) {


    console.log('galleryList: The Prop:', galleryList);
    return (
      <div id="image-grid">
        {galleryList.map((image) => {
          return (
        <div key = {image.id}>
          <GalleryItem key = {image.id} image = {image} updateLike = {updateLike}/>
        </div>
          )
        })}
      </div>
    )
  }


export default GalleryList