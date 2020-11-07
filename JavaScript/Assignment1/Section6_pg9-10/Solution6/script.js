function getEnglish(morseCode) {
    var str = document.getElementById("str").value ;
    //var message = ".... .- .-.. .--. -·-·--     -- --- .-. ... .     -.-. --- -.. .     .. ...     -.. .-. .. ...- .. -. --.     -- .     -. ..- - ... -·-·--"; 
var alphabet = {  
   "-----":"0",
   ".----":"1",
   "..---":"2",
   "...--":"3",
   "....-":"4",
   ".....":"5",
   "-....":"6",
   "--...":"7",
   "---..":"8",
   "----.":"9",
   ".-":"a",
   "-...":"b",
   "-.-.":"c",
   "-..":"d",
   ".":"e",
   "..-.":"f",
   "--.":"g",
   "....":"h",
   "..":"i",
   ".---":"j",
   "-.-":"k",
   ".-..":"l",
   "--":"m",
   "-.":"n",
   "---":"o",
   ".--.":"p",
   "--.-":"q",
   ".-.":"r",
   "...":"s",
   "-":"t",
   "..-":"u",
   "...-":"v",
   ".--":"w",
   "-..-":"x",
   "-.--":"y",
   "--..":"z",
   "/":" ",
   "-·-·--":"!",
   "·-·-·-":".",
   "--··--":","
};
var arr = [];

str.split("/").map(function (word) {
    word.split(" ").map(function (letter) {
        arr.push(alphabet[letter]);
    });
    arr.push(" ");
});
 
console.log(arr.join(""));
  }

function getMorse(){
    var str = document.getElementById("str").value ;

    var morse = {
        a: ". ___",
        b: "___ . . .",
        c: "___ . ___ .",
        d: "___ . .",
        e: ".",
        f: ". . ___ .",
        g: "___ ___ .",
        h: ". . . .",
        i: ". .",
        j: ". ___ ___ ___ ___",
        k: "___ . ___",
        l: ". ___ . .",
        m: "___ ___",
        n: "___ .",
        o: "___ ___ ___",
        p: ". ___ ___ .",
        q: "___ ___ . ___",
        r: ". ___ .",
        s: ". . .",
        t: "___",
        u: ". . ___",
        v: ". . . ___",
        w: ". ___ ___",
        x: "___ . . ___",
        y: "___ . ___ ___",
        z: "___ ___ . .",
        1: ". ___ ___ ___",
        2: ". . ___ ___ ___",
        3: ". . . ___ ___",
        4: ". . . . ___",
        5: ". . . . .",
        6: "___ . . . .",
        7: "___ ___ . . .",
        8: "___ ___ ___ . .",
        9: "___ ___ ___ ___ .",
        0: "___ ___ ___ ___ ___",
        " ": "/", 
        ".": ". ___ . ___ . ___", 
        ",": "___ . . ___",
        ":": "___ . . .",
        "?": ". . ___ . .", 
        "'": ". ____ .", 
        "-": "___ . . . . ___", 
        "/": "___ . . ___ .",  
        "(": "___ . ___ .",  
        ")": "___ . ___ . ___", 
        "\"": ". ___ . . ___ .", 
        "@": ". ___ . ___ .",
        "=": "___ . . . ___",   
        "&": ". ___ . . .", 
        ";": "___ . ___ . ___ .", 
        "+": ". ___ . ___ .",
        "_": ". . ___ . __", 
        "$": ". . . ___ . . ___",
        "!": "___ . ___ . ____"
      };

    
    var arr = str.toLowerCase().split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = morse[arr[i]];
    }
     
    console.log( arr.join(" "));
}
  