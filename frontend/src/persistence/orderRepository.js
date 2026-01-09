export function storeOrders(storeId, orders) {
    localStorage.setItem(storeId, JSON.stringify(orders));
} 

export function loadOrders(storeId) { 
    const data = localStorage.getItem(storeId);
    return data ? JSON.parse(data) : {};
} 