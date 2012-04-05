# DragnDrop.js

A minimalist JavaScript framework for simple HTML5 Drag and Drop

## Installation

You can either download the latest version or clone the public GitHub repository. To clone the GitHub repository, just use the following git command in your terminal:

<code>git clone https://github.com/PascalPrecht/DnD.js.git</code>

After that you just have to include the dnd.js script:

<code><script src=path/to/dnd.js></script></code>

Thats all! You're ready to rock now!

## How to use it

DnD.js provides a very easy to use API. All you have to do is to answer yourself these two questions:

* Where do I want to have this cool drag and drop feature?
* What should happen during the drag and drop?

Got the answers? All right, so just do it!

### DnD.on(selector, config)

The on() method makes your dreams come true. There is nothing more you need for fancy drag and drop. Just pass a valid query selector and a config object, to tell DnD.js what should happen during the drag and drop.

Here is an example:

<code>
DnD.on('#drop-area', {
    'over': function (element) {
        /* do something with element here */
    },
    'drop': function (files, element) {
        /* Dropped! */
    }
});
</code>

You can specify your app's behavior by defining callbacks for the following events:

#### 'enter':

Will be called when entering the Drag and Drop area with a grabbed (or more) file(s). You have access to the queried element.
