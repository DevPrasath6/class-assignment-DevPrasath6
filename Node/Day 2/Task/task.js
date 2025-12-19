const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];

const filePath = path.join(__dirname, filename || 'sample.txt');

switch(operation) {
    case 'create':
        const action = process.argv[3];

        if(action === 'add') {
            const fileName = process.argv[4];
            const fileContent = process.argv[5] || 'Sample text';
            const newFilePath = path.join(__dirname, fileName);

            fs.writeFile(newFilePath, fileContent, (err) => {
                if(err) {
                    console.error('Error creating file : ', err);
                } else {
                    console.log("File created successfully.");
                }
            });
        } else {
            console.log("Invalid Operation.");
        }
        break;

    case 'read':
        const readFileName = process.argv[3];
        const readFilePath = path.join(__dirname, readFileName);

        fs.readFile(readFilePath, 'utf-8', (err, data) => {
            if(err) {
                console.error('Error reading file : ', err);
            } else {
                console.log("Content of the file : ", data);
                console.log(data);
            }
        });
        break;

    case 'update':
        const updateFileName = process.argv[3];
        const newContent = process.argv[4];
        const updateFilePath = path.join(__dirname, updateFileName);

        fs.appendFile(updateFilePath, '\n' + newContent, (err) => {
            if(err) {
                console.error('Error updating file : ', err);
            } else {
                console.log("File updated successfully.");
            }
        });
        break;

    case 'write':
        const writeFileName = process.argv[3];
        const writeContent = process.argv[4];
        const writeFilePath = path.join(__dirname, writeFileName);

        fs.writeFile(writeFilePath, writeContent, (err) => {
            if(err) {
                console.error('Error writing to file : ', err);
            } else {
                console.log("File overwritten successfully.");
            }
        });
        break;

    case 'delete':
        const deleteFileName = process.argv[3];
        const deleteFilePath = path.join(__dirname, deleteFileName);

        fs.unlink(deleteFilePath, (err) => {
            if(err) {
                console.error('Error deleting file : ', err);
            } else {
                console.log("File deleted successfully.");
            }
        });
        break;

    default:
        console.log("Invalid Operations");
}
