export function calculatePrice(price: number, height: number, width: number, count: number): number {
  console.log(price, height, width, count)
  const area = (height / 1000) * (width / 1000);
  const totalPrice = (price * area) * count;
  return Math.round(totalPrice * 100) / 100;
}
