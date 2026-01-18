<!-- .github/copilot-instructions.md for repository: MFJS 3501 Lab 1.1 -->
# Copilot instructions — MFJS 3501 Lab 1.1

Purpose: short, actionable guidance so an AI coding agent can be immediately productive working on this small, static GitHub Pages site.

- Project type: simple static website (HTML + CSS + image assets). No build tooling or package manager present.
- Primary entry: [index.html](index.html#L1-L200) — must remain named `index.html` at repo root for GitHub Pages to publish.
- Styles: [css/style.css](css/style.css#L1-L200) — single stylesheet controlling layout and typography.
- Assets: `images/` contains site images (e.g., [images/placeholder.jpg](images/placeholder.jpg)).
- README: [README.txt](README.txt#L1-L20) documents the lab assignment and file purposes.

Quick tasks the agent may be asked to perform
- Edit content (text/headings): modify `index.html` only. Preserve semantic structure (use `<header>`, `<section>`, `<footer>`).
- Change visual design: update `css/style.css`. Maintain existing class names like `container` and `subtitle` when possible.
- Replace or add images: put new files in `images/` and use relative paths from `index.html` (e.g., `images/new-photo.jpg`).
- Accessibility: ensure `<img>` tags have descriptive `alt` attributes and use `<figure>`/`figcaption` where applicable (pattern already in `index.html`).

Local preview and quick checks
- There is no build step. Preview by opening `index.html` in a browser or running a local HTTP server for assets to resolve properly.

  Example (Python 3):

  ```bash
  python -m http.server 8000
  # then open http://localhost:8000/ in your browser
  ```

- Alternatively, use the VS Code Live Server extension to preview changes with automatic reload.

Conventions and patterns discovered in this repo
- File organization: root `index.html`, styles under `css/`, images under `images/`. Keep this layout — GitHub Pages expects `index.html` at root for project pages.
- CSS patterns: global `* { box-sizing: border-box; }` and a single `.container` for centered, max-width layout. Use these existing classes rather than adding many new layout classes.
- Semantic HTML: the page uses `<header>`, multiple `<section>` elements, `<figure>`/`<figcaption>`, and `<footer>`; follow this semantic approach for new content.
- Typography: system font stack is used in `css/style.css`; prefer editing scale and color variables in-place rather than introducing new font stacks.

What NOT to change without confirmation
- Do not rename `index.html` or move it out of the repo root — that will break GitHub Pages publishing.
- Avoid replacing the single stylesheet architecture with complex toolchains (Sass, bundlers) unless the user requests migration.

Examples from the codebase (use these as templates)
- Content block: the second `<section>` in [index.html](index.html#L20-L60) shows how to structure lists of learning items.
- Image pattern: the `figure` with `img` + `figcaption` in [index.html](index.html#L60-L110) is the canonical asset inclusion.
- Styling: global reset and `.container` layout in [css/style.css](css/style.css#L1-L80) — change values here to affect the whole page.

Testing and validation
- Visual: open the page in a browser and inspect layout/responsive behavior; check image loading and relative paths.
- HTML: keep markup valid and minimal; for quick validation run HTML through an online validator or use an editor linter if configured.

If you need to add features
- Propose migration steps before adding build tooling. Recommended minimal steps: create a new branch, add a simple `README.md` describing the change, and open a PR for review.

If anything here is unclear or you want the agent to follow stricter rules (naming, branching, commit message style), say so and the file will be updated.
