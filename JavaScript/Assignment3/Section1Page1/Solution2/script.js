function createRectangle(){
        
    class Rectangle{
        
        constructor (width, height) {
            this.width = width;
            this.height = height;
        }
    }

    Rectangle.prototype.area = function() {
        return(this.width * this.height);
      }

    var rectangle1 = new Rectangle(4,5);
    console.log("The rectangle has width and height of "+ rectangle1.width + " "+ rectangle1.height+ " and an area of "+ rectangle1.area());
  
}
