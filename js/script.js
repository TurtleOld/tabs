

var h = document.getElementById('color1');
var r = document.getElementById('color2');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');

  btn1.addEventListener('click', function(event){
    event.preventDefault();
    this.innerHTML = this.innerHTML == 'Цвет текста: красный'?'Цвет текста: черный':'Цвет текста: красный';
  })

  btn2.addEventListener('click', function(event){
    event.preventDefault();
    this.innerHTML = this.innerHTML == 'Цвет текста: красный'?'Цвет текста: черный':'Цвет текста: красный';
  })

  
  btn1.addEventListener("click", function(){
    h.style.color = (h.style.color == 'red') ? 'black' : 'red';
  })
  btn2.addEventListener("click", function(){
    r.style.color = (r.style.color == 'red') ? 'black' : 'red';
  })
