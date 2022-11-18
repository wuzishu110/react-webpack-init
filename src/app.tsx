import React from "react";
import Button from './components'

export default function App() {
    function handleClick() {
        alert('btn click');
    }
    return <div>
        <Button label="这是个按钮" onClick={handleClick} />
    </div>
}