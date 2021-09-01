// about.html scripts
document.getElementById('changeColorBtn').addEventListener('click', handleChangeColor)
function handleChangeColor() {
    var el = document.getElementById("welcomeText") //fetching
    el.style.color = 'red';
}

// on click add one more element also have bg color
document.getElementById('addTextBtn').addEventListener('click', create)
function create() {
    var h2 = document.createElement('h2');
    h2.textContent = "WOW";
    h2.setAttribute('style', 'background-color: yellow');
    document.querySelector(".addText").appendChild(h2);
    document.getElementById('addTextBtn').removeEventListener('click', create);
}


//hide on click
document.getElementById('hideBtn').addEventListener('click', hide)
function hide() {
    var h2 = document.querySelector(".addText");
    h2.style.display = "none";
  }

// Change the bg color to Blue on click of a button

function changeBackcolor(color) {
    document.body.style.background = color;
}


