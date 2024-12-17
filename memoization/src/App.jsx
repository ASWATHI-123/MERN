import { useState } from "react";
import ProductsList from "./ProductsList";

function App() {
    // const [count, setCount] = useState(0);

    // const countIncrement = () => {
    //     setCount(count + 1);
    // };

    // console.log(count);
    console.log("rendered");
    const [products] = useState(['apple','orange','mango']);

    return (
        <div className="App">
            <ProductsList products = {products}/>
            {/* <h2>Count: {count}</h2>
            <button onClick={countIncrement}>Increment</button> */}
        </div>
    );
};

export default App;
