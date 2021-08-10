## Topic

## Keywords & Notes

### [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js?retiredLocale=hu)
`Node.js` is a cross-platform `JavaScript` runtime environment that allows developers to build `server-side` and `network` applications with `JavaScript`.

#### [Node Package Manager (npm)](https://developer.mozilla.org/en-US/docs/Glossary/Node.js?retiredLocale=hu#node_package_manager_npm)
[npm](https://www.npmjs.com/) is bundled with `Node.js`. It runs on the `command line` as the command `npm`. It is a `package manager` that downloads packages into a `node_modules` folder. You call the downloaded packages through 

```
const libraryModule = require("libraryname").
```
### [REPL](https://nodejs.org/api/repl.html#repl_repl)
The `repl` module provides a `Read-Evaluation-Print-Loop (REPL)` implementation that is available both as a standalone program or `includible` in other applications. It basically allows you to excute code in bite sized chunks, just like what we did with the Chrome Developer Tools Console inside Chrome.

We were able to write a single line of code and then hit enter and it would run that line of code and then we could run another line of code.So by `installing Node`, we also `install` the `Node REPL`, and to access it all we do is write `command
node` inside the command line and `hit enter`.And once you see that little angle bracket then you know you're inside the `REPL`.
```
>node index.js
//We can also execute other bits of code for example
>3+5
8
>"Angela" + "Yu"
'Angela Yu'
//It also have shortcuts, like, for example if we didn't feel like writing out the entirely of console
>con
```
`ctrl + c` existing terminal
click `esc` `key` existing terminal
type `clear` to clear your console  

### Using Native Node Modules
When you install Node, it already comes bundled with a whole bunch of built in modules.These are essentially libries of code the Node team wrote so that they can help you with day to day things that you might want to do using Node.

We can now use Node.js to interact with the computer directly.So a good example of that is wen can use Node.js to get access directly to the local files of the computer.

If you head over to [`nodejs.org`](https://nodejs.org/dist/latest-v14.x/docs/api/), then you can see all of  the native modules and the documentation

#### [File system](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system)

The `fs` module enables interacting with the file system in a way modeled on standard `POSIX` functions.

To use this module:
```
const fs = require('fs');
```
All file system operations have synchronous, callback, and promise-based forms.

#### [fs.copyFileSync(src, dest[, flags])](https://nodejs.org/docs/latest-v10.x/api/fs.html#fs_file_system)

`src` <string> | <Buffer> | <URL> source filename to copy
`dest` <string> | <Buffer> | <URL> destination filename of the copy operation
`flags` <number> modifiers for copy operation. Default: 0.

```
const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFileSync('source.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');
```

### [About npm](https://docs.npmjs.com/about-npm)
`npm` is the world's largest `software registry`. Open source developers from every continent use npm to `share` and `borrow packages`, and many organizations use npm to `manage private development` as well.

NPM, is a package manager for external modules, modules that anybody could build that you could incorporate into your projects.

NPM, itself actually stands for `Node Package Manager`, and it's currently the world's `largest` collection of these package of code.

`So why would you want to use a package manager anyways?`
The `packages` on NPM are `bits of reusable code` that somebody else `wrote`, and using `NPM` you can `incorporate those packages` into your own `projects`, `saving` you time and `efforts` that required to write those bits of `code` yourself.

NPM actually gets bundled with Node, so when we installed node we already installed NPM.

### [Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)

You can add a `package.json` file to your package to make it easy for others to `manage and install`. Packages published to the registry must contain a package.json file.

A package.json file:

* lists the `packages your project` depends on
specifies `versions` of a package that your project can use using semantic versioning rules
* makes your `build reproducible`, and therefore easier to share with other developers

### [Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)
`Node.js` modules are a type of `package` that can be published to `npm`.

*Overview*
* Create a package.json file
* Create the file that will be loaded when your module is required by another application
* Test your module

#### Create a package.json file
1. To create a package.json file, on the command line, in the root directory of your Node.js module, run npm init:
```
For scoped modules, run npm init --scope=@scope-name
For unscoped modules, run npm init
```
2. Provide responses for the required fields (name and version), as well as the main field:
```
name: The name of your module.
version: The initial module version. We recommend following semantic versioning guidelines and starting with 1.0.0.
```


#### Create the file that will be loaded when your module is required by another application
In the file, add a function as a property of the exports object. This will make the function available to other code:
```
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
```

#### Test your module
1. Publish your package to npm:

* For `private packages` and `unscoped packages`, use `npm` publish.
* For `scoped public packages`, use `npm publish --access public`

2. On the command line, create a `new test directory` outside of your project directory.
```
mkdir test-directory
```
3. Switch to the new directory:
```
cd /path/to/test-directory
```
4. In the test directory, install your module:
```
npm install <your-module-name>
```
5. In the test directory, create a test.js file which requires your module and calls your module as a method.

6. On the command line, run `node test.js`. The message sent to the `console.log` should appear.