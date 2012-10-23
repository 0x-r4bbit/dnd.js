var dndEl = null,
    file = document.querySelector('.download-file'),
    fileDetails;

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

dnd.on('.box', {
  'start': function (el, e) {
    el.style.opacity = '0.4';

    dndEl = el;
    e.dataTransfer.setData('text/html', el.innerHTML);
  },
  'enter': function (el) {
    el.classList.add('dropping');
  },
  'leave': function (el) {
    el.classList.remove('dropping');
  },
  'drop': function (data, el, e) {
    if (dndEl != el) {
      dndEl.innerHTML = el.innerHTML;
      el.innerHTML = data.getData('text/html');
    }
    el.classList.remove('dropping');
  },
  'end': function (el) {
    el.style.opacity = '1';
  }
});

if (typeof(file.dataset) === 'undefined') {
  fileDetails = file.getAttribute('data-downloadurl');
} else {
  fileDetails = file.dataset.downloadurl;
}

dnd.on('.download-file', {
  'start': function (el, e) {
    e.dataTransfer.setData('DownloadURL', fileDetails);
  }
});
