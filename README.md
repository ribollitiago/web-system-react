# web-system-react

Full-featured React web system with Firebase authentication, sidebar navigation, and a modular page structure.

---

## Features

- 🔐 **Authentication** — sign-up and login flows powered by Firebase Auth
- 🗂️ **Sidebar navigation** — persistent side menu for quick access to all sections
- 🏠 **Home dashboard** — central landing page after authentication
- 🔀 **React routing** — client-side navigation between pages
- 📱 **Responsive layout** — adapts to different screen sizes

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Create React App) |
| Authentication | Firebase Auth |
| Routing | React Router |
| Deployment | — |

---

## Project Structure

```
src/
├── components/
│   └── Sidebar/       # Persistent sidebar navigation component
├── pages/
│   ├── Home/          # Main dashboard page
│   ├── Login/         # Login page
│   └── Register/      # User registration page
├── firebase.js        # Firebase initialization & config
└── App.js
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ribollitiago/web-system-react.git
cd web-system-react

# Install dependencies
npm install

# Configure Firebase
# Create a .env file at the root with your Firebase project credentials:
# REACT_APP_API_KEY=...
# REACT_APP_AUTH_DOMAIN=...
# REACT_APP_PROJECT_ID=...
# REACT_APP_STORAGE_BUCKET=...
# REACT_APP_MESSAGING_SENDER_ID=...
# REACT_APP_APP_ID=...

# Start development server
npm start
```

---

## Author

**Tiago Ribolli Blasquez**  
[linkedin.com/in/tiagoribolli](https://www.linkedin.com/in/tiago-ribolli-blasquez-060810244) · [github.com/ribollitiago](https://github.com/ribollitiago)
