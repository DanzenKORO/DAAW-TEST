import { formatPrice } from '../utils/formatPrice';

const Fish = (props) => {
  const { image, name, price, desc, status } = props.details;
  const isAvailable = status === "available";

  return (
    <li className="menu-fish">
      <img
        src={window.location.origin + `/images/` + image}
        alt={name}
      />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button
        disabled={!isAvailable}
        onClick={() => props.addOrder(props.index)}
      >
        {isAvailable ? "Add to Order" : "Sold Out!"}
      </button>
    </li>
  );
};

export default Fish;