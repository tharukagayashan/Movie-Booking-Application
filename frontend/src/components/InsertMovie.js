import { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';
import "../css/admin.css";
import Imglogo from "../img/logo.jpg"

export const InsertMovie = () => {

    const [movie_name, setMovieName] = useState("");
    const [lead_cast, setLeadCast] = useState("");
    const [director_name, setDirectorName] = useState("");
    const [released_date, setReleasedDate] = useState("");
    const [ratings, setRatings] = useState("");
    const [language, setLanguage] = useState("");
    const [description, setDescription] = useState("");
    const [movie_category, setMovieCategory] = useState("");
    const [year, setYear] = useState("");
    const [available_halls, setAvailableHalls] = useState("");
    const [poster, setPoster] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let formData = new FormData();

            formData.append('movie_name', movie_name);
            formData.append('lead_cast', lead_cast);
            formData.append('director_name', director_name);
            formData.append('released_date', released_date);
            formData.append('ratings', ratings);
            formData.append('language', language);
            formData.append('description', description);
            formData.append('poster', poster);
            formData.append('movie_category', movie_category);
            formData.append('year', year);
            formData.append('available_halls', available_halls);

            axios.post('/movie/insert', formData)
                .then(() => {
                    alert("Inserted Successfully");
                })
                .catch((err) => {
                    console.log(err);
                })

        }
        catch (err) {
            console.log(err);
        }

    }

    return (

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

                    </div>




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
                            <div className="container mt-5">
                                <div className='col-4 p-4 mt-3' style={{ backgroundColor: '#e7f5fe' }}>
                                    <center><h5>Insert New Movie</h5></center>
                                    <form onSubmit={handleSubmit}>
                                        <div className='row mt-3'>
                                            <div className='col mt-2'>
                                                Movie Name : <input className='form-control' type="text" name="movie_name" id="movie_name" value={movie_name} onChange={(e) => {
                                                    setMovieName(e.target.value);
                                                    console.log(e.target.value);
                                                }} />
                                            </div>
                                            <div className='col mt-2'>
                                                Year : <input className='form-control' type="text" name="year" id="year" value={year} onChange={(e) => {
                                                    setYear(e.target.value)
                                                    console.log(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        Lead Cast : <input className='form-control col-sm-3 mt-2' type="text" name="lead_Cast" id="lead_Cast" value={lead_cast} onChange={(e) => {
                                            setLeadCast(e.target.value)
                                            console.log(e.target.value);
                                        }} />
                                        <div className='row'>
                                            <div className='col mt-2'>
                                                Released Date : <input className='form-control' type="text" name="released_date" id="released_date" value={released_date} onChange={(e) => {
                                                    setReleasedDate(e.target.value)
                                                    console.log(e.target.value);
                                                }} />
                                            </div>
                                            <div className='col mt-2'>
                                                Ratings : <input className='form-control' type="text" name="ratings" id="ratings" value={ratings} onChange={(e) => {
                                                    setRatings(e.target.value)
                                                    console.log(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        Director : <input className='form-control mt-2' type="text" name="director_name" id="director_name" value={director_name} onChange={(e) => {
                                            setDirectorName(e.target.value)
                                            console.log(e.target.value);
                                        }} />
                                        <div className='row'>
                                            <div className='col mt-2'>
                                                Language : <input className='form-control' type="text" name="language" id="language" value={language} onChange={(e) => {
                                                    setLanguage(e.target.value)
                                                    console.log(e.target.value);
                                                }} />
                                            </div>
                                            <div className='col mt-2'>
                                                Category : <input className='form-control' type="text" name="movie_category" id="movie_category" value={movie_category} onChange={(e) => {
                                                    setMovieCategory(e.target.value)
                                                    console.log(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        Description : <input className='form-control mt-2' type="text" name="description" id="description" value={description} onChange={(e) => {
                                            setDescription(e.target.value)
                                            console.log(e.target.value);
                                        }} />
                                        Poster : <input className='form-control mt-2' type="file" name="poster" onChange={(e) => {
                                            setPoster(e.target.files[0]);
                                            console.log(e.target.files[0]);
                                        }} />
                                        Available Halls : <input className='form-control mt-2' type="text" name="available_halls" id="available_halls" value={available_halls} onChange={(e) => {
                                            setAvailableHalls(e.target.value)
                                            console.log(e.target.value);
                                        }} /><br />
                                        <input type="submit" value="Insert Movie" className='form-control btn btn-primary mt-2' /><br />
                                    </form>
                                </div>
                            </div>
                        </center>

                    </header>

                </div>


            </div>
        </div>

    )
};

export default InsertMovie;