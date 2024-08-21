import { useState } from "react";
import { Create } from "./components/Create";
import { List } from "./components/List";
import { Search } from "./components/Search";

function App() {
  const [listMovieState, setListMovieState] = useState([])

  return (
    <div className="layout">
    {/* Headers */}
    <header className="header">
      <div className="logo">
        <div className="play"></div>
      </div>
      <h1 className="title">My movies</h1>
    </header>

    {/* NavBar */}
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>

    {/* Main Content */}
    <section className="content">
      {/* here movie */}
      <List listMovieState={ listMovieState } setListMovieState={ setListMovieState } />
    </section>

     {/* Aside Bar */}
    <aside className="aside">
      <Search listMovieState={ listMovieState } setListMovieState={ setListMovieState } />
      <Create setListMovieState={ setListMovieState } />
    </aside>

     {/* Footer */}
      <footer className="footer">
        &copy; Master in JavaScript ES12 and TypeScript <a href="3">Test victor robles</a>
      </footer>
  </div>
  );
}

export default App;
