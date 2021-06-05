import React, { Component } from "react";
import Pagination from "./common/pagination";
import MoviesTable from "./movieTable";

import List from "./common/list";
import moviesData from "../moviesData";
import { paginate } from "../utils/paginate";
import genresData from "../genresData";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 6,
    currentPage: 1,
    genres: [],
  };
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...genresData];
    this.setState({ movies: moviesData, genres });
  }

  handleDelete = (movies) => {
    const movie = this.state.movies.filter((m) => m.id !== movies.id);
    this.setState({ movies: movie });
  };
  handleLike = (movies) => {
    const movie = [...this.state.movies];
    const index = movie.indexOf(movies);
    movie[index] = { ...movie[index] };
    movie[index].liked = !movie[index].liked;
    this.setState({ movies: movie });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleItemSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) => {
    console.log(path);
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre.id
        ? allMovies.filter((m) => m.genres.id === selectedGenre.id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    if (count === 0) return <p>no movies available</p>;

    return (
      <div className="row">
        <div className="col-2">
          <List
            genres={genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleItemSelect}
          />
        </div>
        <div className="col">
          {" "}
          <React.Fragment>
            <p> {filtered.length} movies are available in the database </p>

            <MoviesTable
              movies={allMovies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              pageSize={pageSize}
              itemsCount={filtered.length}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Movies;
