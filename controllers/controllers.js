const openai = require("../openai/config")
const generateImage = async (req, res) => {
    console.log("REQ MADE", req.body);
    const {prompt, size, count} = req.body;
    try {
        const response = await openai.createImage({
            prompt,
            n: count,
            size: size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024"
        })

        console.log("IMG RESP", response);
        const images = response.data?.data?.images

        res.status(200).json({images})
    } catch (e) {
        res.status(400).json({message: `ERROR generating image - ${e.message}`})
    }
}

module.exports = {generateImage}