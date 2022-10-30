import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';

export const useFetchGIfs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        // getGifs( category )
        //     .then( newimages => setImages( newImages ));
        getImages();
    }, [])

    return{
        // images: images,
        images,
        isloading: isLoading,
    }
}
