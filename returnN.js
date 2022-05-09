const fs = require('fs');

/* //fs = writeFile
fs.writeFile('deneme.txt', 'Hello world!', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('All good');
    }
});

//fs = readFile 
fs.readFile('deneme.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err)
    else
        console.log(data);
});

//fs = rename
fs.rename('deneme.txt', 'apple.txt', (err) => {
    if (err)
        console.log(err)
})

//fs = appendFile
fs.appendFile('apple.txt', '\nThis is a new line from appendFile method.', (err) => {
    if (err)
        console.log(err);
    else 
        console.log('The adding is done, well done Ömer.');
}); */

/* //fs = unlink (Delete file)
fs.unlink('apple.txt', (err) => {
    if(err)
        console.log(err);
    else 
        console.log('apple.txt file is deleted.');
}); */



/* Reading big file */

const readStream = fs.createReadStream('bigFile.txt' , 'utf-8' );
readStream.on('data', (alldata) => {
    console.log(alldata);
});
