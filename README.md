🎬 CineHorizon – Movie Discovery & Favorites Web App

CineFlow is a modern movie discovery web application built with React + Context API, allowing users to browse trending films, view details, and add favorites in a seamless and responsive interface.
It fetches real-time movie data from The Movie Database (TMDB) and provides a clean UI with a smooth user experience.

| Feature                  | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| 🔥 Browse movies         | Displays trending/popular movies from TMDB                  |
| ❤️ Favorite system       | Save/delete movies locally using Context API + LocalStorage |
| 🎞 Poster + Info preview | Each movie card shows image, title & release date           |
| 🎚 Hover interactions    | Overlay, favorite button, animations & visual effects       |
| 📱 Fully responsive      | Works smoothly on mobile, tablet & desktop                  |
| ⚡ Fast & Lightweight     | Built without heavy UI frameworks                           |
| 🎨 Smooth UI             | Hover fade overlay, heart animation, subtle shadows         |


| Technology          | Usage                               |
| ------------------- | ----------------------------------- |
| **React.js**        | UI rendering + routing              |
| **Context API**     | Global state & favorites management |
| **React Router v6** | Navigation between pages            |
| **TMDB API**        | Live movie data                     |
| **CSS3**            | Styling, animations, responsiveness |


📂 Project Structure
src/
 ├── components/
 │   ├── NavBar.jsx
 │   ├── Footer.jsx
 │   └── MovieCard.jsx
 ├── pages/
 │   ├── HomePage.jsx
 │   └── FavoritesPage.jsx
 ├── contexts/
 │   └── MovieContext.js
 ├── css/
 │   └── MovieCard.css
 ├── App.jsx
 ├── main.jsx (or index.jsx)


🧠 How It Works
⭐ Movie Favorites Logic:
Each movie card checks if the movie is already favorited
Favorite/unfavorite toggles using heart button
Favorites persist using local storage (no backend required)

const isFav = isFavorite(movie);
isFav ? removeFavorite(movie) : addFavorite(movie);


🎨 UI Enhancements

Hover overlay fades in
Heart button scales when active
Cards slightly lift using transform & shadow


🔧 Setup & Installation
git clone https://github.com/YOUR_GITHUB_USERNAME/Cineflow.git
cd Cineflow
npm install
npm run dev   # for development
npm run build # production build


📌 Future Improvements:
🔍 Search movies by name
📽 Cinema-style modal + trailer preview
⭐ User reviews & ratings section
🔔 Notifications UI
🎭 Genre filter + sorting system


👤 Author
Mohammed Mbarak Hassan
🌐 Portfolio: mohammed-mbarak-portfolio.onrender.com
💼 LinkedIn: linkedin.com/in/mohammed-mbarak
🐙 GitHub: github.com/mohammed-mbarak

The project live production link: https://cinehorizon.netlify.app/