// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/GetGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    // // useEffect(() => {
    // //     getGifs( category ).then( newImages => setImages(newImages) );
    // // }, []); // El array son las dependencias. Si esta vacio quiere decir que solo se jecuta la primera vez

    // const getImages = async() => {
    //     setImages(await getGifs( category ));
    // }
    // useEffect(() => {
    //   getImages();
    // }, []);

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {/* {
                isLoading
                ? (<h2>Cargando...</h2>)
                : null
            } */}
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                { images.map( (image) => <GifItem  key={image.id} image={image} /> )}
            </div>
        </>
  )

}
