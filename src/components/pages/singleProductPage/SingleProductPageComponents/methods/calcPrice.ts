export function calculatePrice(priceStr: string | number, height: number, width: number, count: number): number {
  const price = typeof priceStr !== "number" && parseFloat(priceStr);

  const area = (height / 1000) * (width / 1000);
  const totalPrice = (price * area) * count;
  return Math.round(totalPrice * 100) / 100;
}
