# Contact Form with JavaScript Validation

A simple, responsive contact form with client-side validation for name, email, and message fields — no frameworks or dependencies required.

## Objective

Build a contact form that validates user input in the browser before submission, giving immediate, clear feedback without needing a server round-trip.

## Tools

- VS Code
- Chrome Browser (or any modern browser)

## Files

| File | Purpose |
|---|---|
| `index.html` | Form markup and structure |
| `style.css` | Styling and layout |
| `script.js` | Validation logic and feedback handling |

## Features

- **Name validation** — required, minimum 2 characters, letters/spaces/hyphens/apostrophes only
- **Email validation** — required, checked against a standard email format pattern
- **Message validation** — required, 10–500 characters, with a live character counter
- **Inline feedback** — error or success messages appear under each field on blur
- **Submission summary** — a status banner confirms success or lists what needs fixing
- **No page reload** — validation and feedback happen entirely client-side via `preventDefault()`

## How to Run

1. Clone or download this folder.
2. Open `index.html` in Chrome (or use VS Code's Live Server extension for auto-reload).
3. Fill out the form and submit to see validation in action.

## Validation Rules

| Field | Rules |
|---|---|
| Name | Required, ≥ 2 characters, letters/spaces/`-`/`'` only |
| Email | Required, must match `something@domain.tld` pattern |
| Message | Required, 10–500 characters |

## Deliverables

- HTML form (`index.html`)
- Validation script (`script.js`)
- Styling (`style.css`)
- User feedback messages for both valid and invalid input states

## Possible Extensions

- Connect to a real backend (e.g. Formspree, EmailJS, or a custom API) to actually send messages
- Add a honeypot or CAPTCHA field for spam protection
- Add ARIA attributes for improved screen-reader accessibility
