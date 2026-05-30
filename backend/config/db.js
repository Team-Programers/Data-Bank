import mongoose from "mongoose";
async function connectDb() {
    try{
        await mongoose.connect(process.env.dburl)  
        console.log("connected to DB");
        

    }catch(err){
        console.log(err)
    }
    
}
export default connectDb