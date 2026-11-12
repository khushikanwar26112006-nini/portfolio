# Khushi Kanwar – Portfolio

Plain HTML, CSS and JavaScript. No build step.

## Edit your content
Open `js/data.js`. Everything on the site comes from this file.
- Empty lists (`[]`) or empty text (`""`) hide that part automatically.
- To add a certificate, project or education entry, copy an existing `{ ... }` block.
- To show your phone number, set `showPhone: true`.

## Add or replace files
- Photo: `assets/images/profile.jpg`
- Project screenshot: `assets/images/ai-resume-builder.png` (the site shows a placeholder until you add it)
- Resume: `assets/documents/resume.pdf`
- New certificates: put the PDF in `assets/documents/` and a preview image in `assets/images/`, then add an entry in `data.js`.
- Project links: fill `demo` and `repo` in `data.js` to show the buttons.

## Deploy on GitHub Pages
1. Create a repository on GitHub (for example `portfolio`).
2. Upload everything in this folder (keep the folders as they are).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After about a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

## Test locally
Open `index.html` in a browser, or run `python -m http.server` in this folder and visit `http://localhost:8000`.
