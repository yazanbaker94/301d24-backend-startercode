'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');

// Endpoint for testing
const home=(req,res)=>{
// provide your logic here
}
// Call the coffee api here and return the results
const retreiveItemsController=(req,res)=>{
    // provide your logic here
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
    // provide your logic here
}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    // provide logic here
};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    // provide logic here
};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    // provide your logic here
};

module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemsController
};