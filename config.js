/* GintApp – Einstellungen
 *
 * 1. Firebase: In der Firebase-Konsole unter Projekteinstellungen → Allgemein → „Meine Apps“
 *    steht ein Block „const firebaseConfig = { … }“. Kopiere die Werte hier hinein.
 *    Diese Angaben sind nicht geheim. Geschützt sind eure Daten durch den Gruppen-Code
 *    und die Sicherheitsregeln in Firestore.
 */
window.GINTAPP_FIREBASE = {
  apiKey: "AIzaSyBjXrpp-zLybgB9kd0NJ8-vOZjwMPLzobs",
  authDomain: "gintapp-e9f1b.firebaseapp.com",
  projectId: "gintapp-e9f1b",
  storageBucket: "gintapp-e9f1b.firebasestorage.app",
  messagingSenderId: "797655888126",
  appId: "1:797655888126:web:7007887054d0f8858475af"
};

/* 2. Das gemeinsame Konto der Gin-Runde. Muss genau so in Firebase unter Authentication
 *    als Nutzer angelegt sein. Das Passwort dieses Nutzers ist euer Gruppen-Code.
 */
window.GINTAPP_GRUPPE = "gin-runde@example.com";

/* 3. Nur für die einmalige Übernahme der Daten aus dem Google Sheet:
 *    die Web-App-Adresse aus Apps Script (endet auf /exec). Danach kann sie leer bleiben.
 */
window.GINTAPP_API = "https://script.google.com/macros/s/AKfycby9JHKF1onHQrKIj0QhvvCjIaJ6JVof4Fnvqujj1u4WkLcslwy8lL6QRo_ZSMe5wLVINg/exec";
