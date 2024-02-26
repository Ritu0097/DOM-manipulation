const count = document.getElementById("count");
var currentCount=0;
function increment() {
    currentCount = parseInt(count.textContent);
    if (currentCount === 0) {
        var errorMessageDiv = document.getElementById("errorMessage");
        errorMessageDiv.innerHTML = "";
    }
    currentCount++;
    count.textContent = currentCount;
}
function decrement() {
    currentCount = parseInt(count.textContent);
    if (currentCount > 0) {
        currentCount--;
        count.textContent = currentCount;
    } else {
        var errorMessageDiv = document.getElementById("errorMessage");
        errorMessageDiv.innerHTML = "<span style='color: red;'>Error : Cannot go Below 0 </span>";
    }
}
function setValueToZero() {
    var count = document.getElementById("count");
    count.textContent = 0;
}
