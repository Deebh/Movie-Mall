const jwt=require('jsonwebtoken')
const User=require('../models/user')

const auth= async(req,res,next)=>{
    try{
        const token = req.cookies['auth_token_2'];
        if (!token) {
            throw new Error('Authentication token is missing');
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'thisismyjwtsecret2');

        
        const user=await User.findOne({_id:decoded._id,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        req.user=user
        req.token=token
        next()
    }catch(e){
        res.redirect('/')
       
    }
}

module.exports=auth