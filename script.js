const togglebtn = document.getElementById('toggle-bar');
const navLinks = document.getElementById('nav-links')

togglebtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
let btn = document.getElementsByClassName("btn")
let slide = document.getElementById("slide")
let counter = 0;
btn[0].onclick = function () {
    slide.style.transform = "translateX(0px)"
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter = 0;
}
btn[1].onclick = function () {
    slide.style.transform = "translateX(-800px)"
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter = 1;
}
btn[2].onclick = function () {
    slide.style.transform = "translateX(-1600px)"
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter = 2;
}
btn[3].onclick = function () {
    slide.style.transform = "translateX(-2400px)"
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
    counter = 3;
}

// automatic

setInterval(function () {
    let val = -800;
    // slide.style.transform="translateX(${0+val})"
    slide.style.transform = `translateX(${0 + val * counter}px)`;

    for (i = 0; i < 4; i++) {
        btn[i].classList.remove("active")
    }
    btn[counter].classList.add("active")
    counter++;
    if (counter == 4)
        counter = 0

}, 5000);


//stats increasing
function incrementDigit() {
    var counterElement = document.getElementById('1');
    // var currentDigit = parseInt(currentDigit.innerText, 10);
    var currentDigit = parseInt(counterElement.innerText, 10);

    if (currentDigit < 1000) {
      currentDigit++;
      counterElement.innerText = currentDigit;
    }
  }

  // Automatically increment every second (1000 milliseconds)
  setInterval(incrementDigit, .1);

function incrementDigit2() {
    var counterElement = document.getElementById('2');
    // var currentDigit = parseInt(currentDigit.innerText, 10);
    var currentDigit = parseInt(counterElement.innerText, 10);

    if (currentDigit < 250) {
      currentDigit++;
      counterElement.innerText = currentDigit;
    }
  }

  // Automatically increment every second (1000 milliseconds)
  setInterval(incrementDigit2, 10);

function incrementDigit3() {
    var counterElement = document.getElementById('3');
    // var currentDigit = parseInt(currentDigit.innerText, 10);
    var currentDigit = parseInt(counterElement.innerText, 10);

    if (currentDigit < 5000) {
      currentDigit++;
      counterElement.innerText = currentDigit;
    }
  }

  // Automatically increment every second (1000 milliseconds)
  setInterval(incrementDigit3, 10);


function incrementDigit5() {
    var counterElement = document.getElementById('5');
    // var currentDigit = parseInt(currentDigit.innerText, 10);
    var currentDigit = parseInt(counterElement.innerText, 10);

    if (currentDigit <150) {
      currentDigit++;
      counterElement.innerText = currentDigit;
    }
  }

  // Automatically increment every second (1000 milliseconds)
  setInterval(incrementDigit5, 20);


function incrementDigit4() {
    var counterElement = document.getElementById('4');
    // var currentDigit = parseInt(currentDigit.innerText, 10);
    var currentDigit = parseInt(counterElement.innerText, 10);

    if (currentDigit <14) {
      currentDigit++;
      counterElement.innerText = currentDigit;
    }
  }

  // Automatically increment every second (1000 milliseconds)
  setInterval(incrementDigit4, 200);


function incrementDigit6() {
    var counterElement = document.getElementById('6');
    // var currentDigit = parseInt(currentDigit.innerText, 10);
    var currentDigit = parseInt(counterElement.innerText, 10);

    if (currentDigit < 40) {
      currentDigit++;
      counterElement.innerText = currentDigit;
    }
  }

  // Automatically increment every second (1000 milliseconds)
  setInterval(incrementDigit6, 100);