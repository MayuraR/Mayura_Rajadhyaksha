interface Printable{
    radius? : number;

    employeeName? : string;

    
    }
    
function printAll(obj1 : Printable , obj2 : Printable){
    
    let i : Printable;
    for(i of arguments){
        //print(i);
        console.log(i);
    }
            
}

var circle : Printable = {
    radius :  5

}

var employee : Printable = {
    employeeName : 'beena'
}

printAll(circle, employee);





