var admin = require("firebase-admin");

var serviceAccount = require("./lawash-39e8a-firebase-adminsdk-7y7ht-f82295f385.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
export { admin, db };