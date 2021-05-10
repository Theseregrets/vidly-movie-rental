import React, { Component } from 'react';
import Pagination from './common/pagination'
import Like from './common/like';
import List from './common/list'
import moviesData from '../moviesData'
import { paginate } from '../utils/paginate'
import genresData from '../genresData'

class Movies extends Component {
    state = {
        movies: moviesData,
        pageSize: 6,
        currentPage: 1,
        genres: genresData

    }
    handleDelete = movies => {
        const movie = this.state.movies.filter(m => m.id !== movies.id);
        this.setState({ movies: movie })
    }
    handleLike = (movies) => {
        const movie = [...this.state.movies]
        const index = movie.indexOf(movies);
        movie[index] = { ...movie[index] };
        movie[index].liked = !movie[index].liked;
        this.setState({ movies: movie })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    render() {

        const { length: count } = this.state.movies
        const { pageSize, currentPage, movies: allMovies, genres } = this.state

        const movies = paginate(allMovies, currentPage, pageSize)

        if (count === 0) return <p>no movies available</p>

        return (
            <div className="row">
                <div className="col-2"><List genres={genres} /></div>
                <div className="col"> <React.Fragment>
                    <p> {count} movies are available in the database </p>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th><h3>Title</h3></th>
                                <th><h3>Year</h3></th>
                                <th><h3>Ratings</h3></th>
                                <th><h3>Release Date</h3></th>
                                <th><h3>Poster</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movies => <tr key={movies.id}>
                                <td>{movies.title}</td>
                                <td>{movies.year}</td>
                                <td>{movies.imdbRating}</td>
                                <td>{movies.releaseDate}</td>
                                <td><img src={movies.posterurl} alt="" className='image' /></td>
                                <td>
                                    <Like liked={movies.liked}
                                        onClick={() => this.handleLike(movies)} />
                                </td>
                                <td><button
                                    onClick={() => this.handleDelete(movies)}
                                    className="btn btn-danger">
                                    delete
                                </button>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>
                    <Pagination
                        pageSize={pageSize}
                        itemsCount={count}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </React.Fragment></div>
            </div>



        );
    }
}

export default Movies;

