### The problem

In firefox@67 or higher after new page is open in new tab and add some pause then consecutive clicks on other elements does not make affect on web view.

What happens in test:
1. Open github.com in new tab
2. Click on first details element which is open new details element
3. Wait until second details element is open
4. Click again on first details element to close second details
5. Wait until second details element is closed
6. FAIL

### How to reproduce

1. Install dependencies - `npm install`
2. Run selenium - `selenium-standalone start`
3. Run test - `node test.js`

### Selenium log
```
13:16:36.965 INFO [GridLauncherV3.parse] - Selenium server version: 3.141.5, revision: d54ebd709a
13:16:37.044 INFO [GridLauncherV3.lambda$buildLaunchers$3] - Launching a standalone Selenium Server on port 4444
2020-07-15 13:16:37.086:INFO::main: Logging initialized @319ms to org.seleniumhq.jetty9.util.log.StdErrLog
13:16:37.271 INFO [WebDriverServlet.<init>] - Initialising WebDriverServlet
13:16:37.349 INFO [SeleniumServer.boot] - Selenium Server is up and running on port 4444
Selenium started
13:16:40.845 INFO [ActiveSessionFactory.apply] - Capabilities are: {
  "acceptInsecureCerts": true,
  "browserName": "firefox",
  "handlesAlerts": true,
  "javascriptEnabled": true,
  "locationContextEnabled": true,
  "loggingPrefs": {
    "browser": "ALL",
    "driver": "ALL"
  },
  "requestOrigins": {
    "url": "http:\u002f\u002fwebdriver.io",
    "version": "4.14.4",
    "name": "webdriverio"
  },
  "rotatable": true,
  "version": "67.0"
}
13:16:40.847 INFO [ActiveSessionFactory.lambda$apply$11] - Matched factory org.openqa.selenium.grid.session.remote.ServicedSession$Factory (provider: org.openqa.selenium.firefox.GeckoDriverService)
1594808201105	mozrunner::runner	INFO	Running command: "/Applications/Firefox.app/Contents/MacOS/firefox-bin" "-marionette" "-foreground" "-no-remote" "-profile" "/var/folders/y_/6plmcm4d6zb9dn9k2v9rvjpjs8ttfj/T/rust_mozprofile.R5b9PPOFzDYm"
1594808210467	Marionette	INFO	Listening on port 51999
1594808210571	Marionette	WARN	TLS certificate errors will be ignored for this session
13:16:50.623 INFO [ProtocolHandshake.createSession] - Detected dialect: W3C
13:16:50.658 INFO [RemoteSession$Factory.lambda$performHandshake$0] - Started new session 1fad70c6-2b8b-1941-8ef6-8429e4695873 (org.openqa.selenium.firefox.GeckoDriverService)
1594808212035	Marionette	WARN	TimedPromise timed out after 500 ms: stacktrace:
TimedPromise/<@chrome://marionette/content/sync.js:245:13
TimedPromise@chrome://marionette/content/sync.js:230:10
interaction.flushEventLoop@chrome://marionette/content/interaction.js:416:10
webdriverClickElement@chrome://marionette/content/interaction.js:182:31
1594808217410	Marionette	INFO	Stopped listening on port 51999
13:16:59.823 INFO [ActiveSessions$1.onStop] - Removing session 1fad70c6-2b8b-1941-8ef6-8429e4695873 (org.openqa.selenium.firefox.GeckoDriverService)
```
