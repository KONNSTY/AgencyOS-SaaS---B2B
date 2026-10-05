// Generates the public Firebase web config from the server-side deployment
// environment. Firebase web config is intentionally public; no Admin key or
// other server secret may be written by this script.

const fs = require('fs');
const path = require('path');

const config = {
    apiKey: process.env.FIREBASE_WEB_API_KEY || '',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.FIREBASE_WEB_APP_ID || '',
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || ''
};

const required = ['apiKey', 'authDomain', 'projectId', 'appId'];
const missing = required.filter(key => !config[key]);
if (missing.length) {
    throw new Error(`Firebase-Web-Konfiguration unvollständig: ${missing.join(', ')}`);
}

const outputPath = path.join(__dirname, '..', 'public', 'firebase-runtime-config.js');
const tempPath = `${outputPath}.tmp`;
const contents = `window.firebaseConfig = Object.freeze(${JSON.stringify(config)});\n`;

fs.writeFileSync(tempPath, contents, { encoding: 'utf8', mode: 0o644 });
fs.renameSync(tempPath, outputPath);
console.log('Firebase-Web-Konfiguration erzeugt (Werte nicht geloggt).');
