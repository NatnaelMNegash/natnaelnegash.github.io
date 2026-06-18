# Natnael M. Negash — Personal Academic Website

A static, multi-page personal website (migrated from Google Sites). Pure HTML/CSS/JS,
no build step. Just upload and it works.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home / about |
| `research.html` | Research areas |
| `teaching.html` | Teaching experience |
| `publications.html` | Journal + conference list |
| `service.html` | Service (placeholder — add content) |
| `gallery.html` | Photo gallery |
| `news.html` | News timeline |
| `style.css` | Shared styles for all pages |
| `nav.js` | Shared header + footer (edit nav in one place) |

---

## How to publish it free on GitHub Pages

### 1. Create a GitHub account
Go to https://github.com and sign up (skip if you have one).

### 2. Create a new repository
- Click the **+** in the top-right → **New repository**.
- **Repository name:** `yourusername.github.io`
  (replace `yourusername` with your exact GitHub username — this special name makes it
  your main site at `https://yourusername.github.io`).
- Set it to **Public**.
- Click **Create repository**.

### 3. Upload these files
- On the new repo page, click **uploading an existing file**
  (or **Add file → Upload files**).
- Drag in ALL the files from this folder (`index.html`, `style.css`, `nav.js`, and every
  other `.html`). Keep them at the top level — do not put them inside a subfolder.
- Scroll down and click **Commit changes**.

### 4. Turn on GitHub Pages
- In the repo, go to **Settings** (top menu) → **Pages** (left sidebar).
- Under **Build and deployment → Branch**, choose **main** and **/ (root)**, then **Save**.

### 5. Visit your live site
- Wait about 1–2 minutes.
- Your site is live at: `https://yourusername.github.io`

---

## Editing later
- Edit any page directly on GitHub: click the file → pencil (✏️) icon → make changes →
  **Commit changes**. The site updates in a minute.
- To change the navigation menu or footer for ALL pages at once, edit `nav.js`.

## About the images
The images currently load from Google's servers (the same ones your Google Site used), so
they show up immediately. If you ever want them stored in your own repo instead:
1. Download each image, create an `images/` folder in the repo, and upload them there.
2. Replace the long `https://lh3.googleusercontent.com/...` URLs in the HTML with
   `images/your-file-name.jpg`.

## Optional: use your own domain
In **Settings → Pages → Custom domain**, enter a domain you own (e.g. `natnaelnegash.com`)
and follow GitHub's DNS instructions.
