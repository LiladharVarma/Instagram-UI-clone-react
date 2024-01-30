import Card from "./Card";
import React, { useState, useEffect } from "react";
import Images from "./imagesfile";

function ExplorePage({ state }) {
  const [data, setData] = useState([]);
  const [apiAvailable, setApiAvailable] = useState(0);

  const accessKey = `TTlrYf7j3lfKBuBmgctsRelhEH80a-MzXtopjt8F5T8`;
  let url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;

  // if (props.isClicked === true) {
  //   url = `https://api.unsplash.com/photosphotos?query= ${props.searchFor}client_id=${accessKey}&count=30`;
  // }

  useEffect(() => {
    fetch(url)
      .then((response) => {
        setApiAvailable(response.status);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        console.log(result[0].urls.raw);
        setData(result);
      });
  }, [state]);
  console.log("state from explore page compoenent ", state);

  function createCard(item , index) {
    return <Card imgUrl={item.urls.regular} id={index} />;
  }

  return (
    
    <div className=" absolute left-60 text-white w-[81%] h-auto columns-3 gap-1 max-sm:left-0 max-sm:w-full md:left-20 md:w-auto 3xl:left-60">
      {/* {Images.map(createCard)} */}
      {data.map(createCard)}
    </div>
  );
}

export default ExplorePage;
