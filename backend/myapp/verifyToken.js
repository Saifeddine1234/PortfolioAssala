var jwt = require('jsonwebtoken');
const verifyToken = (req , res , next) => {
    const Token = req.headers['authorization']
    console.log('token is', Token)
    if(!Token){
        console.log('1111111111111111')
        res.status(403).send("ttttttttttttt")
    }else{
        
       const decodedToken = jwt.verify(Token , 'secretKey')
       req.decodedToken = decodedToken  
       console.log( decodedToken)

    }
    return next();
}
module.exports = verifyToken ;