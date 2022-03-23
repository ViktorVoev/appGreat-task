import React from 'react';
import './card.css';
import picService from './services/picServices';
import { useEffect, useState } from 'react';


 function Card(){
        const idPic = window.location.pathname.split('/')[2];
        const [image, setImage] = useState({});
        
        useEffect(() => {
            picService.getCurrentPic(idPic).then((data) => {
                setImage(data)
            })
        }, []) 
        
        return(
            <div className='singlePic'>

                <img key={image?.id} src={image?.src?.large} alt={image?.alt}/>
                <h2>{image?.photographer}</h2>
                <p>{image?.alt}</p>
            </div>
        )
    }


export default Card;