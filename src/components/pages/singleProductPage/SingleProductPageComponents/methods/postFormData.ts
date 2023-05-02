import { SendFormData} from "components/pages";

// export function sendOrderData(formData: SendFormData): void {
//   const apiUrl = 'https://shyfonyer.shop/api/v1/cart_items';
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

export function sendOrderData(formData: SendFormData): void {
  const URL = `https://shyfonyer.shop/api/v1/cart_items?[cart_item]product_id=${formData.card_item.product_id}&[cart_item]quantity=${formData.card_item.quantity}&[cart_item]product_width=${formData.card_item.product_width}&[cart_item]product_length=${formData.card_item.product_length}&[cart_item]product_thickness_id=${formData.card_item.product_thickness_id}&[cart_item]product_color_id=${formData.card_item.product_color_id}`
  // const apiUrl = `https://shyfonyer.shop/api/v1/cart_items?product_id=${formData.card_item.product_id}&quantity=${formData.card_item.quantity}&product_width=${formData.card_item.product_width}&product_length=${formData.card_item.product_length}&product_thickness_id=${formData.card_item.product_thickness_id}&product_color_id=${formData.card_item.product_color_id}`;
  const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOSwiZXhwIjoxNjgzNjI2NzgxfQ.GldrapI-H8BYJfTMuJiuqSjjx4Nf0iY9AqkvzOOZ41c'

  fetch(URL, {
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


// import axios from 'axios';
//
// export const sendOrderData = async () => {
//   const url = 'https://shyfonyer.shop/api/v1/cart_items';
//   const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOSwiZXhwIjoxNjgzNjI2NzgxfQ.GldrapI-H8BYJfTMuJiuqSjjx4Nf0iY9AqkvzOOZ41c'
//
//   const params = {
//     cart_item: {
//       product_id: 26382,
//       quantity: 1,
//       product_width: 100,
//       product_length: 1000,
//       product_thickness_id: 0,
//       product_color_id: 0,
//     },
//   };
//
//   const headers = {
//     Authorization: `Bearer ${TOKEN}`,
//   };
//
//   try {
//     const response = await axios.post(url, params, { headers });
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };