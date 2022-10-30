// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGIfs } from "../hooks/useFetchGIfs";
// import { getGifs } from "../helpers/getGif";

export const GifGrid = ({ category }) => {
    
  const { images, isLoading } = useFetchGIfs( category );

  //console.log({ images, isloading });
  
  
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
          { 
            // images.map( image  => (
            //     <li key={ image.id }>{image.title}</li>
            // ))
            // images.map( ({ id, title })  => (
            //     <GifItem key={ id }/>
            // ))
            images.map( ( image )  => (
                <GifItem 
                    key={ image.id }
                    { ...image }
                />
            ))
          } 
        </div>
    </>
  )
}
