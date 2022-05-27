import React from "react";
import "../css/footer.css";

function Footer() {
    return (
      <div>
      <footer id="dk-footer" class="dk-footer">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 col-lg-4 container8">
                      <div class="dk-footer-box-info boxBlue p-5" style={{marginTop:"200px"}}>
                          <a href="index.html" class="footer-logo">
                              {/* <img src={Imglogo} alt="footer_logo" class="img-fluid" /> */}
                          </a>
                          <div class="footer-social-link">
                              <h3>Follow us</h3>
                              <ul>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-facebook"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-twitter"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-google-plus"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-linkedin"></i>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i class="fa fa-instagram"></i>
                                      </a>
                                  </li>
                              </ul>
                          </div>

                      </div>

                      <div class="footer-awarad" style={{marginBottom:"-10px"}}>
                          <img src="images/icon/best.png" alt="" />
                          <p className="pTag1" style={{marginBottom:"-10px"}}>Best Movie Booking Site</p>
                      </div>
                  </div>

                  <div class="col-md-12 col-lg-8">

                      <div class="row">
                          <div class="col-md-12 col-lg-6">
                              <div class="footer-widget footer-left-widget">
                                  <div class="section-heading mt-3">
                                      <h3>Useful Links</h3>
                                      <span class="animate-border border-black"></span>
                                  </div>
                                  <ul>
                                      <li>
                                          <a href="#">About us</a>
                                      </li>
                                      <li>
                                          <a href="#">Services</a>
                                      </li>
                                      <li>
                                          <a href="#">Projects</a>
                                      </li>
                                      <li>
                                          <a href="#">Our Team</a>
                                      </li>
                                  </ul>
                                  <ul>
                                      <li>
                                          <a href="#">Contact us</a>
                                      </li>
                                      <li>
                                          <a href="#">Blog</a>
                                      </li>
                                      <li>
                                          <a href="#">Testimonials</a>
                                      </li>
                                      <li>
                                          <a href="#">Faq</a>
                                      </li>
                                  </ul>
                              </div>

                          </div>

                          <div class="col-md-12 col-lg-6">
                              <div class="footer-widget">
                                  <div class="section-heading mt-3">
                                      <h3>Subscribe</h3>
                                      <span class="animate-border border-black"></span>
                                  </div>
                                  <p  className="pTag">
                                      Sri Lankan number 01 Movie booking client.</p>
                                  <form action="#">
                                      <div class="form-row">
                                          <div class="col dk-footer-form">
                                              <input type="email" class="form-control" style={{height:"40px"}} placeholder="Email Address" />
                                              <button type="submit">
                                                  <i style={{color:"white"}} class="fa fa-send"></i>
                                              </button>
                                          </div>
                                      </div>
                                  </form>

                              </div>

                          </div>

                      </div>

                  </div>

              </div>

          </div>



          <div class="copyright">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                          <span>Copyright Â© 2019, All Right Reserved Seobin</span>
                      </div>

                      <div class="col-md-6">
                          <div class="copyright-menu">
                              <ul>
                                  <li>
                                      <a href="#">Home</a>
                                  </li>
                                  <li>
                                      <a href="#">Terms</a>
                                  </li>
                                  <li>
                                      <a href="#">Privacy Policy</a>
                                  </li>
                                  <li>
                                      <a href="#">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>

              </div>

          </div>

          <div id="back-to-top" class="back-to-top">
              <button class="btn btn-dark" title="Back to Top">
                  <i class="fa fa-angle-up"></i>
              </button>
          </div>

      </footer>

  </div>
    );
}
export default Footer;