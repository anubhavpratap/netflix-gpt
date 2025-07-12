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
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
