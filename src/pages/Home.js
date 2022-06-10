import React from 'react'
import {Link} from 'react-router-dom'

export default function Home()
{
    return (
       <React.Fragment>
        <section id="title">
        <div className="container-fluid">
           
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">INTOT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to= "/Login" style={{textDecoration:"none", color:"white"}}>Login
            
              <img src="assets/images/login.png" alt="" />
              </Link>
                        </li>
                        <li className="nav-item">
                        <Link to= "/Signup" style={{textDecoration:"none", color:"white"}}>Sign Up
              <img src="assets/images/signup.png" alt="" />
              </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href=""><img src="assets/images/search-icon.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href=""><img src="assets/images/menu.png"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
    
        </div>
            <section className=" slider position">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-3 offset-md-2">
                                <div className="slider_detail">
                                    <h1>
                                        INNOVATIVE
                                        <span>
                                          SOLUTIONS
                                        </span>
                                      </h1>
                                    <p>We find the best solutions fot you, we redesign your home and work places.
                                        Discover why over 5,100 home owners trust initiative</p>
                                   
                                    <button className="btn btn-outline-light btn-lg  download-button" type="button">Read more</button>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="slider_img-box">
                                    <img src="assets/images/slider-img.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-3 offset-md-2">
                                <div className="slider_detail">
                                    <h1>
                                        INNOVATIVE
                                        <span>
                                          SOLUTIONS
                                        </span>
                                      </h1>
                                    <p>We find the best solutions fot you, we redesign your home and work places.
                                        Discover why over 5,100 home owners trust initiative</p>
                                    
                                    <button className="btn btn-outline-light btn-lg download-button " type="button">Read more</button>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="slider_img-box">
                                    <img src="assets/images/slider-img.png" alt=""/>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="carousel_btn-container">
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                        data-slide="prev">
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                        data-slide="next">
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
            </section>
       
        </section>
        
        <section className="section_about layout_padding">
            <div className="container">
              <h2>
                WHY INITIATIVE COMPANY
              </h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem
              </p>
            </div>
            <div className="container">
                <div className="about-container">
                  <div className="card">
                    <div className="about-detail">
                      <div className="about_img-box">
                        <img src="assets/images/card-img-1.png" alt=""/>
                      </div>
                      <div className="card_detail-ox">
                        <h4>
                          10 YEARS EXPERIENCE
                        </h4>
                        <p>
                          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                          vehicula ut id elit. Morbi leo risus.
                        </p>
                      </div>
                    </div>
                  <div>
                        
                      <button className="btn btn-outline-light  about-btn">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="about-detail">
                      <div className="about_img-box">
                        <img src="assets/images/card-img-2.png" alt=""/>
                      </div>
                      <div className="card-detail-box">
                        <h4>
                          A PRO ARCHITECTS TEAM
                        </h4>
                        <p>
                          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                          vehicula ut id elit. Morbi leo risus.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <button className="btn btn-outline-light  about-btn">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="about-detail">
                      <div className="about_img-box">
                        <img src="assets/images/card-img-3.png" alt=""/>
                      </div>
                      <div className="card_detail-ox">
                        <h4>
                          1000+ HAPPY CUSTOMERS
                        </h4>
                        <p>
                          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                          vehicula ut id elit. Morbi leo risus.
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-outline-light  about-btn">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

  
            
  <section className="sec-portfolio padding2">
    <div className="container">
      <h2>
        OUR PORTFOLIO
      </h2>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem
      </p>
    </div>    
    <div className="container padding2-top ">
      <div className="row">
        <div className="col-md-8">
          <div className="folio-img-box">
            <img src="assets/images/portfolio-img-1.png" alt=""/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="folio-img-box">
            <img src="assets/images/portfolio-img-2.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="folio-img-box">
            <img src="assets/images/portfolio-img-3.png" alt=""/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="folio-img-box">
            <img src="assets/images/portfolio-img-4.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    <section className="sec-team padding3">
      <div className="container">
        <h2>
          OUR TEAM
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable
        </p>
      </div>
      <div className="container">
        <div className="team-container team-padding3">
          <div className="team-card">
            <div className="team-img-box">
              <img src="assets/images/team-1.png" alt=""/>
            </div>
            <div className="team-detail-box">
              <h5>
                JOHN DOE
              </h5>
              <p>
                CEO - DESIGNER
              </p>
              <div className="team-follow">
                <h6>
                  Follow On
                </h6>
                <div className="team-social">
                  <div>
                    <a href="">
                      <img src="assets/images/facebook-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src=" assets/images/twitter-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/linkedin.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/instagram.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-img-box">
              <img src="assets/images/team-2.png" alt=""/>
            </div>
            <div className="team-detail-box">
              <h5>
                sandy DOE
              </h5>
              <p>
                CEO - DESIGNER
              </p>
              <div className="team-follow">
                <h6>
                  Follow On
                </h6>
                <div className="team-social">
                  <div>
                    <a href="">
                      <img src="assets/images/facebook-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src=" assets/images/twitter-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/linkedin.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/instagram.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-img-box">
              <img src="assets/images/team-3.png" alt=""/>
            </div>
            <div className="team-detail-box">
              <h5>
                Alexi DOE
              </h5>
              <p>
                CEO - DESIGNER
              </p>
              <div className="team-follow">
                <h6>
                  Follow On
                </h6>
                <div className="team-social">
                  <div>
                    <a href="">
                      <img src="assets/images/facebook-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src=" assets/images/twitter-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/linkedin.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/instagram.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-img-box">
              <img src="assets/images/team-4.png" alt=""/>
            </div>
            <div className="team-detail-box">
              <h5>
                JOHN DOE
              </h5>
              <p>
                CEO - DESIGNER
              </p>
              <div className="team-follow">
                <h6>
                  Follow On
                </h6>
                <div className="team-social">
                  <div>
                    <a href="">
                      <img src="assets/images/facebook-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src=" assets/images/twitter-logo-button.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/linkedin.png" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src="assets/images/instagram.png" alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  

   <section className="conslt-section padding4">
    <div className="container">
      <p>
        Don’t Hesitate To Ask
      </p>
      <h2 className="">
        FREE CONSULTATION
      </h2>
    </div>
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <form action="">
            <div className="conslt-form-container">
              <div>
                <div>
                  <label>
                    Name
                    <input type="text" />
                  </label>
                </div>
                <div>
                  <label>
                    Email
                    <input type="email" />
                  </label>
                </div>

                <div>
                  <label>
                    Phone Number
                    <input type="text" />
                  </label>
                </div>

                <div>
                  <label>
                    Message
                    <textarea  cols="30" rows="10"></textarea>
                  </label>
                </div>
                <div className="mt-5">
                  <button type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="conslt-img-box">
            <img src="assets/images/form-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
   
       </React.Fragment>
    )
}