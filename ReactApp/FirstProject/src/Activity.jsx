import React, { useState } from "react";

const Matrix = () => {
    const [numberOfRows,setNumberOfRows] = useState('');
    const [numberOfColumns,setNumberOfColumns] = useState('');
    const handleRows = (e) => {
        console.log("Rows = " ,e.target.value);
        setNumberOfRows(e.target.value)
    }
    const handleColumns = (e) => {
        console.log("Columns = " ,e.target.value);
        setNumberOfColumns(e.target.value)
    }
    const getRowAndColumn = () => {
        let rows = numberOfRows;
        let columns = numberOfColumns;
        // let matrix = rows * columns;
        // console.log("Matrix = ",matrix);
        
    }
    return <>
    <input type="number" value={numberOfRows} onChange={handleRows} />
    <input type="number" value={numberOfColumns} onChange={handleColumns}/>
    <button onClick={getRowAndColumn}>Generate</button>
    </>
}

export default Matrix;