import React, { useEffect, useRef, useState } from "react";

const ReactRef = () => {
    const [searchValue,setSearchVAlue] = useState(' ');
    const InputRef = useRef(null);
    // console.log("Input Ref = ",InputRef.current.value);
    useEffect(()=>{
        InputRef?.current?.focus();
    },[])
    return <div>
        <p>Google</p>
        <input ref={InputRef} type="text" value={searchValue} onChange={(e) => setSearchVAlue(e.target.value)}/>
        {searchValue}
    </div>
}

export default ReactRef;