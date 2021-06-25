const inputButton = document.getElementById("addGrocery")
const outputButton = document.getElementById("output")
const changeButton = document.getElementById("colorChange")
const changeColor = document.getElementById("colorPicker")
var inputArray = [];
var newOutputText = [];

// when addGrocery is clicked
// -> store string in inputArray
// -> empty input text field
inputButton.addEventListener("click", function(){
    let inputText = document.getElementById("grocery").value;
    if (inputText){
        inputArray.push(inputText);
    }
    document.getElementById("grocery").value = "";
})

// when output is clicked
// output all of the strings in the textarea - good
// displayed in bullet points
outputButton.addEventListener("click", function(){
    let outputText = document.getElementById("theOutputList");
    for (var i = 0; i < inputArray.length; i++){
        newOutputText.push("• " + inputArray[i]);
    }
    outputText.value = newOutputText.join("\n");
    inputArray = [];//emptys the array
})

// changes the button from the user input on click (textfield)
changeButton.addEventListener("click", function(){
    let color = document.getElementById("inputColorText").value;
    changeButton.style.backgroundColor = color;
})

// changes the text area from the user input on click (colorpicker)
changeColor.addEventListener("click", function(){
    let colorTA = document.getElementById("colorPick").value;
    document.getElementById("colorArea").style.backgroundColor = colorTA;
})
