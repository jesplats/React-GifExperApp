//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs"; // Asegúrate de que esta función está bien importada
import { Gititem } from "./Gititem"; 
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ Category }) => {
  
  
   const {images,isLoading}=useFetchGifs(Category);

 
  return (
    <>

{isLoading && (<h2> Cargando... </h2>) }

      <h1>{Category}</h1> {/* ✅ Ahora mostrará la categoría correctamente */}
   <ol>
   {
    images.map((image)=>(
     <Gititem key={image.id}
      {...image} 
    
     />
    ))
   }
   </ol>
    </>
  );
};
