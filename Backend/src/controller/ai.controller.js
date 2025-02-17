const aiService = require('../services/ai.service')
module.exports.getResponse = async (req, res) => {

    
    const code = req.body.code;

    if(!code){
        return res.status(400).send("Code Required");
    }

    const response= await aiService(code);

    res.send(response);
}

//Takes code as input from the user
