const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const jwt=require("jsonwebtoken");
require('dotenv').config();
const dbConnection=require("./mongoDb/databaseConnection");
const verify=require("./controllers/middleWares/jwtAuthToken");

const app=express();
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

app.use("/products",require("./routers/productRouter"));
app.use("/categories",require("./routers/categoryRouter"));
app.use("/seller",require("./routers/sellerRouter"));
app.use("/user",require("./routers/userRouter"));
app.use("/payProduct",require("./routers/paymentRouter"));


app.use('/uploads',express.static(__dirname + '/uploads'));

app.get("/hello",(req,res)=>{
    
    const {token} = req.cookies; // Access the 'token' property directly from req.cookies
    console.log(req.cookies, token);

    if (!token) {
        return res.status(404).send("Please login first");
    }
        res.send("welcome to the website")

})



const port=process.env.PORT||2000;
console.log(port);
app.listen(port,()=>{
    dbConnection();
    console.log(`http://localhost:${port}`);
})








