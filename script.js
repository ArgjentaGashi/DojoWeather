
function cityClicked(){
    alert("Loading weather report...");
}

function removeCookie() {
    document.querySelector(".cookie").remove();
}

function convertor(element){
    for (var i=1; i<=8; i++){
        var currentTemp = parseInt(document.querySelector("#temp" + i).innerText);
        console.log(currentTemp);
        if (element.value == "fahrenheit") {
            document.querySelector("#temp" + i).innerText = Math.floor(currentTemp*(9/5)+32);
        }
        else {
            document.querySelector("#temp" + i).innerText = Math.floor((5/9)*(currentTemp-32));
        }
    }
}
