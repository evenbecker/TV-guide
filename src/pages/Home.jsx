import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../css/global.css";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="text--heading">Welcome to The TV Guide!</h1>
        <p className="text--menu">
          Your one-stop destination for all things movies and TV shows.
        </p>
        <p className="text--body">
          Discover more about your favorite movies and TV shows, or discover new
          and exciting entertainment!
        </p>
        <p className="text--body">
          Search for movies and TV shows, and then explore their ratings, plot
          summary, director(s), cast and more!
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Home;
