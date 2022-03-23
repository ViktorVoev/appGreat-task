import React from 'react';
import "./cards.css";
import { useEffect, useState } from "react";
import Picture from './picture';
import picService from './services/picServices';
import Logout from './Login/googleLogout';

function Cards() {

    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('Tigers');

    const searchInput = (e) => {
        setTimeout(() => {
            setQuery(e.target.value)
        }, 2000)
    };  

  useEffect(() => {
    picService.getAllPics(query).then((data) => {
      setImages(data.photos)
    })
  }, [query])

  
  console.log(query);
  return (
    <div className="allCards">
      <input placeholder='Search images' className='allCards' type='text' onChange={searchInput} />
      {images.map((image) => (
        <Picture key={image.id}  id={image.id} src={image.src}  />
      ))}
      <Logout />
    </div>
  );
}
export default Cards;