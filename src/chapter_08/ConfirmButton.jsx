import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleCofirm=() => {
        setIsConfirmed((prevISConfirmed)=>!prevISConfirmed);
    };
    return (
        <button onClick={handleCofirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}
export default ConfirmButton;