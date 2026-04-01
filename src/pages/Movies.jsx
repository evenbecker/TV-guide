import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import SearchForm from "../components/SearchForm/SearchForm";
import PageControls from "../components/PageControls/PageControls";
import Card from "../components/Card/Card";
import { BASE_URL } from "../util/api.jsx";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  function search() {
    console.log("Searching Movies for: " + query + " on page: " + page);
    fetch(`${BASE_URL}&s=${query}&type=movie&page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          setResponse(true);
          setMovies(data.Search);
          setTotalResults(data.totalResults);
        } else {
          setResponse(false);
          setMovies([]);
          setTotalResults(0);
        }
      });
  }

  // Search when there is a change in the page
  useEffect(() => {
    console.log("page changed to page " + page);
    search();
  }, [page]);

  return (
    <>
      <Header />
      <main className="main">
        <h1 className="text--heading">Search Movies:</h1>
        <SearchForm
          searchQuery={query}
          setSearchQuery={setQuery}
          setPage={setPage}
          searchFunction={search}
        />
        {response ? (
          <>
            <p className="text--body">{totalResults} movies found</p>
            <PageControls
              page={page}
              setPage={setPage}
              totalResults={totalResults}
            />
            <div className="results-container">
              {movies.map((movie) => (
                <div className="pseudo-col">
                  <Card key={movie.imdbID} item={movie} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text--body">
            No results found. Please try a different search query.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
