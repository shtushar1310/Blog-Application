import jwt from 'jsonwebtoken'

export const generateToken=async(userData)=>{
  const decode= await jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:"1d"})
  return decode;
}

export const jwtMiddleware=(req,res,next)=>{
    const authorization=req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"token not found'"})
    }
    const token=req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(401).json({error:"unauthorized"})
    }
     try {
        //verify the jwt token 
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        //attach user information to the request object
        req.user=decoded
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error:"Invalid Token"})
        
    }
}
