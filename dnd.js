;window.dnd = {

  on: function( expression, config ) {

    var els = document.querySelectorAll(expression);

    [].forEach.call(els, function (el) {

      el.addEventListener('dragstart', function (e) {
        e.dataTransfer.effectAllowed = 'move';
        config.start ? config.start(this, e) : 0;
      }, false);

      el.addEventListener('dragenter', function (e) {
        config.enter ? config.enter(this, e) : 0;
      }, false);

      el.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        config.over ? config.over(this, e) : 0;
      }, false);

      el.addEventListener('dragleave', function (e) {
        config.leave ? config.leave(this, e) : 0;
      }, false );

      el.addEventListener('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
        config.drop ? config.drop(e.dataTransfer, this, e) : 0;
      }, false);

      el.addEventListener('dragend', function (e) {
        config.end ? config.end(this, e) : 0;
      }, false);
    });
  }
};
