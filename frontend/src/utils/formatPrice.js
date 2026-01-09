export function formatPrice(cents) {
    return (cents / 100).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
    });
}