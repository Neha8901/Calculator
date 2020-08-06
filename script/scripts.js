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