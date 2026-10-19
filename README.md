# Study Desk – setup guide

Files: `index.html` (the app), `config.js` (your settings), `content.js` (questions), `firestore.rules` (database security).

Until `config.js` has real Firebase settings, the app runs in demo mode and saves data only on the device. You can open it that way to try it out.

## 1. Create the Firebase project (free Spark plan)
1. Go to console.firebase.google.com with a personal Google account and create a project. Google Analytics is not needed.
2. Add a **Web app** (the `</>` icon). Copy the `firebaseConfig` values into `config.js`.
3. **Authentication** → Get started → Sign-in method → enable **Google**.
4. **Firestore Database** → Create database → production mode → choose a nearby region (for India, `asia-south1` Mumbai).
5. Firestore → **Rules** tab → paste the contents of `firestore.rules`, replace the two email addresses, and Publish.

## 2. Fill in config.js
- `studentEmail`: your daughter’s Google account, lowercase
- `studentName`: shown in the parent view
- `parentEmails`: your Google account (add more if needed)
- Targets, timer lengths and the mastery rule can also be changed here.

Use the same emails in `firestore.rules`.

## 3. Host on GitHub Pages
1. Create a GitHub repository, for example `study-desk`, and upload `index.html`, `config.js`, `content.js` and the `materials/` folder.
2. Settings → Pages → deploy from the `main` branch, root folder.
3. The app will be at `https://<your-username>.github.io/study-desk/`.
4. In Firebase → Authentication → **Settings → Authorized domains**, add `<your-username>.github.io`.

Open the link on her phone and use the browser’s "Add to Home screen" option so it opens like an app.

## How it works
- **Today**: she writes the day’s plan and ticks items off. Unfinished tasks from yesterday can be brought over with one tap. Weekends default to holidays; any day can be switched.
- **Timer**: 50 minutes focus, 10 minutes break. Completed sessions are saved automatically and count towards the day’s hours. Stopping early saves the minutes studied.
- **Practice**: quizzes and flashcards per chapter, with spaced revision (1, 3, 7, 21, 45 days). Extra practice when a chapter isn’t due does not change the schedule.
- **Mastery**: 9/10 or more on 3 revisions in a row masters a level. The next level unlocks if `content.js` has one; otherwise the chapter shows "New questions needed".
- **Study**: revision notes and formula sheets (PDFs) open inside the app, with a page menu, a contents menu when the PDF has bookmarks, and zoom. Both student and parent see this tab.
- **Parent view**: sign in with a parent email to see her day (any date), weekly hours, plan completion, practice and mistakes. The parent view is read-only.

## Adding study material
Put the PDF in the `materials/` folder of the repository and add one line to `window.MATERIALS` at the bottom of `content.js` (`kind` is `notes` or `formulas`). Upload both.

## Updating questions
Edit `content.js` and upload it again. Each chapter has `levels`; add a new level by appending another list of questions. Add Chemistry or Maths by filling that subject’s `chapters`. Progress is not affected by adding content.
