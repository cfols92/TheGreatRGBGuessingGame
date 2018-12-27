// var colors = [
//     pickColor(),
//     pickColor(),
//     pickColor(),
//     pickColor(),
//     pickColor(),
//     pickColor()
// ]

var colors = generateRandomColors(6);

// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(0, 255, 0)",
//     "rgb(127, 0, 0)",
//     "rgb(0, 0, 127)",
//     "rgb(0, 127, 0)"
// ]

var numberOfSquares = 6;
var pickedColor = colors[Math.floor(Math.random() * (numberOfSquares))];

document.querySelector("#hardBtn").addEventListener("click",function()
{
    numberOfSquares = 6;
    document.querySelector("#hardBtn").classList.add("selected");
    document.querySelector("#easyBtn").classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[Math.floor(Math.random() * (numberOfSquares))];
    document.querySelector("#colorDisplay").textContent = pickedColor;
    for(var i = 0 ; i < document.querySelectorAll(".square").length ; i++)
    {
        document.querySelectorAll(".square")[i].style.backgroundColor = colors[i];
        document.querySelectorAll(".square")[i].style.display = "block";
    }
    document.querySelector("#message").textContent = "";
    document.querySelector("#top").style.backgroundColor = "steelblue";
});

document.querySelector("#easyBtn").addEventListener("click",function()
{
    numberOfSquares = 3;
    document.querySelector("#easyBtn").classList.add("selected");
    document.querySelector("#hardBtn").classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[Math.floor(Math.random() * (numberOfSquares))];
    document.querySelector("#colorDisplay").textContent = pickedColor;
    for(var i = 0 ; i < document.querySelectorAll(".square").length ; i++)
    {
        if(colors[i])
        {
            document.querySelectorAll(".square")[i].style.backgroundColor = colors[i];
        }
        else
        {
            document.querySelectorAll(".square")[i].style.display = "none";
        }
    }
    document.querySelector("#message").textContent = "";
    document.querySelector("#top").style.backgroundColor = "steelblue";
});

document.querySelector("#colorDisplay").textContent = pickedColor;
document.querySelector("#reset").addEventListener("click", reset);

for(var i = 0 ; i < numberOfSquares ; i++)
{
    document.querySelectorAll(".square")[i].style.backgroundColor = colors[i];
    document.querySelectorAll(".square")[i].addEventListener("click",checkIfWinner);
}

function checkIfWinner()
{
    var colorOfBackground = this.style.backgroundColor;
    if(colorOfBackground === pickedColor)
    {
        document.querySelector("#message").textContent = "Winner!"
        for(var i = 0 ; i < numberOfSquares ; i++)
        {
            document.querySelectorAll(".square")[i].style.backgroundColor = pickedColor;
        }
        document.querySelector("#top").style.backgroundColor = pickedColor;
        document.querySelector("#reset").textContent = "Play Again";
    }
    else
    {
        document.querySelector("#message").textContent = "Try Again!"
        this.style.backgroundColor = "transparent";
    }
}

function pickColor()
{
    var randomNumber1 = Math.floor(Math.random() * 256)
    var randomNumber2 = Math.floor(Math.random() * 256)
    var randomNumber3 = Math.floor(Math.random() * 256)

    return "rgb(" + randomNumber1 + ", " + randomNumber2 + ", " + randomNumber3 + ")"
}

function generateRandomColors(numberOfColors)
{
    var colorsArray = []

    for(var i = 0 ; i < numberOfColors ; i++)
    {
        colorsArray.push(pickColor());
    }

    return colorsArray;
}

function reset()
{
    colors = generateRandomColors(numberOfSquares);
    
    pickedColor = colors[Math.floor(Math.random() * (numberOfSquares))];

    document.querySelector("#colorDisplay").textContent = pickedColor;

    document.querySelector("#top").style.backgroundColor = "steelblue";

    for(var i = 0 ; i < numberOfSquares ; i++)
    {
        document.querySelectorAll(".square")[i].style.backgroundColor = colors[i];
        document.querySelectorAll(".square")[i].addEventListener("click",checkIfWinner);
    }
    document.querySelector("#reset").textContent = "New Colors";
    document.querySelector("#message").textContent = "";
}