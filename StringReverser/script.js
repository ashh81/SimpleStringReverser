function solveString(stringToBeReversed){
    var reversedString = ""
    for(var i = stringToBeReversed.length - 1; i >= 0;i--){ // Take apart the string
        reversedString += stringToBeReversed[i]; // Rebuild the string backwards
    }
    changeDOM(reversedString);
}

function getInput(){ // Get the user input from the input box
    var input = document.getElementById("input").value;
    if (input.length == 0 ){
        console.log("String cannot be empty!"); // Error handling to prevent logging an empty value (undefined)
    } else {
        solveString(input);
    }
}

function changeDOM(string){
    var text = document.getElementById("reversedString").innerHTML = string;
}