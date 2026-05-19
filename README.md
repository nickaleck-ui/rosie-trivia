# 💜 The Rosie O'Donnell Show — Trivia Extravaganza

## Getting it live (5 minutes, free)

### Step 1 — Create a GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Name it `rosie-trivia` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Upload the files

1. On your new repo page, click **Add file → Upload files**
2. Drag in everything from this unzipped folder
3. Click **Commit changes**

### Step 3 — Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in (free account)
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** and select your `rosie-trivia` repo
4. Set **Build command** to `npm run build`
5. Set **Publish directory** to `dist`
6. Click **Deploy site**

After about a minute, Netlify gives you a live URL like `rosie-trivia-abc123.netlify.app`. Share that with anyone — plays in any browser, no install needed.

---

## Adding or editing questions

Open `src/data/questions.js`. Each question looks like this:

```js
{
  q: "Question text",
  choices: ["A", "B", "C", "D"],
  answer: 1,           // which choice is correct (0 = A, 1 = B, etc.)
  fact: "Fun fact shown after answering",
  youtubeId: "abc123", // YouTube video ID, or null
  clipLabel: "Watch: Description (Year)", // or null
}
```

Add as many as you like — the game randomly picks 12 per round.

---

*No Koosh balls were harmed in the making of this game.*
