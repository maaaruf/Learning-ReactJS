import React, { useState } from 'react';

function MyComponent({ Name, Age, Profession}) {

    const [count, setCount] = useState(0);

    return <div>
        <p>Name: {Name}</p>
        <p>Profession: {Profession}</p>
        <p>Age: {Age}</p>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Counter</button>
        <br/>
      <p>Functional Component</p>
    </div>

}

export default MyComponent;