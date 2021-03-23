const every = document.querySelectorAll('ul.lists>li>img');
every[0].addEventListener('click', function(err1) {
  err1 = "Природа/Nature.jpg";
  document.getElementById('mainImg').src = err1;
});
every[1].addEventListener('click', function(err2) {
  err2 = "Природа/Nature1.jpg";
  document.getElementById('mainImg').src = err2;
});
every[2].addEventListener('click', function(err3) {
  err3 = "Природа/Nature2.jpg";
  document.getElementById('mainImg').src = err3;
});
every[3].addEventListener('click', function(err4) {
  err4 = "Природа/Nature3.jpg";
  document.getElementById('mainImg').src = err4;
});
every[4].addEventListener('click', function(err5) {
  err5 = "Природа/Nature4.jpg";
  document.getElementById('mainImg').src = err5;
})

