import { Link } from 'react-router-dom';

import './Card.css';

function Card({ item }) {
    return (
        <Link to={'/details/' + item.imdbID} className="card">
            <img src={item.Poster} alt={item.Title} className="card__poster" />
            <h2 className="card__title">{item.Title}</h2>
            <h3 className="card__year">{item.Year}</h3>
            <h3 className="card__id">IMDB ID - {item.imdbID}</h3>
        </Link>
    );
}

export default Card;
