import { ImageLoader } from "./ApiCollection.jsx/ApiBuck";
import {useEffect, useState} from 'react';
export const useImageHook= (imageurl = [])=> {
    const [loaded, setLoaded] = useState(false)
    useEffect(()=> {
        ImageLoader(imageurl)
        .then((result)=>{
             setLoaded(true)
            if(result.status === "fulfilled"){
                console.log(`${imageurl} loaded successfully, : ${result.value}`)
            }else{
                console.log(`${imageurl} loading failed: ${result.value}`)
            }  
            })
        .catch(()=> setLoaded(true))
        .finally(()=> setLoaded(false))
        //eslint-disable-next-line
    },[])
    return loaded;
} 