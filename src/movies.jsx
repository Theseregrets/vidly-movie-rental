import React, { Component } from 'react'
import Like from './components/common/like';
import moviesData from './moviesData'

class Movies extends Component {
    state = {
        movies: moviesData
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

    render() {

        if (this.state.movies.length === 0) return <p>no movies available</p>

        return (
            <table>
                <thead>
                    <tr>
                        <th><h3>title</h3></th>
                        <th><h3>year</h3></th>
                        <th><h3>imdb ratings</h3></th>
                        <th><h3>release Date</h3></th>
                        <th><h3>poster</h3></th>
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
        );
    }
}

export default Movies;

