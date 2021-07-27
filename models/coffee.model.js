'use strict';
const mongoose=require('mongoose');

const coffeeSchema=mongoose.Schema({
    title:String,
    ingredients:String,
    image_url:String,
});

const coffeeModel=mongoose.model('favcofees',coffeeSchema);

// const coffeeSeed=()=>{
//     const coffee=new coffeeModel({
//         title:'Latte',
//         description:'seeded coffee',
//         ingredients:'just coffee',
//         img:'https://www.healthifyme.com/blog/wp-content/uploads/2019/09/Black-coffee-feature-image.jpg'
//     })
//     coffee.save()
//     // console.log(coffee)
// }


class CoffeeClass {
    constructor(data){
        this.title=data.title,
        this.ingredients=data.ingredients
    }
}


module.exports=coffeeModel;
/*module.exports={
                coffeeModel,
                coffeeSeed
            };
*/
