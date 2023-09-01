import React, { useState } from 'react';

// function App() {
//     const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

//     const addItem = () => {
//         const newItem = `New Item ${items.length + 1}`;
//         setItems([...items, newItem]);
//     };

//     return (
//         <div>
//             <h1>Dynamic Webpage with React</h1>
//             <button onClick={addItem}>Add Item</button>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;

// function App() {

//   return (
//     <>
//       hello world
//     </>
//   )
// }

// export default App

import Cat from './Cat.jsx'
import Photo from './Photo.jsx'

function App() {

    const [sw, setSw] = useState(true);
    const [count, setCount] = useState(0);

    return (
        <>
            <div style={{display:'gird', placeItems:'center'}}>
                <h1>hello world</h1>
            </div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
            <br></br><button onClick={() => setSw(!sw)}>Click!</button>
            { sw ? <Cat /> : <Photo /> }
        </>
    )
}

export default App