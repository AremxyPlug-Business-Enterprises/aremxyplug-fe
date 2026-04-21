import { ImageLoader } from "./ApiCollection.jsx/ApiBuck";
import {useEffect, useState} from 'react';
export const useImageHook= (imageurl = [])=> {
    const [loaded, setLoaded] = useState(false)
    useEffect(()=> {
        ImageLoader(imageurl)
        .then((result)=>{
             setLoaded(true)
     
            })
        .catch(()=> setLoaded(true))
        .finally(()=> setLoaded(false))
        //eslint-disable-next-line
    },[])
    return loaded;
} 