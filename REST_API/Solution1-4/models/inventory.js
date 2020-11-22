const { request } = require("express")
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    name:{
        type: String,
        required : [true, 'Name field required']
    },
    quantity : {
        type : Number
    }
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;