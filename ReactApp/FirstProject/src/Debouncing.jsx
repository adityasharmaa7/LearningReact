import React, { useEffect, useRef, useState } from "react";

const debounce = (fn,delay) => {
    let timeOutId ;
    return function (...args) {
        if(timeOutId){
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(()=> fn(...args),delay);
    }
}

const Debounce = () => {
    const [search,setSearch] = useState(' ');
    const handleSearch = (searchText) => {
        console.log(searchText);
    }
    const debouncedSeaech = useRef(debounce(handleSearch,500)).current;
    useEffect(()=>{
        if(search){
            debouncedSeaech(search);
        }
    },[search])
    return <input 
    type="text" 
    value={search} 
    onChange={(e)=> setSearch(e.target.value)}/>
}

export default Debounce;