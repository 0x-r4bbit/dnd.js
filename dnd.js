;(function (win, doc) {

    var DnD = {};

    DnD.on = function (selector, config) {
        var el = doc.querySelector(selector),

            dragEnter = function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (config.enter) {
                    config.enter(el);
                }
            },
            dragOver = function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (config.over) {
                    config.over(el);
                }
            },
            dragLeave = function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (config.leave) {
                    config.leave(el);
                }
            },
            drop = function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (config.drop) {
                    config.drop(e.dataTransfer.files, el);
                }
            };

        el.addEventListener('dragenter', dragEnter, false);
        el.addEventListener('dragover', dragOver, false);
        el.addEventListener('dragleave', dragLeave, false);
        el.addEventListener('drop', drop, false);
    };

    win.DnD = DnD; 
}(window, document));
