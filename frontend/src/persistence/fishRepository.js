import { db } from "./firebase"; 
import { onValue, ref, set, off } from "firebase/database"; 

export async function storeFishesInFirebase(storeId, newfishes) {
    await set(ref(db, storeId), {
        fishes: newfishes, 
    });
};

export function attachFishesChangeListener(storeId, onDataFunction, onErrorFunction) {
    const fishesRef = ref(db, `${storeId}/fishes`);
    
    const handleDataChange = (snapshot) => { 
        const data = snapshot.val();
        onDataFunction(data ?? {}); //nullish coalescing operator
    };
 
    // Attach the listener
    onValue(fishesRef, handleDataChange, onErrorFunction);
    // Return cleanup function to detach the "value" listener
    return function detachFishesChangeListener() {
        off(fishesRef, "value", handleDataChange);
    };
};