var showMultiple = document.querySelectorAll('.show-multiple');

for(let i = 0; i < showMultiple.length; i++){
  showMultiple[i].addEventListener('click', function(){
    this.classList.toggle("active");
    var panel = this.closest('.wrapper').nextElementSibling;
    if(panel.classList.contains('active')){
      panel.classList.remove('active');
    } else {
      panel.classList.add('active');
    }
  });
};

var showOne = document.getElementsByClassName('show-one');
var showOneButton = document.getElementsByClassName('toggle');
for (i = 0; i < showOneButton.length; i++) {
  showOneButton[i].addEventListener('click', toggleItem, false);
}

function toggleItem(){
  var buttonParent = this.parentNode;
  for (i = 0; i < showOne.length; i++) {
    showOne[i].classList.remove('active');
  }
  if (buttonParent.classList.contains('show-one')) {
    buttonParent.classList.add('active');
  }
}

var option = document.querySelector('.option');
window.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  for (i = 0; i < showOne.length; i++) {
    // check if user click outside area
    if(!e.target.closest('.option') && e.target.closest('.toggle')){
      console.log('di dalam');
    } else {
      showOne[i].classList.remove('active');
      console.log('di luar');
    }
  }
});