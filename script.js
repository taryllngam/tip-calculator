// const input1 = document.getElementById('input1')
// const input2 = document.getElementById('input2')
const btn = document.getElementById("btn");

btn.addEventListener("click", finalTip);

function tipAmount() {
    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);
    return (input1 * input2) / 100;
}

function finalTip() {
    document.getElementById("display").innerHTML = tipAmount();
}
