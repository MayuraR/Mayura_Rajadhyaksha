r = prompt("Enter number of rows");
c = prompt("Enter number of columns");
  
for(var i=0; i<parseInt(r); i++)
{
   var a=document.getElementById('Table').insertRow(i);

   for(var j=0;j<parseInt(c);j++)  
    {

     var b=  a.insertCell(j);
     b.innerHTML=  "cell content"; 

    }
}
