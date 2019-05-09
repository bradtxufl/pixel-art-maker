document.addEventListener('DOMContentLoaded', function () {

var boxes = document.querySelectorAll('.col');
var brushColor = 'yellow';


for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', (e) => {

    if (brushColor == 'red') {
    e.target.className = 'col red';
  } else if (brushColor == 'yellow') {
    e.target.className = 'col yellow';
  } else {
    e.target.className = 'col blue';
  }
  })
}

var buttons = document.querySelectorAll('button');

for (var j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener('click', (e) => {
    brushColor = e.target.id;
  })
}

})
