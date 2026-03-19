# BioCare Express

Minnesota-based courier website — same-day, scheduled, and medical delivery.

## Run locally

```bash
npm install
npm run dev
```

## Contact form (email on submit with Nodemailer)

The contact form posts to a Node/Express server that uses **Nodemailer** to send email. The server has a clear structure: config, routes, and middleware.

### Gmail SMTP setup (get your “keys”)

Gmail does **not** use your normal password for SMTP. You use an **App Password**.

1. **Turn on 2-Step Verification** (required for App Passwords)
   - Go to [Google Account → Security](https://myaccount.google.com/security).
   - Under “How you sign in to Google,” click **2-Step Verification** and follow the steps to enable it.

2. **Create an App Password**
   - Go to [Google Account → Security → App passwords](https://myaccount.google.com/apppasswords)  
     (or search “App passwords” in your Google Account).
   - Click **Select app** → choose **Mail** (or **Other** and type “BioCare Express”).
   - Click **Select device** → choose **Other** and type “Contact form server.”
   - Click **Generate**. Google shows a **16-character password** (e.g. `abcd efgh ijkl mnop`).
   - Copy it and remove the spaces: `abcdefghijklmnop`. This is your **SMTP password** (not your Gmail login password).

3. **Fill your `.env` file**
   - Copy the example: `cp .env.example .env`
   - Edit `.env` and set (use your real Gmail and the App Password from step 2):

   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=yourname@gmail.com
   SMTP_PASS=abcdefghijklmnop
   SMTP_FROM=yourname@gmail.com
   SMTP_TO=yourname@gmail.com
   ```

   - `SMTP_USER` = your full Gmail address.
   - `SMTP_PASS` = the 16-character App Password (no spaces).
   - `SMTP_FROM` and `SMTP_TO` = your Gmail (or another address where you want to receive contact form emails).

4. **Optional:** If the frontend runs on a different port and you need to point it to the server:
   ```env
   VITE_CONTACT_API_URL=http://localhost:4000/api/contact
   ```

### Run the app

**Development** (frontend and API on different ports):

- Terminal 1 — React app: `npm run dev`
- Terminal 2 — API server: `npm run server`

The API runs at `http://localhost:4000`. Set `VITE_CONTACT_API_URL=http://localhost:4000/api/contact` in `.env` if the form doesn’t reach the server.

**Production** (one server serves both API and React build):

```bash
npm run build
npm run start
```

Then open `http://localhost:4000`. The server serves the built React app and handles `POST /api/contact` for the form.

## Build

```bash
npm run build
```

## Tech

- React 19, Vite 7, React Router, Lucide icons.
