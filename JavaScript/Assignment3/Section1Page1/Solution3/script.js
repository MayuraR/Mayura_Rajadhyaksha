function createRectangle(){
        
    function rectangle(width, height) {
        this.width = width;
        this.height = height;
    }

    rectangle.prototype.area = function() {
        return(this.width * this.height);
      }

    var rectangle1 = new rectangle(4, 5);
    console.log(rectangle1.width + " " + rectangle1.height+ " " + rectangle1.area());
    rectangle1.hieght = 50;
    console.log(rectangle1.width + " " + rectangle1.height+ " " + rectangle1.area());


    //value of area remains 20 as the word height is misspelled
  
}
