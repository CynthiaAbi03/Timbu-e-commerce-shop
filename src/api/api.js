import { BASE_URL, organizationId, appId, apiKey } from '../api/apiVariables2.js';

export const fetchProducts = async ({ page = 1, size = 10 } = {}) => {
    try {
        const url = `${BASE_URL}`;
        const params = new URLSearchParams({
            organization_id: organizationId,
            reverse_sort: false,
            page: page,
            size: size,
            Appid: appId,
            Apikey: apiKey,
        }).toString();

        const apiUrl = url + params;
        console.log(apiUrl, 'api url logged in api.js');
        const response = await fetch(apiUrl, {
            headers: {
                accept: 'application/json',

            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        if (response.status === 200) {
            const responseData = await response.json();
            console.log(responseData, 'logged in api.js');
            return responseData;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};



export const parser = (responseData) => {
    const items = responseData.items;
    let allProducts = [];

    for (let i = 0; i < items.length; i++) {
        let parsedDescription;
        try {
            parsedDescription = JSON.parse(items[i].description);
        } catch (error) {
            console.error(`Error parsing description for item ${items[i].unique_id}:`, error);
            console.error(items[i], 'this is the item')
            console.error('Invalid description:', items[i].description);
            continue;
        }

        const product = {
            name: items[i].name,
            description: parsedDescription.description,
            type: parsedDescription.type,
            category: parsedDescription.category,
            price: items[i].current_price[0]?.USD[0] || null,
            id: items[i].id,
            image1: items[i].photos.length > 0 ? `https://api.timbu.cloud/images/${items[i].photos[0].url}` : null,
            image2: items[i].photos.length > 1 ? `https://api.timbu.cloud/images/${items[i].photos[1].url}` : null
        };
        allProducts.push(product);
    }
    console.log(allProducts, 'logged in parser api.js');
    return allProducts;
};
