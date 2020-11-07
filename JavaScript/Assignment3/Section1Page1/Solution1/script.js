function createRectangle(){

class Rectangle{
        
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
}

    var rectangle1 = new Rectangle(5, 4);
    var rectangle2 = new Rectangle(6, 8);

    console.log("The first rectangle created "+ rectangle1.width+ " "+ rectangle1.height);
    console.log("The second rectangle created "+ rectangle2.width+ " "+ rectangle2.height);

    //change heights of both
    rectangle1.height = 10;
    rectangle2.height = 10;

    console.log("The first rectangle with changed values "+ rectangle1.width+ " "+ rectangle1.height);
    console.log("The second rectangle with changed values "+ rectangle2.width+ " "+ rectangle2.height);
}
