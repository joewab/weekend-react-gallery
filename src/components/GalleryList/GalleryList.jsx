
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    console.log('galleryList: The Prop:', galleryList);
    return (
      <div id="image-grid">
        {galleryList.map((image) => {
          return <GalleryItem key = {image.id} image = {image}/>
        })}
      </div>
    )
  }


export default GalleryList