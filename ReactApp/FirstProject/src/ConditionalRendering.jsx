import React,{useState} from "react";

const ConditionalRendering = () => {
    const [value,checkValue] = useState(0);
    const handleValue = (e) => {
        checkValue(parseInt(e.target.value));
        console.log(e.target.value);
    }
    
    
    return (
        <div>
            <input type="text" onChange={handleValue} />
            <p>{value % 2 === 0 ? 'Even' : 'Odd'}</p>
        </div>
    )
}

export default ConditionalRendering;