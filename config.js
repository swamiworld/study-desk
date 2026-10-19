/* App settings. Fill these in after creating your Firebase project (see README.md).
   While apiKey still starts with "PASTE", the app runs in demo mode and saves data on the device only. */
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBZSTSQp3kQ967kunJJqaoBEZITtLka9RM",
    authDomain: "study-desk-a8b12.firebaseapp.com",
    projectId: "study-desk-a8b12",
    storageBucket: "study-desk-a8b12.firebasestorage.app",
    messagingSenderId: "149289090409",
    appId: "1:149289090409:web:d937e31140d3582aa8d1f8"
  },

  // Google accounts, in lowercase
  studentEmail: "dharshiniworld@gmail.com",
  studentName: "Student",
  parentEmails: ["swamiworld@gmail.com"],

  // Daily study targets in hours: [minimum, maximum]
  targets: { school: [5, 6], holiday: [8, 10] },

  // Study timer, in minutes
  focusMinutes: 50,
  breakMinutes: 10,

  // Spaced revision gaps in days, and the mastery rule
  intervals: [1, 3, 7, 21, 45],
  masteryScore: 9,      // out of 10
  masteryInARow: 3      // revisions in a row at or above masteryScore
};
