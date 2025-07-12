# Netflix GPT 🎬🤖

A modern, AI-powered movie discovery and recommendation web app inspired by Netflix. Built with React, Redux, Tailwind CSS, Firebase Authentication, OpenAI GPT, and The Movie Database (TMDB) API.

---

## 🚀 Live Demo

👉 [netflix-gpt-one-olive.vercel.app](https://netflix-gpt-one-olive.vercel.app)

---

## 📽️ Features

- **AI Movie Recommendations**: Get personalized movie suggestions using OpenAI GPT.
- **Search Movies**: Search for any movie using TMDB API with instant suggestions.
- **Browse Categories**: Explore Now Playing, Popular, Top Rated, and Upcoming movies.
- **Movie Details**: View detailed info, cast, and similar movies for each title.
- **Watchlist**: Add/remove movies to your personal watchlist (persisted per session).
- **Authentication**: Secure sign up/sign in with Firebase Auth (email/password).
- **Multi-language Support**: Switch between English, Hindi, and Spanish for GPT search.
- **Responsive UI**: Beautiful, mobile-friendly design with Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, React Router
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT (gpt-4o-mini)
- **Backend/Auth**: Firebase Authentication
- **Movie Data**: TMDB API
- **Deployment**: Vercel

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/anubhavpratap/netflix-gpt.git
   cd netflix-gpt
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key:
     ```env
     REACT_APP_OPENAI_KEY=your_openai_api_key
     ```
   - (Firebase config is already included for demo; for production, use your own Firebase project.)
4. **Start the development server**
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

---

## 🧭 Usage Guide

- **Sign Up / Sign In**: Create an account or log in with your email and password.
- **Browse Movies**: Explore movies by category or search for any title.
- **AI GPT Search**: Click "GPT Search" to get AI-powered movie recommendations. Enter your query (e.g., "best sci-fi movies") and get instant suggestions.
- **Movie Details**: Click any movie card for full details, cast, and similar movies.
- **Watchlist**: Add movies to your watchlist and manage them from the Watchlist page.
- **Language**: Switch GPT search language from the dropdown (English, Hindi, Spanish).

---

## 📁 Folder Structure

```
netflix-gpt/
├── public/              # Static files (index.html, favicon, manifest)
├── src/
│   ├── components/      # React components (UI, pages, GPT, movie cards, etc.)
│   ├── hooks/           # Custom React hooks for fetching movies
│   ├── utils/           # Redux slices, constants, API configs, helpers
│   ├── index.js         # App entry point
│   ├── App.js           # Main App component
│   └── index.css        # Tailwind CSS imports
├── package.json         # Project metadata and dependencies
├── tailwind.config.js   # Tailwind CSS config
├── firebase.json        # Firebase hosting config
└── README.md            # Project documentation
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Credits

- [OpenAI](https://openai.com/) for GPT API
- [TMDB](https://www.themoviedb.org/) for movie data
- [Firebase](https://firebase.google.com/) for authentication
- [Vercel](https://vercel.com/) for deployment

---

> Made with ❤️ by [anubhavpratap](https://github.com/anubhavpratap)
