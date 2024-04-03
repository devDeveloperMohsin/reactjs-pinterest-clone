import React, { useEffect, useState } from "react";

function Collection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let collection = localStorage.getItem("collection");
    collection = JSON.parse(collection);
    if (collection) {
      setImages(collection);
    }
  }, []);

  return (
    <>
    <h2 className="text-3xl font-bold mb-5">Collection</h2>
      <div className="columns-4">
        {images &&
          images.map((image, index) => (
            <div key={index} className="mb-5">
              <img src={image} alt="" className="max-w-full w-full" />
            </div>
          ))}
      </div>
    </>
  );
}

export default Collection;
