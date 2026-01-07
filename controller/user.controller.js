import { User } from "../models/userSchema.js";

export const Signup = async (req, res) => {
  try {
    const { email, password, username, bio } = req.body;
    const emailCheck = await User.findOne({ email: email });
    if (emailCheck) {
      return res
        .status(401)
        .json({ message: "user already exists with this mail" });
    }
    const user = await User.create({
      username,
      email,
      password,
      bio,
    });

    const response = await user.save();
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};


export const login=async(req,res)=>{
    try {
         const {email,password}=req.body;
         const emailFind=await User.findOne({email:email,password:password})
         if(!emailFind){
            return res.status(404).json({message:"invalid credential email or password is incorrect"});
         }
         res.status(201).json({login:"login successfully"})

        
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: error });
    }
}

export const Refresh = async (req, res) => {}

export const Logout=async(req,res)=>{
    try {
        res.status(200).json({message:"logout successfully"})   
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: error });
    }
} 
    

