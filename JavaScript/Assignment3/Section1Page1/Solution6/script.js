function getResult(){

    var mayura = "{ firstName: 'Mayura', lastName: 'Rajadhyaksha'}";
    var mayura1 = eval("(" + mayura + ")");

    console.log(mayura1.firstName);

}