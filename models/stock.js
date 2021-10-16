const mongoose = require('mongoose')


const StockSchema =  new mongoose.Schema({
  products:{type:String,required:true},
  items:{type:Number,required:true},
 price:{type:Number,required:true}

},{timestamps:true})

module.exports = mongoose.model('Stock',StockSchema)