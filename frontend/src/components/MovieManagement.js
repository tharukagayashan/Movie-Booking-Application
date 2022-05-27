import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieManagement() {

    const [movie, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`/movie/`)
            .then((movies) => {
                setMovies(movies.data);
                console.log(movies.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);


    function deleteMovie(id) {
        axios.delete(`/movie/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
        window.location.reload();
    }

    return (
        <div>
            <h1 className='text-danger'>Movie Management</h1>
                <table className='table table-bordered table-striped'>
                    <tr>
                        <th scope="col">Poster</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Year</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Category</th>
                        <th scope="col">Cast</th>
                        <th scope="col">Options</th>
                    </tr>

                    <tbody>
                        {
                            movie.map((val, key) => {
                                return (
                                    <tr>
                                        <td style={{width:"100px"}}><img src={val.poster} width="100" /></td>
                                        <td style={{width:"100px"}}>{val.movie_name}</td>
                                        <td style={{width:"100px"}}>{val.year}</td>
                                        <td style={{width:"100px"}}>{val.ratings}</td>
                                        <td style={{width:"100px"}}>{val.movie_category}</td>
                                        <td style={{width:"100px"}}>{val.lead_cast}</td>
                                        <td style={{width:"100px"}}><a href={`/update/`+val._id} className='btn-sm btn-primary'>Update</a>  <button className='btn-sm btn-danger' onClick={() => deleteMovie(val._id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div >
    );
}

export default MovieManagement;