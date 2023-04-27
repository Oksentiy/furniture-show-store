import { SendFormData} from "components/pages";

// export async function sendCartData( cartItem: SendFormData): Promise<any> {
//   const response = await fetch('http://164.90.237.173/api/v1/cart_items', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${TOKEN}`
//     },
//     body: JSON.stringify({
//       cart_item: {
//         product_id: cartItem.card_item.product_id,
//         quantity: cartItem.card_item.quantity,
//         product_width: cartItem.card_item.product_width,
//         product_length: cartItem.card_item.product_length,
//         product_thickness_id: cartItem.card_item.product_thickness_id,
//         product_color_id: cartItem.card_item.product_color_id
//       }
//     })
//   });
//
//   const data = await response.json();
//   console.log(data)
//   return data;
// }

// export function sendCartData(formData: SendFormData): void {
//   const apiUrl = 'http://164.90.237.173/api/v1/cart_items';
//   const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwiZXhwIjoxNjgzMDMyNDA2fQ.6dJperyKvOjQzwzUNP2J3Zl3f40iOG2A6KBSsJ52GPE'
//
//   fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${TOKEN}`
//     },
//     body: JSON.stringify(formData)
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // handle response data here
//     })
//     .catch(error => console.error(error));
// }

export function sendCartData(formData: SendFormData): void {
  const apiUrl = `http://164.90.237.173/api/v1/cart_items?product_id=${formData.card_item.product_id}&quantity=${formData.card_item.quantity}&product_width=${formData.card_item.product_width}&product_length=${formData.card_item.product_length}&product_thickness_id=${formData.card_item.product_thickness_id}&product_color_id=${formData.card_item.product_color_id}`;
  const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwiZXhwIjoxNjgzMDMyNDA2fQ.6dJperyKvOjQzwzUNP2J3Zl3f40iOG2A6KBSsJ52GPE'

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
    // body: JSON.stringify(formData)
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
      // handle response data here
    })
    .catch(error => console.error(error));
}