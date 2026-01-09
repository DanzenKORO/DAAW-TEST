import OrderItem from "./OrderItem";
import { formatPrice } from "../utils/formatPrice";

const Order = (props) => {
  const total = Object.keys(props.orders).reduce((prevTotal, orderId) => {
    const fish = props.fishes[orderId];
    const count = props.orders[orderId];
    const isAvailable = fish && fish.status === "available";

    if (isAvailable) {
      return prevTotal + (count * fish.price);
    }
    return prevTotal;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <ul className="order">
        {Object.keys(props.orders).map((key) => (
          <OrderItem
            key={key}
            index={key}
            fish={props.fishes[key]}
            count={props.orders[key]}
          />
        ))}
      </ul>
      <div className="total">
        Total: <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

export default Order;