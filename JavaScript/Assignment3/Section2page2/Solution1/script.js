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

    var person1=new person("mayura","rajadhyaksha",21,["c"],"28/12/1998",{city:"mumbai",pincode:"400050"},"false","jr analyst");

    person2=new person("mala","jadhav",21,"HTML","08/06/1998",{city:"Pune",pincode:"500038"},"false","jr analyst");

    print=function()
    {
     console.log(person1);
     console.log(person2);
    }();
}