import React,{useState,useEffect} from "react";

const FOne = (props) => {
    const {diff} = props;
    const [counter,setCounter] = useState(1);
    const handleIncriment = () =>{
        setCounter((prev) => prev + diff);
    }
    const handleDecriment = () =>{
        setCounter((prev) => prev - diff);
    }
    useEffect(()=>{
        console.log("Hello useEffect!");
    },[counter])
    return <div>
        <button onClick={handleIncriment}>+</button>
        <span>{counter}</span>
        <button onClick={handleDecriment}>-</button>
    </div>
}

export default FOne;