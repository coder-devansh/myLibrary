import user from "../model/user.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Register
export const Register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username,email, password: hashed });
  await user.save();
  res.send("User registered");
};

// Login
export const Login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.send("something is missing")
  }
  const User = await user.findOne({ email });
  if (!User) {  
    return res.status(401).send("register first");
  }
   const ispass = await bcrypt.compare(password, User.password)
   if(!ispass){
    return res.send("incorrect email or password")
   }
  const token = jwt.sign({ id: User._id, username:User.name },  process.env.SECRET_KEY);
  res.json({ token });
};

// Middleware
export const auth = (req, res, next)=> {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.send("not logged in");
  }
}
