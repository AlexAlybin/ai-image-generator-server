const router = require("express").Router()
const {generateImage} = require("../controllers/controllers")

router.post("/generate-image", generateImage)
router.get("/generate-image", (req, res)=>{
    res.json({"message": "success"})
})

module.exports = router