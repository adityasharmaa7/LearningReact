import React, { useState } from 'react';

// Parent Component
const ParentComponent = () => {
  const [parentMessage, setParentMessage] = useState('Hello from Parent');
  const [parentMessage2,setParentMessage2] = useState("Hello from Parent2");

  return <Child message={parentMessage} message2={parentMessage2} />;
};

// Child Component
const Child = ({ message , message2}) => {
  const [childMessage, setChildMessage] = useState('Hello from Child');

  return (
    <div>
      <p>{message}</p>
      <p>{message2}</p>
      <p>{childMessage}</p>
    </div>
  );
};


export default ParentComponent;
