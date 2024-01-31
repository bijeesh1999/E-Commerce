const bcrypt = require('bcrypt');
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken");
require("dotenv").config();
const admin = require("../../mongoDb/models/superAdminSchema")

mongoose.connect(process.env.MY_MONGODB,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});


const superAdmin=[
    {
        userName:"Bijeesh.B",
        emailId:"absbijeesh@gmail.com",
        password:"bijeesh@1999"
    }
]

const adminRegister=async(req,res)=>{

        const {email}=superAdmin[0].emailId

            const hashPass = await bcrypt.hash(superAdmin[0].password, 12);
            const superAdminRegister = {
                userName: superAdmin[0].userName,
                emailId: superAdmin[0].emailId,
                password: hashPass
            };
            await admin.deleteMany({});
           const hello= await admin.insertMany(superAdminRegister);
            const token=jwt.sign(
                {id:admin._id,email},process.env.MY_SECRET,
                {expiresIn:"10h"}
                )
            admin.token=token,
            admin.password=undefined

        }

adminRegister().then(()=>{
    mongoose.connection.close();
})


// ============================================================================================================

