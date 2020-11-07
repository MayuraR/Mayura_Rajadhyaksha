function getResult(){
    function person(fname,lname,age,skills,dateofbirth,address,married,profession)
    {
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
    }

    var amithab=new person("amithab" , "bachan" , 45 , "c" , "24/10/1975" , {city:"mumbai" , pincode:"400053"} , "false" , "sr analyst");
    var abhisheik=new person("abhisheik" , 21 , "HTML" , "08/06/1997" , "false" , "jr analyst");
    var abhisheik=Object.create(amithab);

    var aradhya = new person("aradhya", "10", "HTML", "12/12/2010", "student");
    var aradhya = Object.create(abhisheik);

    console.log(amithab);
    console.log(abhisheik.lname);
    console.log(abhisheik.address);
    console.log(aradhya.lname);
    console.log(aradhya.address);

   
}