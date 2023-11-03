import React from "react";

const ButtonComponent = () => {

    const [count, setCount] = React.useState(0);

    const hadleCount = () => {
        setCount (count +1)
    }
    const hadleClean = () => {
        setCount (count -1)
    }

    return (
        <div>
            <div> Cuenta : {count}</div>
            <button onClick={hadleCount}> click</button>
            <button onClick={hadleClean}> click</button>
        </div>

    );
    };   

export default ButtonComponent;