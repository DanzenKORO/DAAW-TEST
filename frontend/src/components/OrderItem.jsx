import { formatPrice } from "../utils/formatPrice";

const OrderItem = (props) => {
  const divAStyle = {
    position: "absolute",
    left: "20px",
  };

  const divBStyle = {
    position: "absolute",
    right: "20px",
  };

  if (!props.fish) return null;

  const isAvailable = props.fish.status === "available";

  if (!isAvailable) {
    return (
      <li key={props.index}>
        Sorry {props.fish ? props.fish.name : "fish"} is no longer available
      </li>
    );
  }

  return (
    <li key={props.index}>
      <span>
        <div style={divAStyle}>
          {props.count} x {props.fish.name}
        </div>
        <div style={divBStyle}>
          {formatPrice(props.count * props.fish.price)}
        </div>
      </span>
    </li>
  );
};

export default OrderItem;