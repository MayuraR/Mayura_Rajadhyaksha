var numbers = new Array(100);
for (var i =0; i <numbers.length; i++)
{
    numbers[i] = Math.random();
}

document.getElementById("message").innerHTML = numbers;