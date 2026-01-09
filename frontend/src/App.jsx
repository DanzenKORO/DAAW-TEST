//import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { storeFishesInFirebase, attachFishesChangeListener } from './persistence/fishRepository';
import { storeOrders, loadOrders } from './persistence/orderRepository';

import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import Fish from "./components/Fish";
import sampleFishes from "./data/sample-fishes";

const App = () => { 
  const [fishes, setFishes] = useState({});
  const [orders, setOrders] = useState({});

  let { storeId } = useParams();

  const addFish = (fish) => { 
    const new_fishes = { 
      ...fishes, 
      [`fish${Date.now()}`]: fish, 
    };
    setFishes({
      ...new_fishes, 
    });

    storeFishesInFirebase(storeId, new_fishes).catch((error) => {
      console.error("Failed to store fishes in Firebase:", error);
    });
  };

  const addOrder = (key) => { 
    const new_orders = { ...orders };
    new_orders[key] = new_orders[key] + 1 || 1; 
    setOrders({
      ...new_orders, 
    });

    storeOrders(storeId, new_orders);
  };

  const loadSampleFishes = () => {
    setFishes({
      ...sampleFishes,
    });

    storeFishesInFirebase(storeId, sampleFishes).catch((error) => {
      console.error("Failed to store fishes in Firebase:", error);
    });
  };

  useEffect(() => {
    if (!storeId) return;

    const detachFishesChangeListener = attachFishesChangeListener(
      storeId,
      (data) => setFishes({ ...data }),
      (err) => {
        console.error("Firebase subscription error:", err);
        setFishes({});
      }
    );

    return () => detachFishesChangeListener();
  }, [storeId]);

  useEffect(() => {
    const savedOrders = loadOrders(storeId);
    setOrders(savedOrders);
  }, [storeId]);
  
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map((key) => (
            <Fish
              key={key}
              index={key}
              details={fishes[key]}
              addOrder={addOrder}
            />
          ))}
        </ul>
      </div>
      <Order fishes={fishes} orders={orders} />
      <Inventory 
        addFish={addFish}
        loadSampleFishes={loadSampleFishes} 
      />
    </div>
  );
};

export default App; 