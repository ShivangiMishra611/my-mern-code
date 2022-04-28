// import "../../static/css/bootstrap.min.css";
import "./home.css";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  TextField,
  Link,
  Typography,
  Avatar,
  InputAdornment,
  IconButton,
  AppBar,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";
import React from "react";

const Home = () => {
  const url = app_config.api_url;
  const [newsArray, setNewsArray] = useState([]);
  // const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };
  const refreshData = (filter) => {
    setLoading(true);
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const displayStories = () => {
    if (!loading) {
      return (
        <div className="container-scroller">
          <div className="main-panel">
            <header id="header">
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="navbar-top">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="navbar-top-left-menu">
                        <li className="nav-item">
                          <a href="pages/index-inner.html" className="nav-link">
                            Advertise
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="pages/aboutus.html" className="nav-link">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Events
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Write for Us
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            In the Press
                          </a>
                        </li>
                      </ul>
                      <ul className="navbar-top-right-menu">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="mdi mdi-magnify"></i>
                          </a>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/main/login">
                       Login
                      </NavLink>
                        
                        </li>
                        <li className="nav-item">
                          <NavLink href="#" className="nav-link" to="/main/signup">
                            Sign in
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <a className="navbar-brand" href="#">
                          <img src={url + "/images/logo.svg"} alt="" />
                        </a>
                      </div>
                      <div>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                          className="navbar-collapse justify-content-center collapse"
                          id="navbarSupportedContent"
                        >
                          <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                            <li>
                              <button className="navbar-close">
                                <i className="mdi mdi-close"></i>
                              </button>
                            </li>
                            <li className="nav-item active">
                              <a className="nav-link" href="index.html">
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/magazine.html">
                                MAGAZINE
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/business.html">
                                Business
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/sports.html">
                                Sports
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/art.html">
                                Art
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/politics.html">
                                POLITICS
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/travel.html">
                                Travel
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="pages/contactus.html">
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="social-media">
                        <li>
                          <a href="#">
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>

            <div className="flash-news-banner">
              <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-dark mr-3">Flash news</span>
                    <p className="mb-0">
                     
                    </p>
                  </div>
                  <div className="d-flex">
                    <span className="mr-3 text-danger">Wed, March 4, 2020</span>
                    <span className="text-danger">30°C,London</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="container">
                <div className="row" data-aos="fade-up">
                  <div className="col-xl-8 stretch-card grid-margin">
                    <div className="position-relative">
                      <img
                      className="img-fluid"
                        src={url + "/images/dashboard/banner.jpg"}
                        alt=""
                      
                      />
                      <div className="banner-content" onClick={e => navigate('/main/viewnews/'+newsArray[0]._id)}>
                        <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                          global news
                        </div>
                        <h1 className="mb-0">GLOBAL PANDEMIC</h1>
                        <h1 className="mb-2">
                          Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams
                          Postponed, 168 Trains
                        </h1>
                        <div className="fs-12">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 stretch-card grid-margin">
                    <div className="card bg-dark text-white">
                      <div className="card-body">
                        <h2>Latest news</h2>

                        <div className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                          <div className="pr-3">
                            <h5>
                            {newsArray[0].title}
                            </h5>
                            <div className="fs-12">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                          </div>
                          <div className="rotate-img">
                            <img
                              src={url + "/" + newsArray[0].thumbnail}
                              alt="thumb"
                              className="img-fluid img-lg"
                            />
                          </div>
                        </div>

                        <div className="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between">
                          <div className="pr-3">
                            <h5>
                            {newsArray[1].title}
                            </h5>
                            <div className="fs-12">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                          </div>
                          <div className="rotate-img">
                            <img
                              src={url + "/" + newsArray[1].thumbnail}
                              alt="thumb"
                              className="img-fluid img-lg"
                            />
                          </div>
                        </div>

                        <div className="d-flex pt-4 align-items-center justify-content-between">
                          <div className="pr-3">
                            <h5>
                            {newsArray[2].title}
                            </h5>
                            <div className="fs-12">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                          </div>
                          <div className="rotate-img">
                            <img
                              src={url + "/" + newsArray[2].thumbnail}
                              alt="thumb"
                              className="img-fluid img-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" data-aos="fade-up">
                  <div className="col-lg-3 stretch-card grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <h2>Category</h2>
                        <ul className="vertical-menu">
                        
                          <li>
                          <NavLink href="#" className="nav-link" to="/main/lucknownews">
                            MYCITY
                          </NavLink>
                           
                          </li>
                          <li>
                            <a href="#">LIFESTYLE</a>
                          </li>
                          <li>
                            <a href="#">SPORTS</a>
                          </li>
                          <li>
                            <a href="#">HEALTH</a>
                          </li>
                          <li>
                            <a href="#">ENTERTAINMENT</a>
                          </li>
                          <li>
                            <a href="#">BUSINESS</a>
                          </li>
                          <li>
                            <a href="#">EDUCATION</a>
                          </li>
                          <li>
                            <a href="#">JOBS</a>
                          </li>
                          <li>
                            <a href="#">WORLD</a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 stretch-card grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-4 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src={url + "/images/dashboard/home_4.jpg"}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned">
                                <span className="badge badge-danger font-weight-bold">
                                  Flash news
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-8  grid-margin">
                            <h2 className="mb-2 font-weight-600">
                              South Korea’s Moon Jae-in sworn in vowing to
                              address North
                            </h2>
                            <div className="fs-13 mb-2">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p className="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-4 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src={url + "/images/dashboard/home_5.jpg"}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned">
                                <span className="badge badge-danger font-weight-bold">
                                  Flash news
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-8  grid-margin">
                            <h2 className="mb-2 font-weight-600">
                              No charges over 2017 Conservative battle bus cases
                            </h2>
                            <div className="fs-13 mb-2">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p className="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-4">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src={url + "/images/dashboard/home_6.jpg"}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned">
                                <span className="badge badge-danger font-weight-bold">
                                  Flash news
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <h2 className="mb-2 font-weight-600">
                              Kaine: Trump Jr. may have committed treason
                            </h2>
                            <div className="fs-13 mb-2">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p className="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" data-aos="fade-up">
                  <div className="col-sm-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="card-title">Video</div>
                            <div className="row">
                              <div className="col-sm-6 grid-margin">
                                <div className="position-relative">
                                  <div className="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_7.jpg"}
                                      alt="thumb"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="badge-positioned w-90">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <span className="badge badge-danger font-weight-bold">
                                        Lifestyle
                                      </span>
                                      <div className="video-icon">
                                        <i className="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6 grid-margin">
                                <div className="position-relative">
                                  <div className="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_8.jpg"}
                                      alt="thumb"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="badge-positioned w-90">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <span className="badge badge-danger font-weight-bold">
                                        National News
                                      </span>
                                      <div className="video-icon">
                                        <i className="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6 grid-margin">
                                <div className="position-relative">
                                  <div className="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_9.jpg"}
                                      alt="thumb"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="badge-positioned w-90">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <span className="badge badge-danger font-weight-bold">
                                        Lifestyle
                                      </span>
                                      <div className="video-icon">
                                        <i className="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6 grid-margin">
                                <div className="position-relative">
                                  <div className="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_10.jpg"}
                                      alt="thumb"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="badge-positioned w-90">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <span className="badge badge-danger font-weight-bold">
                                        National News
                                      </span>
                                      <div className="video-icon">
                                        <i className="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="card-title">Latest Video</div>
                              <p className="mb-3">See all</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                              <div className="div-w-80 mr-3">
                                <div className="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_11.jpg"}
                                    alt="thumb"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 className="font-weight-600 mb-0">
                                Apple Introduces Apple Watch
                              </h3>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                              <div className="div-w-80 mr-3">
                                <div className="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_12.jpg"}
                                    alt="thumb"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 className="font-weight-600 mb-0">
                                SEO Strategy & Google Search
                              </h3>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                              <div className="div-w-80 mr-3">
                                <div className="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_13.jpg"}
                                    alt="thumb"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 className="font-weight-600 mb-0">
                                Cycling benefit & disadvantag
                              </h3>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                              <div className="div-w-80 mr-3">
                                <div className="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_14.jpg"}
                                    alt="thumb"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 className="font-weight-600">
                                The Major Health Benefits of
                              </h3>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pt-3">
                              <div className="div-w-80 mr-3">
                                <div className="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_15.jpg"}
                                    alt="thumb"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 className="font-weight-600 mb-0">
                                Powerful Moments of Peace
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" data-aos="fade-up">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="card-title">Sport light</div>
                            <div className="row">
                              <div className="col-xl-6 col-lg-8 col-sm-6">
                                <div className="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_16.jpg"}
                                    alt="thumb"
                                    className="img-fluid"
                                  />
                                </div>
                                <h2 className="mt-3 text-primary mb-2">
                                  Newsrooms exercise..
                                </h2>
                                <p className="fs-13 mb-1 text-muted">
                                  <span className="mr-2">Photo </span>10 Minutes ago
                                </p>
                                <p className="my-3 fs-15">
                                  Lorem Ipsum has been the industry's standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took
                                </p>
                                <a
                                  href="#"
                                  className="font-weight-600 fs-16 text-dark"
                                >
                                  Read more
                                </a>
                              </div>
                              <div className="col-xl-6 col-lg-4 col-sm-6">
                                <div className="border-bottom pb-3 mb-3">
                                  <h3 className="font-weight-600 mb-0">
                                    Social distancing is ..
                                  </h3>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p className="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                  <h3 className="font-weight-600 mb-0">
                                    Panic buying is forcing..
                                  </h3>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p className="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                  <h3 className="font-weight-600 mb-0">
                                    Businesses ask hundreds..
                                  </h3>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p className="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-weight-600 mb-0">
                                    Tesla's California factory..
                                  </h3>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p className="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="card-title">Sport light</div>
                                <div className="border-bottom pb-3">
                                  <div className="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_17.jpg"}
                                      alt="thumb"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <p className="fs-16 font-weight-600 mb-0 mt-3">
                                    Kaine: Trump Jr. may have
                                  </p>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                </div>
                                <div className="pt-3 pb-3">
                                  <div className="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_18.jpg"}
                                      alt="thumb"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <p className="fs-16 font-weight-600 mb-0 mt-3">
                                    Kaine: Trump Jr. may have
                                  </p>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="card-title">Celebrity news</div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="border-bottom pb-3">
                                      <div className="row">
                                        <div className="col-sm-5 pr-2">
                                          <div className="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_19.jpg"}
                                              alt="thumb"
                                              className="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-sm-7 pl-2">
                                          <p className="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p className="fs-13 text-muted mb-0">
                                            <span className="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p className="mb-0 fs-13">
                                            Lorem Ipsum has been
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="border-bottom pb-3 pt-3">
                                      <div className="row">
                                        <div className="col-sm-5 pr-2">
                                          <div className="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_20.jpg"}
                                              alt="thumb"
                                              className="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-sm-7 pl-2">
                                          <p className="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p className="fs-13 text-muted mb-0">
                                            <span className="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p className="mb-0 fs-13">
                                            Lorem Ipsum has been
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="border-bottom pb-3 pt-3">
                                      <div className="row">
                                        <div className="col-sm-5 pr-2">
                                          <div className="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_21.jpg"}
                                              alt="thumb"
                                              className="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-sm-7 pl-2">
                                          <p className="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p className="fs-13 text-muted mb-0">
                                            <span className="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p className="mb-0 fs-13">
                                            Lorem Ipsum has been
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="pt-3">
                                      <div className="row">
                                        <div className="col-sm-5 pr-2">
                                          <div className="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_22.jpg"}
                                              alt="thumb"
                                              className="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-sm-7 pl-2">
                                          <p className="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p className="fs-13 text-muted mb-0">
                                            <span className="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p className="mb-0 fs-13">
                                            Lorem Ipsum has been
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
            </div>
            <footer>
              <div className="footer-top">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-5">
                      <img
                        src={url + "/images/logo.svg"}
                        className="footer-logo"
                        alt=""
                      />
                      <h5 className="font-weight-normal mt-4 mb-5">
                        Newspaper is your news, entertainment, music fashion
                        website. We provide you with the latest breaking news
                        and videos straight from the entertainment industry.
                      </h5>
                      <ul className="social-media mb-3">
                        <li>
                          <a href="#">
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="mdi mdi-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4">
                      <h3 className="font-weight-bold mb-3">RECENT POSTS</h3>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="footer-border-bottom pb-2">
                            <div className="row">
                              <div className="col-3">
                                <img
                                  src={url + "/images/dashboard/home_1.jpg"}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-9">
                                <h5 className="font-weight-600">
                                  Cotton import from USA to soar was American
                                  traders predict
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="footer-border-bottom pb-2 pt-2">
                            <div className="row">
                              <div className="col-3">
                                <img
                                  src={url + "/images/dashboard/home_2.jpg"}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-9">
                                <h5 className="font-weight-600">
                                  Cotton import from USA to soar was American
                                  traders predict
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div>
                            <div className="row">
                              <div className="col-3">
                                <img
                                  src={url + "/images/dashboard/home_3.jpg"}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-9">
                                <h5 className="font-weight-600 mb-3">
                                  Cotton import from USA to soar was American
                                  traders predict
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <h3 className="font-weight-bold mb-3">CATEGORIES</h3>
                      <div className="footer-border-bottom pb-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0 font-weight-600">Magazine</h5>
                          <div className="count">1</div>
                        </div>
                      </div>
                      <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0 font-weight-600">Business</h5>
                          <div className="count">1</div>
                        </div>
                      </div>
                      <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0 font-weight-600">Sports</h5>
                          <div className="count">1</div>
                        </div>
                      </div>
                      <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0 font-weight-600">Arts</h5>
                          <div className="count">1</div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0 font-weight-600">Politics</h5>
                          <div className="count">1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="fs-14 font-weight-600">
                          © 2020 @{" "}
                          <a
                            href="https://www.bootstrapdash.com/"
                            target="_blank"
                            className="text-white"
                          >
                            {" "}
                            BootstrapDash
                          </a>
                          . All rights reserved.
                        </div>
                        <div className="fs-14 font-weight-600">
                          Handcrafted by{" "}
                          <a
                            href="https://www.bootstrapdash.com/"
                            target="_blank"
                            className="text-white"
                          >
                            BootstrapDash
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      );
    }
  };

  return <>
  {displayStories()};
  </>
  
};

export default Home;
