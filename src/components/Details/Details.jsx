import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Details.css";
import { BASE_URL } from "../../util/api.jsx";

function Details() {
  let { id } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    console.log("Fetching details for ID:", id);
    fetch(`${BASE_URL}&i=${id}&plot=full`)
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        setDetails(data);
        console.log("Fetched details:", data);
      });
  }, []);

  if (!details) {
    return <h1 className="text--heading">Loading...</h1>;
  }

  return (
    <div className="details">
      <img
        src={details.Poster}
        alt={details.Title}
        className="details__poster"
      />
      <div className="details__info">
        <h1 className="text--heading">{details.Title}</h1>
        <h2 className="text--subheading details__heading">
          Released: {details.Released}
        </h2>
        <h2 className="text--subheading details__heading">
          Genre: {details.Genre}
        </h2>
        <h2 className="text--subheading details__heading">
          Ratings:{" "}
          {details.Ratings.map((rating) => (
            <p key={rating.Source} className="text--body">
              {rating.Source}: {rating.Value}
            </p>
          ))}
        </h2>
        <h2 className="text--subheading details__heading">
          Age Rating: {details.Rated}
        </h2>
        {details.Type === "movie" ? (
          <h2 className="text--subheading details__heading">
            Movie Runtime: {details.Runtime}
          </h2>
        ) : (
          <h2 className="text--subheading details__heading">
            Episode Runtime: {details.Runtime}
          </h2>
        )}
        {details.Type === "movie" ? (
          <h2 className="text--subheading details__heading">
            Box Office: {details.BoxOffice}
          </h2>
        ) : (
          <h2 className="text--subheading details__heading">
            Total Seasons: {details.totalSeasons}
          </h2>
        )}
        <h2 className="text--subheading details__heading">
          Directed By: {details.Director}
        </h2>
        <h2 className="text--subheading details__heading">
          Written By: {details.Writer}
        </h2>
        <h2 className="text--subheading details__heading">
          Starring: {details.Actors}
        </h2>
        <h2 className="text--subheading details__heading">
          Plot Summary:<p className="text--body">{details.Plot}</p>
        </h2>
      </div>
    </div>
  );
}

export default Details;
