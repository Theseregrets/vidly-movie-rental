import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>
            <h3>Title</h3>
          </th>
          <th onClick={() => onSort("year")}>
            <h3>Year</h3>
          </th>
          <th onClick={() => onSort("ratings")}>
            <h3>Ratings</h3>
          </th>
          <th>
            <h3>Release Date</h3>
          </th>
          <th>
            <h3>Poster</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movies) => (
          <tr key={movies.id}>
            <td>{movies.title}</td>
            <td>{movies.year}</td>
            <td>{movies.imdbRating}</td>
            <td>{movies.releaseDate}</td>
            <td>
              <img src={movies.posterurl} alt="" className="image" />
            </td>
            <td>
              <Like liked={movies.liked} onClick={() => onLike(movies)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movies)}
                className="btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
