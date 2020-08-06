function getHistoryValue() {
    return document.getElementById("history-value").innerText;
}

function setHistoryValue(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutputValue() {
    return Number(document.getElementById("output-value").innerText).replace(/,/g, "");
}

function setOutputValue(num) {
    if (num === "") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = Number(num).toLocaleString("en");
    }
}

var number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        var output = getOutputValue();
        if (output != NaN) {
            output += this.id;
            setOutputValue(output);
        }
    });
}

