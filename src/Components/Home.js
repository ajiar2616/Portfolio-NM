import React from "react";

const Home = () => {
  return (
    <div>
      {/* ------------------ */}

      <div className="animsition">
        <div className="loader">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>

        {/* <!-- Content CLick Capture--> */}

        <div className="click-capture"></div>

        {/* <!-- Sidebar Menu--> */}

        <div className="menu">
          <span className="close-menu icon-cross2 right-boxed"></span>
          <ul className="menu-list right-boxed">
            <li data-menuanchor="page1">
              <a href="#page1">Home</a>
            </li>
            <li data-menuanchor="page2">
              <a href="#page2">Specialization</a>
            </li>
            <li data-menuanchor="page3">
              <a href="#page3">Resume</a>
            </li>
            <li data-menuanchor="page4">
              <a href="#page4">About</a>
            </li>
            <li data-menuanchor="page5">
              <a href="#page5">Projects</a>
            </li>
            <li data-menuanchor="page7">
              <a href="#page7">Testimonials</a>
            </li>
            <li data-menuanchor="page8">
              <a href="#page8">Contact</a>
            </li>
          </ul>
          <div className="menu-footer right-boxed">
            <div className="social-list">
              <a href="" className="icon ion-social-twitter"></a>
              <a href="" className="icon ion-social-facebook"></a>
              <a href="" className="icon ion-social-googleplus"></a>
              <a href="" className="icon ion-social-linkedin"></a>
              <a href="" className="icon ion-social-dribbble-outline"></a>
            </div>
            <div className="copy">© Ramsay 2019. All Rights Reseverd</div>
          </div>
        </div>

        {/* <!-- Navbar --> */}

        <header className="navbar navbar-fullpage boxed">
          <div className="navbar-bg"></div>
          <a className="brand" href="#">
            <img alt="" src="assets/images/brand.png" />
            <div className="brand-info">
              <div className="brand-name">Ramsay</div>
            </div>
          </a>

          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div className="contacts d-none d-md-block">
            <div className="contact-item">+96 56-85-1379</div>
            <div className="contact-item spacer">/</div>
            <div className="contact-item">
              <a href="mailto:contact@Ramsay.com">contact@Ramsay.com</a>
            </div>
          </div>
        </header>
        <div className="copy-bottom white boxed">© Ramsay 2019.</div>
        <div className="social-list social-list-bottom boxed">
          <a href="" className="icon ion-social-twitter"></a>
          <a href="" className="icon ion-social-facebook"></a>
          <a href="" className="icon ion-social-googleplus"></a>
          <a href="" className="icon ion-social-linkedin"></a>
          <a href="" className="icon ion-social-dribbble-outline"></a>
        </div>
        <div className="pagepiling">
          <div
            data-anchor="page1"
            className="pp-scrollable text-white section section-1"
          >
            <div className="scroll-wrap">
              <div
                className="section-bg"
                style={{backgroundImage:`url(assets/images/bg/main.jpg)`}}
              ></div>
              <div className="scrollable-content">
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro">
                          <div className="row">
                            <div className="col-md-8 col-lg-6">
                              <h1
                                className="display-2 text-white  wow fadeIn"
                                data-wow-delay="0.1s"
                              >
                                <span className="text-primary">Howdy,</span> I'm
                                Ramsay
                              </h1>
                              <a
                                className="popup-youtube"
                                href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                              >
                                <span className="icon ion-ios-play"></span>Watch
                                video{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-anchor="page2" className="pp-scrollable section section-2">
            <div className="scroll-wrap">
              <div className="scrollable-content">
                <div className="vertical-title text-white  d-none d-lg-block">
                  <span>what I do</span>
                </div>
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro">
                          <h2 className="title mb-5 pb-5">
                            {" "}
                            <span className="text-primary">My</span> specialization
                          </h2>
                          <div className="row-specialization row">
                            <div className="col-specialization col-md-6 col-lg-4">
                              <span className="icon-specialization icon-laptop-phone"></span>
                              <h4 className="text-uppercase">Mobile Design</h4>
                              <p>
                                Working with client and community, we deliver
                                masterplans that create vibrant new places and
                                spaces, attract people, and encourage investment
                                through.
                              </p>
                            </div>
                            <div className="col-specialization col-md-6 col-lg-4">
                              <span className="icon-specialization icon-smartphone-embed"></span>
                              <h4 className="text-uppercase">Coding</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Rerum fuga dicta voluptatum
                                hic aut aspernatur magnam voluptates itaque
                                atque quae laudantium, tempora at.
                              </p>
                            </div>
                            <div className="col-specialization col-md-6 col-lg-4">
                              <span className="icon-specialization icon-diamond2"></span>
                              <h4 className="text-uppercase">Illustration</h4>
                              <p>
                                Working with client and community, we deliver
                                masterplans that create vibrant new places and
                                spaces, attract people, and encourage investment
                                through.
                              </p>
                            </div>
                          </div>
                          <div className="view-all">
                            <a href="#">Download resume</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-anchor="page3"
            className="pp-scrollable text-white section section-3"
          >
            <div className="scroll-wrap">
              <div
                className="section-bg mask"
                style={{backgroundImage:`url(assets/images/bg/resume.jpg)`}}
              ></div>
              <div className="scrollable-content">
                <div className="vertical-title d-none d-lg-block">
                  <span>resume</span>
                </div>
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro">
                          <div className="row row-resume">
                            <div className="col-md-6 fadeY fadeY-1">
                              <h2 className="resume-header title">Education</h2>
                              <div className="col-resume">
                                <div className="resume-content">
                                  <div className="resume-inner">
                                    <div className="resume-row">
                                      <h6 className="resume-type">
                                        Specialization course
                                      </h6>
                                      <i className="resume-study">
                                        University of studies, Poland, Cracow
                                        <br />
                                        Jan 2004 - Dec 2006
                                      </i>
                                      <p className="resume-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minus nobis animi
                                        assumenda sint recusandae! Dolor placeat
                                        debitis animi illum quo repellendus
                                        pariatur, enim
                                      </p>
                                    </div>
                                    <div className="resume-row">
                                      <h6 className="resume-type">
                                        Academy course
                                      </h6>
                                      <i className="resume-study">
                                        University of studies, Poland, Cracow
                                        <br />
                                        Jan 2004 - Dec 2006
                                      </i>
                                      <p className="resume-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minus nobis animi
                                        assumenda sint recusandae! Dolor placeat
                                        debitis animi illum quo repellendus
                                        pariatur, enim{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 pt-md-5 mt-md-5 fadeY fadeY-2">
                              <h2 className="resume-header title">Experience</h2>
                              <div className="col-resume">
                                <div className="resume-content">
                                  <div className="resume-inner">
                                    <div className="resume-row">
                                      <h6 className="resume-type">
                                        WEBDESIGNER & FRONT-END
                                      </h6>
                                      <i className="resume-study">
                                        University of studies, Poland, Cracow
                                        <br />
                                        Jan 2004 - Dec 2006
                                      </i>
                                      <p className="resume-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minus nobis animi
                                        assumenda sint recusandae! Dolor placeat
                                        debitis animi illum quo repellendus
                                        pariatur, enim
                                      </p>
                                    </div>
                                    <div className="resume-row">
                                      <h6 className="resume-type">
                                        WORDPRESS DEVELOPER
                                      </h6>
                                      <i className="resume-study">
                                        University of studies, Poland, Cracow
                                        <br />
                                        Jan 2004 - Dec 2006
                                      </i>
                                      <p className="resume-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Minus nobis animi
                                        assumenda sint recusandae! Dolor placeat
                                        debitis animi illum quo repellendus
                                        pariatur, enim
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-anchor="page4" className="pp-scrollable section section-4">
            <div className="scroll-wrap">
              <div
                className="section-bg bg-about"
                style={{backgroundImage:`url(assets/images/bg/about.jpg)`}}
              ></div>
              <div className="scrollable-content">
                <div className="vertical-title text-white  d-none d-lg-block">
                  <span>about us</span>
                </div>
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro">
                          <div className="row align-items-center">
                            <div className="col-lg-6 offset-xl-1">
                              <div className="experience-box">
                                <div className="experience-content">
                                  <div className="experience-number">4</div>
                                  <div className="experience-info">
                                    <div>
                                      Years
                                      <br />
                                      Experience
                                      <br />
                                      Working
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5 mt-5 mt-xl-0">
                              <h2 className="title">
                                {" "}
                                <span className="text-primary">The best</span>{" "}
                                websites
                              </h2>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Accusantium dicta sit pariatur
                              odio unde deleniti eveniet.
                              <div className="progress-bars">
                                <div className="clearfix">
                                  <div className="number float-left">
                                    Mobile Design
                                  </div>
                                  <div className="number float-right">80%</div>
                                </div>
                                <div className="progress">
                                  <div className="progress-bar-wrp">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{width: "80%"}}
                                      aria-valuenow="0"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div className="clearfix">
                                  <div className="number float-left">Coding</div>
                                  <div className="number float-right">70%</div>
                                </div>
                                <div className="progress">
                                  <div className="progress-bar-wrp">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{width: "70%"}}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div className="clearfix">
                                  <div className="number float-left">
                                    Illustration
                                  </div>
                                  <div className="number float-right">70%</div>
                                </div>
                                <div className="progress">
                                  <div className="progress-bar-wrp">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{width: "70%"}}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-anchor="page5"
            className="pp-scrollable text-white section section-5"
          >
            <div className="scroll-wrap">
              <div className="bg-changer">
                <div
                  className="section-bg"
                  style={{backgroundImage:`url(assets/images/bg/project1.jpg)`}}
                ></div>
                <div
                  className="section-bg"
                  style={{backgroundImage:`url(assets/images/bg/project2.jpg)`}}
                ></div>
                <div
                  className="section-bg"
                  style={{backgroundImage:`url(assets/images/bg/project3.jpg)`}}
                ></div>
                <div
                  className="section-bg"
                  style={{backgroundImage:`url(assets/images/bg/project4.jpg)`}}
                ></div>
              </div>
              <div className="scrollable-content">
                <div className="vertical-title  d-none d-lg-block">
                  <span>my works</span>
                </div>
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="project-row">
                                <a className="active" href="project-detail.html">
                                  <span className="project-number">01</span>
                                  <h2 className="project-title">Abstract Skat</h2>
                                  <div className="project-category">
                                    Illustration
                                  </div>
                                </a>
                              </div>
                              <div className="project-row">
                                <a href="project-detail.html">
                                  <span className="project-number">02</span>
                                  <h2 className="project-title">Borato Prism</h2>
                                  <div className="project-category">Branding</div>
                                </a>
                              </div>
                              <div className="project-row">
                                <a href="project-detail.html">
                                  <span className="project-number">03</span>
                                  <h2 className="project-title">
                                    Brole Mobile App
                                  </h2>
                                  <div className="project-category">
                                    Mobile Design
                                  </div>
                                </a>
                              </div>
                              <div className="project-row">
                                <a href="project-detail.html">
                                  <span className="project-number">04</span>
                                  <h2 className="project-title">Bauhaus Studio</h2>
                                  <div className="project-category">
                                    House Design
                                  </div>
                                </a>
                              </div>
                              <div className="view-all view-all-projects">
                                <a href="projects.html">View all projects</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-anchor="page6" className="pp-scrollable section section-6">
            <div className="scroll-wrap">
              <div className="scrollable-content">
                <div className="vertical-title text-white d-none d-lg-block">
                  <span>partners</span>
                </div>
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro">
                          <h2 className="title text-white">
                            <span className="text-primary">Trusted</span> from
                            Clients
                          </h2>
                          <div className="row row-partners">
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/1.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/2.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/3.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/4.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/5.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/6.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/7.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/8.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/9.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/10.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/11.png" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-3 col-partner">
                              <div className="partner-inner">
                                <img alt="" src="assets/images/partners/12.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-anchor="page7"
            className="pp-scrollable text-white section section-7"
          >
            <div className="scroll-wrap">
              <div
                className="section-bg"
                style={{backgroundImage:`url(assets/images/bg/reviews.jpg)`}}
              ></div>
              <div className="bg-quote"></div>
              <div className="scrollable-content">
                <div className="vertical-title  d-none d-lg-block">
                  <span>testimonials</span>
                </div>
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro">
                          <div className="review-carousel owl-carousel">
                            <div className="review-carousel-item">
                              <div className="review-row">
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="review-author">
                                      <div className="author-name">
                                        David & Elisa
                                      </div>
                                      <i>Apartment view lake at Brooklyn</i>
                                    </div>
                                  </div>
                                  <div className="col-md-7 text">
                                    <p>
                                      If you are seeking an Interior designer
                                      that will understand exactly your needs,
                                      and someone who will utilise their
                                      creative and technical skills in parity
                                      with your taste, then Suzanne at The
                                      Ramsay Studio is perfect.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="review-row">
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="review-author">
                                      <div className="author-name">Amanda</div>
                                      <i>Apartment view lake at Brooklyn</i>
                                    </div>
                                  </div>
                                  <div className="col-md-7 text">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Odio dolorem reiciendis
                                      doloremque veniam perspiciatis quam velit
                                      pariatur eius, repellendus dolores eveniet
                                      maiores sed. Quod quam minus dolore sed
                                      cumque aliquid.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-carousel-item">
                              <div className="review-row">
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="review-author">
                                      <div className="author-name">
                                        David & Elisa
                                      </div>
                                      <i>Apartment view lake at Brooklyn</i>
                                    </div>
                                  </div>
                                  <div className="col-md-7 text">
                                    <p>
                                      If you are seeking an Interior designer
                                      that will understand exactly your needs,
                                      and someone who will utilise their
                                      creative and technical skills in parity
                                      with your taste, then Suzanne at The
                                      Ramsay Studio is perfect.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="review-row">
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="review-author">
                                      <div className="author-name">Amanda</div>
                                      <i>Apartment view lake at Brooklyn</i>
                                    </div>
                                  </div>
                                  <div className="col-md-7 text">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Odio dolorem reiciendis
                                      doloremque veniam perspiciatis quam velit
                                      pariatur eius, repellendus dolores eveniet
                                      maiores sed. Quod quam minus dolore sed
                                      cumque aliquid.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-carousel-item">
                              <div className="review-row">
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="review-author">
                                      <div className="author-name">
                                        David & Elisa
                                      </div>
                                      <i>Apartment view lake at Brooklyn</i>
                                    </div>
                                  </div>
                                  <div className="col-md-7 text">
                                    <p>
                                      If you are seeking an Interior designer
                                      that will understand exactly your needs,
                                      and someone who will utilise their
                                      creative and technical skills in parity
                                      with your taste, then Suzanne at The
                                      Ramsay Studio is perfect.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="review-row">
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="review-author">
                                      <div className="author-name">Amanda</div>
                                      <i>Apartment view lake at Brooklyn</i>
                                    </div>
                                  </div>
                                  <div className="col-md-7 text">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Odio dolorem reiciendis
                                      doloremque veniam perspiciatis quam velit
                                      pariatur eius, repellendus dolores eveniet
                                      maiores sed. Quod quam minus dolore sed
                                      cumque aliquid.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-anchor="page8" className="pp-scrollable section section-8">
            <div className="scroll-wrap">
              <div
                className="section-bg"
                style={{backgroundImage:`url(assets/images/bg/contact.jpg)`}}
              ></div>
              <div className="scrollable-content">
                <div className="vertical-title text-white d-none d-lg-block">
                  <span>contact</span>
                </div>
                <div className="vertical-centred">
                  <div className="boxed boxed-inner">
                    <div className="boxed">
                      <div className="container">
                        <div className="intro overflow-hidden">
                          <div className="row">
                            <div className="col-md-6">
                              <h2 className="title">
                                <span className="text-primary">New York</span>, USA
                              </h2>
                              <h5 className="text-muted">
                                166 Main Street, Beverly Hills, CA 90210
                              </h5>
                              <section className="contact-address">
                                <h3>
                                  <a
                                    className="mail"
                                    href="mailto:contact@ramsay.com"
                                  >
                                    {" "}
                                    contact@ramsay.com
                                  </a>
                                </h3>
                                <h3>
                                  <span className="phone">+96 56-85-1379</span>
                                </h3>
                              </section>
                            </div>
                            <div className="col-md-6">
                              <div className="contact-info">
                                <form className="js-form" noValidate="noValidate">
                                  <div className="row">
                                    <div className="form-group col-sm-6">
                                      <input
                                        type="text"
                                        name="name"
                                        required=""
                                        placeholder="Name*"
                                        aria-required="true"
                                      />
                                    </div>
                                    <div className="form-group col-sm-6">
                                      <input
                                        type="email"
                                        required=""
                                        name="email"
                                        placeholder="Email*"
                                      />
                                    </div>
                                    <div className="form-group col-sm-12">
                                      <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject (Optinal)"
                                      />
                                    </div>
                                    <div className="form-group col-sm-12">
                                      <textarea
                                        name="message"
                                        required=""
                                        placeholder="Message*"
                                      ></textarea>
                                    </div>
                                    <div className="form-group form-group-message col-sm-12">
                                      <span id="success" className="text-primary">
                                        Thank You, your message is successfully
                                        sent!
                                      </span>
                                      <span id="error" className="text-primary">
                                        Sorry, something went wrong{" "}
                                      </span>
                                    </div>
                                    <div className="col-sm-12">
                                      <button type="submit" className="btn">
                                        Contact me
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- */}
    </div>
  );
};

export default Home;
