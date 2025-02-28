import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     getGifs( category ).then( newImages => setImages(newImages) );
    // }, []); // El array son las dependencias. Si esta vacio quiere decir que solo se jecuta la primera vez

    const getImages = async() => {
        setImages(await getGifs( category ));
        setIsLoading(false);
    }

    useEffect(() => {
      getImages();
    }, []);

    return {
        // images: images, 
        images, // Si la variable tiene el  mismo nombre se puede poner asi
        //isLoading: isLoading
        isLoading
    }
}
