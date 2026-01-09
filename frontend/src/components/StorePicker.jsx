import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StorePicker = () => {
    const myInput = useRef(null);
    const navigate = useNavigate();

    const goToStore = (e) => {
        e.preventDefault();
        console.log(myInput.current.value);
        const storeName = myInput.current.value;
        navigate(`/store/${storeName}`);
    };

    useEffect(() => {
        console.log("Mounted");
    });

    return (
    <React.Fragment>
        <p>Sibling of FORM. It works due to react.fragment</p>
        <form className="store-selector" onSubmit={goToStore}>
        <h2>Please enter a store</h2>
        <input
            type="text"
            ref={myInput}
            required
            placeholder="Store name"
            defaultValue="fish-store-1"
        />
        <button type="submit">Visit store</button>
        </form>
    </React.Fragment>
    );
};

export default StorePicker;