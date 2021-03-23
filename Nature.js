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
})

