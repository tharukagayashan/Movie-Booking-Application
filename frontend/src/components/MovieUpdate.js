import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Imglogo from "../img/logo.jpg"
import { useParams } from 'react-router-dom';

export default function MovieUpdate() {

    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/movie/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const updateMovie = (e) => {
        e.preventDefault();

        axios.put(`/movie/update/${id}`, data)
            .then(() => {
                alert("update Successful");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className=" display-table mt-1">
                <div className="row display-table-row ">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box mt-5" id="navigation">
                        <div className="logo mt-5">
                            <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm  " />

                            </a>

                        </div>
                        <center><h3 style={{ color: "white" }}><b>Admin Panel</b></h3> </center>
                        <div className="navi mt-5">
                            <ul>
                                <li ><a href="/movieadmin"><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Movie Management</span></a></li>
                                <li><a href="#"><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Hall Management</span></a></li>
                                <li><a href="#"><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Booking Management</span></a></li>

                                <li><a href="/adminreport"><span className="hidden-xs hidden-sm">&nbsp;&nbsp;User Management</span></a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">

                        <div className="row">
                            <header className="topbar" >
                                <div className="container">
                                    <div className="row">

                                    </div>

                                </div>
                            </header>



                            <header class="section-header">

                                <nav class="navbar navbar-dark navbar-expand p-0 bg-dark">
                                    <div class="container-fluid">
                                        <ul class="navbar-nav d-none d-md-flex mr-auto">
                                            <li class="nav-item"><a class="nav-link" href="#" data-abc="true">Home</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#" data-abc="true">Signout</a></li>
                                        </ul>
                                        <ul class="navbar-nav d-flex align-items-center">
                                            <li class="nav-item">
                                                <div class="d-flex flex-row">

                                                </div>
                                            </li>


                                        </ul>
                                    </div>

                                </nav>

                                <section class="header-main border-bottom bg-white">
                                    <div class="container-fluid">
                                        <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
                                            <div class="col-md-2">
                                                <img class="d-none d-md-flex" src="https://www.thehandbook.com/cdn-cgi/image/width=300,height=300,fit=cover,q=85/https://files.thehandbook.com/uploads/2021/02/aauvwnipsjzine6yatp-mlqwzwrvjlrlv4kdutc2oni4wgs800-c-k-c0x00ffffff-no-rj.jpg" width="100" />
                                            </div>

                                            <div class="col-md-2">
                                                <div class="d-flex d-none d-md-flex flex-row align-items-center">
                                                    <span class="shop-bag"><i class='bx bxs-shopping-bag'></i></span>
                                                    <div class="d-flex flex-column ms-2">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                                <center>
                                    <h3 className="text-dark mt-5">Movie Update </h3>
                                    <form className="col-lg-4" onSubmit={updateMovie}>
                                        <div className="form-group">
                                            <label>Movie Name</label>
                                            <input type="text" name="movie_name" id="movie_name" value={data.movie_name} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>movie_category</label>&nbsp;&nbsp;
                                            <input type="text" name="movie_category" id="movie_category" value={data.movie_category} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Year</label>&nbsp;&nbsp;
                                            <input type="text" name="year" id="year" value={data.year} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Ratings</label>&nbsp;&nbsp;
                                            <input type="text" name="ratings" id="ratings" value={data.ratings} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Cast</label>&nbsp;&nbsp;
                                            <input type="text" name="lead_cast" id="lead_cast" value={data.lead_cast} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Director</label>&nbsp;&nbsp;
                                            <input type="text" name="director_name" id="director_name" value={data.director_name} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Language</label>&nbsp;&nbsp;
                                            <input type="text" name="language" id="language" value={data.language} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Released_Date</label>&nbsp;&nbsp;
                                            <input type="text" name="released_date" id="released_date" value={data.released_date} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Available Halls</label>&nbsp;&nbsp;
                                            <input type="text" name="available_halls" id="available_halls" value={data.available_halls} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>&nbsp;&nbsp;
                                            <input type="text" name="description" id="description" value={data.description} className="form-control" onChange={handleChange} />
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="submit" name="submit" id="submit" value="Update" className="form-control btn btn-primary" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="button" name="cancel" id="cancel" value="Cancel" className="form-control btn btn-danger" />
                                        </div>


                                    </form>
                                </center>


                            </header>

                        </div>


                    </div>
                </div>
            </div>
        </div>


    )

}