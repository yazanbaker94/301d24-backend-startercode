'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');
// https://coffeepedias.herokuapp.com/coffee-list/
// Endpoint for testing
const home=(req,res)=>{
res.status(200).send('hey')
}
// Call the coffee api here and return the results
const retreiveItemController=(req,res)=>{
    axios.get(`https://coffeepedias.herokuapp.com/coffee-list/`).then(result => {
        const newArray = result.data.map(element => {
            return new CoffeeClass(element)
        })
        res.status(200).send(newArray)
    })
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
    coffeeModel.find({}, (error, result) => {
        res.status(200).send(result)
    })
}
// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    const {title, ingredients, image_url} = req.body

    const newCoffee = new coffeeModel({
        title:title,
        ingredients:ingredients,
        image_url:image_url
    })
    newCoffee.save()
};

// update coffee from MongoDB
const updateItemController=(req,res)=>{
    const id = req.params.id
    const {title, ingredients, image_url} = req.body

    coffeeModel.find({}, (error, result) => {
        result.map((element, index) => {
            if(index == id) {
                element.title=title,
                element.ingredients=ingredients,
                element.image_url=image_url
            }
            element.save()
        })
        res.send(result)
    })

};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    const id = req.params.id

    coffeeModel.deleteOne({_id:id}, (error, result) => {
        coffeeModel.find({}, (error, result) => {
            res.send(result)
        })
    })

};

class CoffeeClass {
    constructor(data){
        this.title=data.title,
        this.ingredients=data.ingredients,
        this.image_url=data.image_url
    }
}


module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    retreiveItemController
};