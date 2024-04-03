import React, { Suspense, useEffect, useState } from "react";
import Search from "./../components/Search";
import ImageCard from "./../components/ImageCard";
import { createClient } from "pexels";
import { PEXEL_API_KEY } from "../../config";

function Home() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(0);
  const pexelClient = createClient(PEXEL_API_KEY);

  const initialfetchImages = () => {
    setLoader(1);
    pexelClient.photos.curated({ per_page: 9 }).then((responseData) => {
      setImages(responseData.photos);
      setLoader(0);
    });
  };

  const handleSearch = (s) => {
    setLoader(1);
    setImages([]);

    if (s) {
      pexelClient.photos
        .search({ query: s, per_page: 25 })
        .then((responseData) => {
          setImages(responseData.photos);
          setLoader(0);
        });
    } else {
      pexelClient.photos.curated({ per_page: 9 }).then((responseData) => {
        setImages(responseData.photos);
        setLoader(0);
      });
    }
  };

  useEffect(() => {
    initialfetchImages();
  }, []);


  return (
    <>
      {/* Search */}
      <Search searching={handleSearch} />
      {/* End Search */}

      {/* Masonry Cards */}
      <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {loader ? (
          <div
            role="status"
            className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
          >
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
        <div className="columns-3">
          {images &&
            images.map((image, index) => (
              <div key={index} className="mb-5">
                <Suspense fallback={<div>Loading</div>}>
                <ImageCard source={image} />
                </Suspense>
                
              </div>
            ))}
        </div>
      </div>
      {/* End Masonry Cards */}
    </>
  );
}

export default Home;
