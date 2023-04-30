import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db = process.env.DATABASE;


//mongoose.set('strictQuery', false);

const mongoConnection = mongoose.connect(db , {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then( ()=>{
  console.log("Connection succssful");
}).catch((err) =>{
  console.log(err);
});

//module.exports = mongoConnection;
export default mongoConnection;