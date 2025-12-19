# Node.js Assignment

## 1. What is a Server?
A **server** is a computer program or device that provides services, resources, or data to other programs or devices (called clients) over a network. In web development, a server:
- Listens for incoming requests from clients (browsers)
- Processes those requests
- Sends back appropriate responses (HTML, JSON, files, etc.)

**Example:** When you visit a website, your browser (client) sends a request to a web server, which responds with the webpage content.

---

## 2. What is Node.js?
**Node.js** is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It was created by **Ryan Dahl** in **2009**.

Key points:
- Built on Chrome's V8 JavaScript engine
- Allows JavaScript to run on the server-side
- Uses event-driven, non-blocking I/O model
- Ideal for building scalable network applications

```javascript
// Simple Node.js server
const http = require('http');
http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
}).listen(3000);
```

---

## 3. Features of Node.js
1. **Asynchronous & Event-Driven** - All APIs are non-blocking
2. **Single-Threaded** - Uses single thread with event looping
3. **Fast Execution** - Built on V8 engine, very fast code execution
4. **No Buffering** - Never buffers data, outputs data in chunks
5. **Cross-Platform** - Runs on Windows, Linux, macOS
6. **NPM (Node Package Manager)** - Largest ecosystem of open-source libraries
7. **Scalable** - Easily handles concurrent connections
8. **Lightweight** - Minimal and efficient

---

## 4. Difference between Blocking I/O and Non-Blocking I/O

| Blocking I/O | Non-Blocking I/O |
|--------------|------------------|
| Operations wait for completion before moving to next | Operations don't wait, continue execution |
| Synchronous execution | Asynchronous execution |
| Thread is blocked until operation completes | Thread is free to handle other tasks |
| Less efficient for I/O heavy operations | More efficient for I/O heavy operations |
| Simple to understand and implement | Requires callbacks/promises/async-await |

**Blocking Example:**
```javascript
const fs = require('fs');
const data = fs.readFileSync('file.txt'); // Blocks here
console.log(data);
console.log('This runs after file is read');
```

**Non-Blocking Example:**
```javascript
const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
    console.log(data);
});
console.log('This runs immediately, before file is read');
```

---

## 5. Synchronous vs Asynchronous

| Synchronous | Asynchronous |
|-------------|--------------|
| Executes code line by line sequentially | Executes code without waiting for previous operation |
| Blocks the execution until task completes | Doesn't block, uses callbacks/promises |
| Easier to read and debug | More complex but efficient |
| Uses methods like `readFileSync()` | Uses methods like `readFile()` |
| Not suitable for I/O operations | Best for I/O operations |

**Synchronous:**
```javascript
console.log('First');
console.log('Second');
console.log('Third');
// Output: First, Second, Third
```

**Asynchronous:**
```javascript
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');
// Output: First, Third, Second
```

---

## 6. Difference between Chrome V8 and Node.js V8

| Chrome V8 | Node.js V8 |
|-----------|------------|
| Runs inside Chrome browser | Runs as standalone runtime |
| Has access to DOM, Window, Document | No DOM access, has access to file system, network |
| Used for client-side JavaScript | Used for server-side JavaScript |
| Has Web APIs (fetch, localStorage) | Has Node APIs (fs, http, path, os) |
| Limited to browser sandbox | Full system access |
| Cannot access file system | Can read/write files |

---

## 7. What is REPL?
**REPL** stands for **Read-Eval-Print-Loop**. It's an interactive shell that:
- **Read** - Reads user input
- **Eval** - Evaluates the JavaScript code
- **Print** - Prints the result
- **Loop** - Loops back to read more input

**How to use:**
```bash
$ node
> 2 + 3
5
> console.log("Hello")
Hello
> .exit
```

**REPL Commands:**
- `.help` - List of commands
- `.break` - Exit from multiline expression
- `.clear` - Clear context
- `.exit` - Exit REPL
- `.save filename` - Save session to file
- `.load filename` - Load file into session

---

## 8. What are Modules?
**Modules** are reusable blocks of code that can be exported from one file and imported into another. They help in:
- Organizing code into separate files
- Reusability
- Maintainability
- Encapsulation

```javascript
// math.js (Creating a module)
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

// app.js (Using the module)
const math = require('./math');
console.log(math.add(5, 3)); // 8
```

---

## 9. Types of Modules with Examples

### 1. Core/Built-in Modules
Pre-installed modules that come with Node.js.

```javascript
// fs module - File System
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');

// path module - File Paths
const path = require('path');
console.log(path.join(__dirname, 'folder', 'file.txt'));

// http module - Create Server
const http = require('http');
http.createServer((req, res) => res.end('Hello')).listen(3000);

// os module - Operating System
const os = require('os');
console.log(os.platform()); // win32, linux, darwin
```

### 2. Local/User-defined Modules
Modules created by the user.

```javascript
// greet.js
module.exports = function(name) {
    return `Hello, ${name}!`;
};

// app.js
const greet = require('./greet');
console.log(greet('John')); // Hello, John!
```

### 3. Third-party Modules
Modules installed via NPM.

```bash
npm install express
```

```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000);
```

---

## 10. Explain Global Object
The **Global Object** in Node.js is similar to `window` object in browsers. It provides global variables and functions accessible anywhere without importing.

### Common Global Objects:

| Object | Description |
|--------|-------------|
| `__dirname` | Current directory path |
| `__filename` | Current file path |
| `module` | Reference to current module |
| `exports` | Shortcut for module.exports |
| `require()` | Function to import modules |
| `console` | Console object for logging |
| `process` | Information about current process |
| `setTimeout()` | Execute after delay |
| `setInterval()` | Execute repeatedly |
| `Buffer` | Handle binary data |

**Examples:**
```javascript
// __dirname and __filename
console.log(__dirname);  // F:\Dyashin\Frontend\Node\Day 2
console.log(__filename); // F:\Dyashin\Frontend\Node\Day 2\app.js

// process object
console.log(process.platform); // win32
console.log(process.version);  // v18.x.x
console.log(process.argv);     // Command line arguments

// setTimeout
setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

// Buffer
const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
```

---

## Summary Table

| Topic | Key Point |
|-------|-----------|
| Server | Provides services to clients over network |
| Node.js | JavaScript runtime for server-side |
| Features | Async, Event-driven, Fast, Scalable |
| Blocking I/O | Waits for operation to complete |
| Non-Blocking I/O | Continues without waiting |
| REPL | Interactive JavaScript shell |
| Modules | Reusable code blocks |
| Module Types | Core, Local, Third-party |
| Global Object | Variables/functions available everywhere |
