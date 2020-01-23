const axios = require('axios');

module.exports = {
    async index(request, response) {
        //const devs = await Dev.find();

        //return response.json(devs);
    },

    async store (request, response) {
        
        const apiResponse = await axios.get(`https://api.hgbrasil.com/finance/stock_price?key=b58ffea1&symbol=bidi4`);

        //const {price, name, symbol} = apiResponse.data;

        return response.json(apiResponse.data);
    }
}