function myFunction(){
    
    
    var textInput = document.getElementById("inputText").value
    var array = textInput.split(/\r?\n/);
    
    var a = array[0];
    var b = array[2];
    var bb = b.split("@")[0]; 
    var c = array[3];
    var d = c.replace("+", "");
    var e = d.replace("1", "");
    var ee = e.replace(" ", "");
    var f = e.replace(" ", "");
    var g = f.replace("(", "");
    var h = g.replace(")", "");
    var i = h.replace(" ", "-");
    var j = i.replace("-", "");
    var k = j.replace("-", "");
    
    
    
    
    
    
    window.open('https://www.google.com/search?q="' + b + '"');
    window.open('https://www.google.com/search?q="' + bb + '"');
    window.open('https://www.google.com/search?q="' + ee + '"');
    window.open('https://www.google.com/search?q="' + i + '"');
    window.open('https://www.google.com/search?q="' + k + '"');
    window.open("https://www.google.com/search?q=" + a);
   
}