const express = require("express");
const { ProductModel } = require("../Models/product.model");
require("dotenv").config();


const productRoutes = express.Router();


productRoutes.get("/",async (req,res) => {
    
    try {
        const products = await ProductModel.find();
        res.send(products)
    } 
    
    catch (err) {
        console.log(err)
            res.send({"Message":"Something Went Wrong, Try After Sometimes"})
    }
})


productRoutes.post("/add", async(req,res) => {

    try {
        const payload = req.body;
        const product = new ProductModel(payload);
        await product.save()
        console.log("added successfully")
        res.send({"Message":"Data Added Successfully", product})
    } 
    
    catch (err) {
        console.log("error while adding new movie data")
        res.send({"Message":"Error in Adding Data"})
    }
})


productRoutes.patch("/edit/:productID", async(req,res) => {

    try {
        const productID = req.params.productID;
        const payload = req.body;
        await ProductModel.findByIdAndUpdate(productID,payload);
        res.send({"Message": "Edited Successfully", payload})
    } 
    
    catch (err) {
        console.log(err)
        res.send({"Message":"Error while editing Data"})
    }
})


productRoutes.delete("/delete/:productID", async(req,res) => {

    try {
        const productID = req.params.productID;
        await ProductModel.deleteOne({_id:productID});
        res.send({"Message":"Deleted Successfully"})
    } 
    
    catch (err) {
        console.log(err)
        res.send({"Message":"Error while editing Data"})
    }
})

module.exports = { productRoutes };

