export function formatPrice(price: number): string {
  return price.toFixed(2);
}

export function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

export function calculateCartTotal(items: Array<{ price: number; quantity: number }>): number {
  return items.reduce((sum, item) => sum + calculateTotal(item.price, item.quantity), 0);
}