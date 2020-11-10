const organization = {
    name: "XYZ",
    address: {
        name : 'XYZ',
        street : 'ABC',
        area : 'Bandra',
        landmark : 'Lilavati Hospital',
        pincode : 400050
    }
}

const {name, address} = organization;

const {name, street, area, landmark, pincode} = address;

console.log(pincode);