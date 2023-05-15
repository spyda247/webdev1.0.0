const btn = document.querySelector('.btn');
const size20 = changeFontSize(20);

btn.onclick = size20;

function changeFontSize(size) {
    return function () {
        document.body.style.fontSize = `${size}px`
    }
}

// Write a function that creates a cooking reciepe from
// 4 ingredients

function makeReciepe(param1, param2, param3, param4) {
    return function() {
        const reciepe = `Describe your reciepe`

        return reciepe
    }
}

