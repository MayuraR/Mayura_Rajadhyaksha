var id = 001;
var title = "Books";
var price = 100;
var order = {
    id: id,
    title: title,
    price: price,
    printOrder: function () { return this; },
    getPrice: function () { return this.price; }
};
console.log(order.printOrder());
console.log(order.getPrice());



var orderCopy = Object.assign({}, order);
console.log(orderCopy);
