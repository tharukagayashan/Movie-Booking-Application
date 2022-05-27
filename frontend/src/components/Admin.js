import React from 'react';
import "../css/admin.css";
import Imglogo from "../img/logo.jpg"
import MovieAdmin from './MovieAdmin';

export default function Admin() {
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
                                        <div class="col-md-8">
                                            <div class="d-flex form-inputs">
                                                <input class="form-control" type="text" placeholder="Search..." />
                                                <i class="bx bx-search"></i>
                                            </div>
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


                        </header>

                    </div>


                </div>
            </div>
        </div>
    )
}