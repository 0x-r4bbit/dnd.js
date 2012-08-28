var span = document.querySelector('.droparea span');

dnd.on('.droparea', {
  'enter': function (el) {
    span.innerHTML = "Allright, drop'em!";
    el.classList.add('dropping');
  },
  'leave': function (el) {
    span.innerHTML = "Drop some files here!";
    el.classList.remove('dropping');
  },
  'drop': function (data, el, e) {
    span.innerHTML = "Dropped!";
    console.dir(data.files);
    el.classList.remove('dropping');
  }
});
