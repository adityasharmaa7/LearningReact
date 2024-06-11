import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";

const Photos = (props) => {
    // const {albumId} = props;
    const {id} = useParams();
    // console.log("Id: ",id )
    const [photoData,setPhotoData] = useState([]);
    const handleFetchPhotos =async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data  = await response.json();
        const filterData = data.filter((d)=> d.albumId === parseInt(id));
        setPhotoData(filterData);
        console.log("Photo Data :" , filterData);
    }
    useEffect(()=>{
        handleFetchPhotos();
    },[id])
    return <> 
    <div>Photos {id}</div>
    {photoData.map((photo)=>{
        return <img key={photo.id} src={photo.url} alt={photo.title} />
    })}
    </>
}

export default Photos;