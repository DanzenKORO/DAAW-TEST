import { useRef } from 'react';

const AddFishForm = (props) => {
    const nameInput = useRef(null);
    const priceInput = useRef(null);
    const statusInput = useRef(null);
    const descInput = useRef(null);
    const imageInput = useRef(null);

    const createFish = (event) => {
        event.preventDefault();
        const fish = { 
            name: nameInput.current.value, 
            price: parseInt(priceInput.current.value),
            status: statusInput.current.value, 
            desc: descInput.current.value, 
            image: imageInput.current.value.replace(/^.*[\\/]/, ""),
        };
        props.addFish(fish);
        event.currentTarget.reset(); //reset the form
    };

    return (
        <form className="fish-edit" onSubmit={createFish}>
            <input
            name="name"
            ref={nameInput}
            type="text"
            placeholder="Name"
            />
            <input
            name="price"
            ref={priceInput}
            type="number"
            placeholder="Price"
            />
            <select name="status" ref={statusInput}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
            </select>
            <textarea
            name="desc"
            ref={descInput}
            placeholder="Description"
            />
            <input
            name="image"
            ref={imageInput}
            type="file"
            placeholder="Image"
            />
            <button type="submit">Add fish</button>
        </form>
    );
  
};

export default AddFishForm;