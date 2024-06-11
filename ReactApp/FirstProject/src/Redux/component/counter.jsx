import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    console.log(count);
    const handleIncriment = () => {

    }
    const handleDecriment = () => {
        
    }
    return <>
    <button onClick={handleIncriment}>+</button>
    <span>{count}</span>
    <button onClick={handleDecriment}>-</button>

    </>
}

export default Counter;