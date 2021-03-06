// If for some reason you're looking at this code, this file was 
// initially named "isEvilIE.js" but the letters toward the end 
// of the file name looked too similar, though I stand by my statement
// that Internet Explorer is evil. The code here is designed to check
// if the user is using Internet Explorer, and if they are, it'll hide the
// main part of the body and show a messgae instructing them to use
// another browser, because some protocols (HTML importing, variables, etc)
// used here don't work in IE. The browser such a pain to code for
// that ordinary functions like classList.add() or classList.remove()
// don't actually work in IE9 or earlier, so this convoluted
// mess below is the result. Tread lightly.

var isIE = /*@cc_on!@*/false || !!document.documentMode;

if (isIE) {
    var element, name, arr;
    element = document.getElementById("deus");
    name = "invisible";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
      element.className += " " + name;
    }

    var ieMessage = document.getElementById("ieMessage");
    ieMessage.className = ieMessage.className.replace(/\binvisible\b/g, "");
}