const fs = require('fs').promises;
const path = require('path');

const folderPath = path.join(__dirname, 'demoFolderAsync');
const filePath = path.join(folderPath, 'demoFileAsync.txt');

// // Synchronous
// const folderExists = fs.existsSync(folderPath);
// if(!folderExists) {
//     fs.mkdirSync(folderPath);
//     console.log('Folder created successfully using synchronous method.');
// }
// else {
//     console.log('Folder already exists.');
// }

// // Write the file
// fs.writeFileSync(filePath, 'This is a sample text file created using fs module.');
// console.log('File written successfully using synchronous method.');

// // Append data to the file
// fs.appendFileSync(filePath, '\nThis is an appended line.');
// console.log('Data appended successfully using synchronous method.');

// // Read the file
// const fileData = fs.readFileSync(filePath, 'utf-8');
// console.log('File data read using synchronous method:', fileData);

// // Rename the file

// const newFilePath = path.join(folderPath, 'renamedDemoFile.txt');
// fs.renameSync(filePath, newFilePath);
// console.log('File renamed successfully using synchronous method.');

// // Delete the file
// fs.unlinkSync(newFilePath);
// console.log('File deleted successfully using synchronous method.');



// Asynchronous

fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
        return console.error('Error creating folder asynchronously:', err);
    }
    else {
        console.log('Folder created successfully using asynchronous method.');

        // Write the file

        fs.writeFile(filePath, 'This is a sample text file created using fs module.', (err) => {
            if (err) {
                return console.error('Error writing file asynchronously:', err);
            }
            else {
                console.log('File written successfully using asynchronous method.');
                // Append data to the file

                fs.appendFile(filePath, '\nThis is an appended line.', (err) => {
                    if (err) {
                        return console.error('Error appending data asynchronously:', err);
                    }
                    else {
                        console.log('Data appended successfully using asynchronous method.');

                        // Read the file

                        fs.readFile(filePath, 'utf-8', (err, data) => {
                            if (err) {
                                return console.error('Error reading file asynchronously:', err);
                            }
                            else {
                                console.log('File data read using asynchronous method:', data);

                                // Rename the file

                                const newFilePath = path.join(folderPath, 'renamedDemoFileAsync.txt');
                                fs.rename(filePath, newFilePath, (err) => {
                                    if (err) {
                                        return console.error('Error renaming file asynchronously:', err);
                                    }
                                    console.log('File renamed successfully using asynchronous method.');
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

// Delete the file
fs.unlink(newFilePath, (err) => {
    if (err) {
        return console.error('Error deleting file asynchronously:', err);
    }
    console.log('File deleted successfully using asynchronous method.');
});
