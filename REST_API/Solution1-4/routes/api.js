var express = require('express');

var router = express.Router();
var Inventory = require('../models/inventory');

//Done to add data
router.post('/inventory',(request, response, next) =>{
    Inventory.create(request.body).then((inventory) =>{
        response.send(inventory);
    }).catch(next);
});


//get all the inventory
//Solution 1.a.
router.get('/inventory', function(request, response){
    Inventory.find({}, (err, inventory) => {
        response.send(inventory);
    });
});


//Solution 1.b.
router.get('/inventory/:name', function(request, response, next){
    Inventory.findOne({name:request.params.name}).then((inventory) => {

        response.send(inventory);

    }).catch(next);
});


//Solution 2.a
router.put('/inventory',(request, response, next) =>{
    Inventory.collection.drop();
    Inventory.insertMany(request.body).then((inventory) => {
        response.send(inventory);
    }).catch(next);
});


//Solution 2.b
router.put('/inventory/:name',(request, response, next) =>{
    Inventory.findOneAndReplace({name : request.params.name}, request.body).then(() => {
        response.send('Done');
    }).catch(next);
    
});

//Solution 3
router.post('/inventory',(request, response,next) =>{
    Inventory.create(request.body).then((ninja) =>{
        response.send(ninja);
    }).catch(next);
});

//Solution 4.a.
router.delete('/inventory',(request, response,next) =>{
    Inventory.collection.drop().then(() =>{
        response.end("deletion successful");
    }).catch(next);
});


//Solution 4.b.
router.delete('/inventory/:name',(request, response) =>{
    Inventory.remove({name: request.params.name}).then(response.end("item removed"));
});


module.exports = router;