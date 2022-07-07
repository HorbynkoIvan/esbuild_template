import {useState} from "react";

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>Hello world</div>
            <h1>value: {count}</h1>
            <button onClick={() => setCount(count + 1)}>setCount</button>
        </>

    )
}

export default App;
