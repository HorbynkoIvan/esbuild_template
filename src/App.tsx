import React from "react";
import {useState} from "react";
import "./index.css";
import Gallery from './images/gallery.png';

const App = () => {
    const [count, setCount] = useState<number>(111)

    return (
        <>
            <div>Hello world</div>
            <img src={Gallery} alt=""/>
            <h1>value: {count}</h1>
            <button onClick={() => setCount(count + 1)}>setCount</button>
        </>

    )
}

export default App;
