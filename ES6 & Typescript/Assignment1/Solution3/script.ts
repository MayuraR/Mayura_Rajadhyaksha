const id = 001;
const title = "Books";
const price  = 100;

const order = {
    id,
    title,
    price,
    printOrder (){ return this},
    getPrice(){return this.price}

}

order.printOrder();
order.getPrice();

let orderCopy = Object.assign({}, order);
console.log(orderCopy);