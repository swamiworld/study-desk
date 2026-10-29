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
  students: [
    { email: "dharshiniworld@gmail.com", name: "Dharshini" },
    { email: "swami.softeon@gmail.com", name: "Swami" },
    // Dhakshina plans her own subjects, with no quizzes (practice:false). A student with no `subjects` list gets Physics, Chemistry and Maths.
    { email: "dhakshinaworld@gmail.com", name: "Dhakshina", practice: false,
      subjects: ["maths", "sst", "pc", "bio", "sanskrit", "english"] }
  ],

  // Subjects with no question bank: used for planning, the Let’s go screen and hours by subject
  extraSubjects: [
    { id: "pc", name: "PC" },
    { id: "sst", name: "SST" },
    { id: "bio", name: "Biology" },
    { id: "sanskrit", name: "Sanskrit" },
    { id: "english", name: "English" }
  ],
  parentEmails: ["swamiworld@gmail.com"],

  // Daily study targets in hours: [minimum, maximum]
  targets: { school: [5, 7], holiday: [8, 10] },

  // Focus sessions, in minutes. focusMinutes is the target shown after Start (no countdown).
  // After longSessionMinutes, Stop asks how long she actually studied.
  focusMinutes: 50,
  longSessionMinutes: 120,

  // Spaced revision gaps in days, and the mastery rule
  intervals: [1, 3, 7, 21, 45],
  masteryScore: 9,      // out of 10
  masteryInARow: 3      // revisions in a row at or above masteryScore
};
