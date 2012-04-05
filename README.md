# DragnDrop.js

A minimalist JavaScript framework for simple HTML5 Drag and Drop

## Installation

You can either download the latest version or clone the public GitHub repository. To clone the GitHub repository, just use the following git command in your terminal:

```
git clone https://github.com/PascalPrecht/DnD.js.git
```

After that you just have to include the dnd.js script:

```
<script src=path/to/dnd.js></script>
```

Thats all! You're ready to rock now!

## How to use it

DnD.js provides a very easy to use API. All you have to do is to answer yourself these two questions:

* Where do I want to have this cool drag and drop feature?
* What should happen during the drag and drop?

Got the answers? All right, so just do it!

### DnD.on(selector, config)

The on() method makes your dreams come true. There is nothing more you need for fancy drag and drop. Just pass a valid query selector and a config object, to tell DnD.js what should happen during the drag and drop.

Here is an example:

```
DnD.on('#drop-area', {
    'over': function (element) {
        /* do something with element here */
    },
    'drop': function (files, element) {
        /* Dropped! */
    }
});
```

You can specify your app's behavior by defining callbacks for the following events:

#### 'enter':

Will be called when entering the Drag and Drop area with a grabbed (or more) file(s). You have access to the queried element.

#### 'over':

Will be called while dragging a file (or more) over the Drag and Drop area. You have access to the queried element.

#### 'leave':

Will be called when leaving the Drag and Drop area with the grabbed (or more) file(s). You have access to the queried element.

#### 'drop':

Will be called after the grabbed file or (files) is dropped. You have access to the queried element and the file (or files) being dropped into the Drag and Drop area.

Each of these callbacks is optional.

#### Support

DnD.js works in the latest version of Mozilla Firefox, Google Chrome and Safari.
