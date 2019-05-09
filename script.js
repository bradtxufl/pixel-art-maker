document.addEventListener('DOMContentLoaded', function () {

var boxes = document.querySelectorAll('.col');
var brushColor = 'white';


for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', (e) => {

    if (brushColor == 'red') {
    e.target.className = 'col red';
  } else if (brushColor == 'orange') {
    e.target.className = 'col orange';
  } else if (brushColor == 'yellow') {
    e.target.className = 'col yellow';
  } else if (brushColor == 'green') {
    e.target.className = 'col green';
  } else if (brushColor == 'blue') {
    e.target.className = 'col blue';
  } else if (brushColor == 'purple') {
    e.target.className = 'col purple';
  } else if (brushColor == 'grey') {
    e.target.className = 'col grey';
  } else if (brushColor == 'brown') {
    e.target.className = 'col brown';
  } else if (brushColor == 'white') {
    e.target.className = 'col white';
  } else {
    e.target.className = 'col black';
  }
});
}

var buttons = document.querySelectorAll('button');

for (var j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener('click', (e) => {
    brushColor = e.target.id;
    buttons[buttons.length - 1].className = 'btn btn-outline-success ' + e.target.id;
    console.log(brushColor);
  })
}

})
