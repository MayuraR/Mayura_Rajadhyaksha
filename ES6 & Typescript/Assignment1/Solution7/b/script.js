"use strict";
var organization = {
    name: "XYZ",
    address: {
        name: 'XYZ',
        street: 'ABC',
        area: 'Bandra',
        landmark: 'Lilavati Hospital',
        pincode: 400050
    }
};
var name = organization.name, address = organization.address;
var name = address.name, street = address.street, area = address.area, landmark = address.landmark, pincode = address.pincode;
console.log(pincode);
