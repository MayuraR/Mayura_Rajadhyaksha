function getResult(){

    var mayura = { firstName: "Mayura", lastName: "Rajadhyaksha" };
    console.log(mayura.firstName+" "+mayura.lastName);
    
    console.log("Reading middle name before defining " +mayura.middleName);

    mayura.middleName = "Milind";
    console.log("Reading middle name after defining " +mayura.middleName);
  
}