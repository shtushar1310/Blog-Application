import { User } from "../models/userSchema.js";
import { generateToken } from "../middleware/jwt.middleware.js";
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
         const emailFind=await User.findOne({email:email})
        if(!email || (!emailFind.comparePassword(password))){
          res.status(404).json({message:"invalid credential email or password"})
        }
          const payload={
            id:emailFind.id,
            email:emailFind.email
          }
          const token=await generateToken(payload)




        res.status(201).json({message:"login successfully to your account",token:token})

        
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: error });
    }
}

export const Refresh = async (req, res) => {}

 
   
export const logout = (req, res) => {
  // Optional: You can log this event to the console or database
  // console.log(`User ${req.user._id} logged out.`);

  // Send a success response. 
  // The client relies on this signal (or just the button click) to delete the token.
  res.status(200).json({
    success: true,
    message: "User logged out successfully."
  });
};

