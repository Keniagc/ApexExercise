const chromium = require('chromium'); //This is for linux in case for a pipeline conf

const defaultChromeArgs = [
'--window-size=1300,800',
'--disable-gpu', //no consume memoria
'--no-sandbox',
'--disable-dev-shm-usage', //lo mismo de la memoria
// '--headless' ----no se abra la ventana en mi computadora 
];
module.exports = {
// An array of folders (excluding subfolders) where your tests are located;
// if this is not specified, the test source must be passed as the second argument to the test runner.

src_folders: ['e2e/tests'],

// See https://nightwatchjs.org/guide/concepts/page-object-model.html
//page_objects_path: ['node_modules/nightwatch/examples/pages/'],
page_objects_path: ['e2e/page-objects'],

// // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
// //custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],
// //custom_commands_path: ['nightwatch/custom-assertions'],

// // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
// custom_assertions_path: '',

// // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
// plugins: [],

// // See https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals
// globals_path: '',

test_workers: {
enabled: true,
},

test_settings: {
default: {
disable_error_log: false,
silent : true, 
launch_url: '',

screenshots: {
enabled: true,
path: 'e2e/screenshots',
},

desiredCapabilities: {
browserName: 'chrome',
acceptInsecureCerts: true, //cuando es local host te dice no por seguridad 
acceptSslCerts: true, //por lo mismo de seguridad 
chromeOptions: {
args: defaultChromeArgs,
}
},

webdriver: {
start_process: true, 
//server_path: 'node_modules/chromedriver/lib/chromedriver/chromedriver',
},
skip_testcases_on_fail: false //para que no se detenga 
},
production_chromium: {
launch_url: 'https://www.liverpool.com.mx/tienda/home',
desiredCapabilities: {
chromeOptions: {
binary: chromium.path,
args: [...defaultChromeArgs, '--headless']
}
}
},

production: {
launch_url: 'https://www.liverpool.com.mx/tienda/home',
desiredCapabilities: {
chromeOptions: {
//binary: chromium.path,
args: [...defaultChromeArgs, '--headless']
}
}
},

test: {
launch_url: '', //To be specified
desiredCapabilities: {
chromeOptions: {
binary: chromium.path,
args: [...defaultChromeArgs, '--headless']
}
}
},

local: {
launch_url: 'https://www.liverpool.com.mx/tienda/home',
//launch_url: 'https://localhost:5000/', ---depende en que puerto este el proyecto
screenshots: {
enabled: false,
path: 'e2e/screenshots',
// on_success : true,
on_failure: false,
on_error: true
},
acceptInsecureCerts: true,
disable_error_log: false,
skip_testcases_on_fail: false
}
},
};