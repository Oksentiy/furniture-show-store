import { SendFormData} from "components/pages";

export function sendOrderData(formData: SendFormData, token: string): void {
  const URL = `https://shyfonyer.shop/api/v1/cart_items?[cart_item]product_id=${formData.card_item.product_id}&[cart_item]quantity=${formData.card_item.quantity}&[cart_item]product_width=${formData.card_item.product_width}&[cart_item]product_length=${formData.card_item.product_length}&[cart_item]product_thickness_id=${formData.card_item.product_thickness_id}&[cart_item]product_color_id=${formData.card_item.product_color_id}`

  fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },

  })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

    })
    .catch(error => console.error(error));
}
