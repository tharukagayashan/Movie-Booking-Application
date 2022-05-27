//eslint-disable-line react-hooks/exhaustive-deps
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/movie_profile.css'
import qrcode from 'qrcode';

const MovieProfile = () => {

    const params = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/movie/${params.id}`)
            .then((data) => {
                setData(data.data);
                console.log(data.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    //Qr code Generate part
    var qr = '';
    qrcode.toDataURL(`http://localhost:3000/booking/${params.id}`, ((err, url) => {
        if (err) {
            console.log(err);
        }
        qr = url;
    }))

    return (
        <div style={{marginTop:"100px"}}>
            {/* Navigation */}
            <div className="fixed-top">
                <header className="topbar">
                    <div className="container">
                        <div className="row">
                            {/* social icon*/}
                            <div className="col-sm-12">
                                <ul className="social-network">
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-pinterest" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-google-plus" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                    <div className="container">
                        <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{ textTransform: 'uppercase' }}>SL Movie Zone</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active" style={{ marginLeft: "600px" }}>
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/bookings">Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart">Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container'>
                <div className="container bg-white mt-3 mb-3">
                    <h2>{data.movie_name}  ({data.year})</h2>
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center">
                                <img className="mt-5" width="250px" src={data.poster} />
                            </div>
                        </div>
                        <div className="col-md-1 border-right"></div>
                        <div className='col-md-4 border-right'>
                            <div className="d-flex flex-column">
                                <table className='mt-5 text-start'>
                                    <tr>
                                        <td><b>Name               : </b></td>
                                        <td>{data.movie_name}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Year               : </b></td>
                                        <td>{data.year}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Category           : </b></td>
                                        <td>{data.movie_category}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Lead Cast          : </b></td>
                                        <td>{data.lead_cast}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Language           : </b></td>
                                        <td>{data.language}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Ratings            : </b></td>
                                        <td>{data.ratings}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Director           : </b></td>
                                        <td>{data.director_name}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Released Date      : </b></td>
                                        <td>{data.released_date}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Available Halls    : </b></td>
                                        <td>{data.available_halls}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><br /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><p style={{ textAlign: 'justify' }}><b>{data.description}</b></p></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <a href={`/booking/${params.id}`}><button className='btn btn-primary w-100 mb-2'>Book Now</button></a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-1 border-right"></div>
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center">
                                <h4 className='mt-5'>Scan the QR code for Booking</h4>
                                <img src={qr} width="250px" className='qr-img' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MovieProfile;