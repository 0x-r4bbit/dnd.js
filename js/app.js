dnd.on('.droparea', {
  'enter': function (el) {
    el.innerHTML = "Allright, drop'em!";
    el.classList.add('dropping');
  },
  'leave': function (el) {
    el.innerHTML = "Drop some files here!";
    el.classList.remove('dropping');
  },
  'drop': function (data, el, e) {
    el.innerHTML = "Dropped, take a look at your console!";
    [].forEach.call(data.files, function (file, i) {
      console.dir(file);
    });
    el.classList.remove('dropping');
  }
});

dnd.on('.column', {
});
