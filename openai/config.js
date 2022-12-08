const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.API_KEY
});

console.log("API KEY", process.env.API_KEY);
const openai = new OpenAIApi(configuration);

module.exports = openai