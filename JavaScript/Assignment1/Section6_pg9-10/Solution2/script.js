function getResult(){
    var days = document.getElementById("days").value ;

    var yearly_extra =  Math.floor(1/( days - Math.floor(days) ));

    //for a century

    var century_extra = Math.floor(1/( (days * 100) - Math.floor(days * 100) )) 

    document.getElementById("message").innerHTML = "A leap year will come after "+ yearly_extra + " years and after " +century_extra + " centuries."
}