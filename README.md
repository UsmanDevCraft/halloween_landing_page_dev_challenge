# The Midnight Manor

**A Halloween-themed landing page — built with HTML, CSS & vanilla JavaScript**

Welcome to **The Midnight Manor** — a chilling, immersive single-page site that invites users into a haunted Victorian mansion. This project was created for the dev community's CSS challenge and focuses on atmosphere, animation, and subtle interactivity.

---

## Demo

[Halloween_landing_page](https://usmandevcraft.github.io/halloween_landing_page_dev_challenge/)

---

## Features

* **Starry, animated night sky** — subtle parallax and twinkling stars.
* **Layered animated fog** for atmospheric depth.
* **Ghostly cursor trail** — randomized spooky icons (👻, 🎃, 🦇, 🕷️, 💀) follow the cursor with a fade-out effect.
* **Responsive booking modal** — smooth scale-in entrance and accessible focus handling.
* **Scroll-triggered animations** — content reveals using `IntersectionObserver` for performant fades and slide-ins.
* **Interactive hover effects** — buttons, icons, and stat cards react to pointer interaction.
* **No external dependencies** — all assets and code are self-contained.

---

## Built With

* HTML5
* CSS3 (custom animations & variables)
* Vanilla JavaScript (ES6+)

---

## Project Structure

```
HALLOWEEN_LANDING_PAGE/
├─ style.css        # main styles, variables and animations
├─ script.js        # modal, cursor trail, scroll animations
├─ index.html
└─ README.md
```

> Files and structure may vary slightly depending on how you cloned or exported the project.

---

## Installation

1. Clone the repository:

```bash
git clone <https://github.com/UsmanDevCraft/halloween_landing_page_dev_challenge.git>
```

2. Open the project directory:

```bash
cd HALLOWEEN_LANDING_PAGE
```

3. Run locally:

* Option A — open directly in a browser: double-click `index.html`.
* Option B — use a small static server (recommended for best results):

```bash
# with npm (if you have it):
npx http-server .
# or
npx live-server .
```

---

## Usage

* Explore sections: **About**, **Experience**, **Tickets**.
* Click **"Book Your Nightmare"** to open the booking modal (demo form).
* Move your cursor to spawn ghostly icons that fade away with a trailing effect.
* Scroll to reveal features and testimonials with smooth animations.

---

## License

This project is licensed under the **MIT License** — see the included `LICENSE` file for details.

---

## Acknowledgements

Thanks to the dev community for the CSS challenge prompt and the inspiration to push the visual and interactive boundaries. Special shoutout to everyone who gave feedback during design iterations.

---

*Made with a spooky blend of CSS magic and a pinch of Halloween mischief.*
