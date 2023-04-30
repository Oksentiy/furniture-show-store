const axios = require('axios');

export async function getCompany(id:string) {
  try {
    const response = await axios.get(`https://shyfonyer.shop/api/v1/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

