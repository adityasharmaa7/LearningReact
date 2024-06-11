import React,{useState,useEffect} from "react";
// import Photos from "./Photos";
import { Link } from "react-router-dom";

const Albums = () => {
    const [albumData,setAlbumData] = useState([]);
    const [selectedAlbum,setSelectedAlbum] = useState("");
    const handleFetchAlbums = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await response.json();
        setAlbumData(data);
    }
    useEffect(()=>{
        handleFetchAlbums();
    },[]);
    console.log("Album Data :" , albumData);
    return <>
    <div>Albums</div>
    {albumData.map((album)=>{
        return <Link
        to={`photos/${album.id}`}
        // onClick={()=>setSelectedAlbum(album.id)} 
        style={{cursor:"pointer"}} 
        key={album.id}>
            <p>{album.id}:{album.title}</p>
        </Link>
    })}
    </>
}

export default Albums;