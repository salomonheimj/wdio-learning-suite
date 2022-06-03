const path = require('path');

describe('upload Test', () => {
    it('simple upload test where upload field is visible', async () => {
        // open URL
        await browser.url('https://the-internet.herokuapp.com/upload');

        // __dirname is the absolute path of the spec folder: /Users/salomonheim/Documents/Coding projects/Wdio/wdio course udemy/wdio-course/test/specs
        // store test file path, where the file is located locally
        const filePath = path.join(__dirname, '../data/logotitle.png'); // this prints the image absolut path: /Users/salomonheim/Documents/Coding projects/Wdio/wdio course udemy/wdio-course/test/data/logotitle.png
        
        // upload test file
        const remoteFilePath = await(browser.uploadFile(filePath)); // upload file to chrome driver

        // set file path value on input field
        await $('#file-upload').setValue(remoteFilePath); // add my file to input field, like clicking on upload button and choosing the file

        // click on upload button
        await $('#file-submit').click(); // click upload button

        // assert that h3 says File Uploaded! after uploading the file
        await expect($('h3')).toHaveText('File Uploaded!');

    });
});