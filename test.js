const http = require('http');
const fs = require('fs');
const webdriverio = require('webdriverio');

const server = http.createServer((request, response) => {
    const html = fs.readFileSync('./index.html');
    response.end(html);
});

server.listen('3333', () => {
    console.log('server is listening on 3333');
});

var browser = webdriverio.remote({
    host: 'localhost',
    port: '4444',
    path: '/wd/hub',
    desiredCapabilities: {
        browserName: 'firefox',
        version: '67.0',
        acceptInsecureCerts: true
    }
});

return browser
    .init()
    .url('http://localhost:3333')
    .then(async () => {
        await browser.click('.go-to');
        console.log('before wait');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('after wait');
    })
    .click('.details-1')
    .waitForVisible('.details-2', 5000)
    .click('.details-1')
    .waitForVisible('.details-2', 5000, true)
    .saveScreenshot('screen.png')
    .catch((e) => console.log('ERROR:', e))
    .finally(async () => {
        console.log('SESSION ID:', browser.requestHandler.sessionID);

        await browser.saveScreenshot('reject.png')
        await server.close();
        await browser.end();
    });
