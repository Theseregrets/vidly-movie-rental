import React, { Component } from 'react';
import Pagination from './components/common/pagination'
import Like from './components/common/like';
import moviesData from './moviesData'

class Movies extends Component {
    state = {
        movies: moviesData,
        pageSize: 6,
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

    handlePageChange = () => {
        console.log('page change')
    }

    render() {

        if (this.state.movies.length === 0) return <p>no movies available</p>

        return (
            <React.Fragment>
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
                        {this.state.movies.map(movies => <tr key={movies.id}>
                            <td>{movies.title}</td>
                            <td>{movies.year}</td>
                            <td>{movies.imdbRating}</td>
                            <td>{movies.releaseDate}</td>
                            <td><img src={movies.posterurl} alt="" className='image' /></td>
                            <td>
                                <Like liked={movies.liked} onClick={() => this.handleLike(movies)} />
                            </td>
                            <td><button onClick={() => this.handleDelete(movies)} className="btn btn-danger">delete</button></td>
                        </tr>)}

                    </tbody>
                </table>
                <Pagination pageSize={this.state.pageSize} itemsCount={this.state.movies.length} onPageChange={this.handlePageChange} />
            </React.Fragment>
        );
    }
}

export default Movies;

