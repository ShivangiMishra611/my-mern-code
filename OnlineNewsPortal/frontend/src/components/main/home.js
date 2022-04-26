// import "../../static/css/bootstrap.min.css";
import "./home.css";

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
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayStories = () => {
    if (!loading) {
      return (
        <div class="container-scroller">
          <div class="main-panel">
            <header id="header">
              <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="navbar-top">
                    <div class="d-flex justify-content-between align-items-center">
                      <ul class="navbar-top-left-menu">
                        <li class="nav-item">
                          <a href="pages/index-inner.html" class="nav-link">
                            Advertise
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="pages/aboutus.html" class="nav-link">
                            About
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            Events
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            Write for Us
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            In the Press
                          </a>
                        </li>
                      </ul>
                      <ul class="navbar-top-right-menu">
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            <i class="mdi mdi-magnify"></i>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            Sign in
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="navbar-bottom">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <a class="navbar-brand" href="#">
                          <img src={url + "/images/logo.svg"} alt="" />
                        </a>
                      </div>
                      <div>
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                          class="navbar-collapse justify-content-center collapse"
                          id="navbarSupportedContent"
                        >
                          <ul class="navbar-nav d-lg-flex justify-content-between align-items-center">
                            <li>
                              <button class="navbar-close">
                                <i class="mdi mdi-close"></i>
                              </button>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="index.html">
                                Home
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="pages/magazine.html">
                                MAGAZINE
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="pages/business.html">
                                Business
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="pages/sports.html">
                                Sports
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="pages/art.html">
                                Art
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="pages/politics.html">
                                POLITICS
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="pages/travel.html">
                                Travel
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="pages/contactus.html">
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul class="social-media">
                        <li>
                          <a href="#">
                            <i class="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="mdi mdi-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="mdi mdi-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>

            <div class="flash-news-banner">
              <div class="container">
                <div class="d-lg-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <span class="badge badge-dark mr-3">Flash news</span>
                    <p class="mb-0">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s.
                    </p>
                  </div>
                  <div class="d-flex">
                    <span class="mr-3 text-danger">Wed, March 4, 2020</span>
                    <span class="text-danger">30°C,London</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="container">
                <div class="row" data-aos="fade-up">
                  <div class="col-xl-8 stretch-card grid-margin">
                    <div class="position-relative">
                      <img
                        src={url + "/images/dashboard/banner.jpg"}
                        alt=""
                      
                      />
                      <div class="banner-content">
                        <div class="badge badge-danger fs-12 font-weight-bold mb-3">
                          global news
                        </div>
                        <h1 class="mb-0">GLOBAL PANDEMIC</h1>
                        <h1 class="mb-2">
                          Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams
                          Postponed, 168 Trains
                        </h1>
                        <div class="fs-12">
                          <span class="mr-2">Photo </span>10 Minutes ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 stretch-card grid-margin">
                    <div class="card bg-dark text-white">
                      <div class="card-body">
                        <h2>Latest news</h2>

                        <div class="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                          <div class="pr-3">
                            <h5>
                              Virus Kills Member Of Advising Iran’s Supreme
                            </h5>
                            <div class="fs-12">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                          </div>
                          <div class="rotate-img">
                            <img
                              src={url + "/images/dashboard/home_1.jpg"}
                              alt="thumb"
                              class="img-fluid img-lg"
                            />
                          </div>
                        </div>

                        <div class="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between">
                          <div class="pr-3">
                            <h5>
                              Virus Kills Member Of Advising Iran’s Supreme
                            </h5>
                            <div class="fs-12">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                          </div>
                          <div class="rotate-img">
                            <img
                              src={url + "/images/dashboard/home_2.jpg"}
                              alt="thumb"
                              class="img-fluid img-lg"
                            />
                          </div>
                        </div>

                        <div class="d-flex pt-4 align-items-center justify-content-between">
                          <div class="pr-3">
                            <h5>
                              Virus Kills Member Of Advising Iran’s Supreme
                            </h5>
                            <div class="fs-12">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                          </div>
                          <div class="rotate-img">
                            <img
                              src={url + "/images/dashboard/home_3.jpg"}
                              alt="thumb"
                              class="img-fluid img-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" data-aos="fade-up">
                  <div class="col-lg-3 stretch-card grid-margin">
                    <div class="card">
                      <div class="card-body">
                        <h2>Category</h2>
                        <ul class="vertical-menu">
                          <li>
                            <a href="#">Politics</a>
                          </li>
                          <li>
                            <a href="#">International</a>
                          </li>
                          <li>
                            <a href="#">Finance</a>
                          </li>
                          <li>
                            <a href="#">Health care</a>
                          </li>
                          <li>
                            <a href="#">Technology</a>
                          </li>
                          <li>
                            <a href="#">Jobs</a>
                          </li>
                          <li>
                            <a href="#">Media</a>
                          </li>
                          <li>
                            <a href="#">Administration</a>
                          </li>
                          <li>
                            <a href="#">Sports</a>
                          </li>
                          <li>
                            <a href="#">Game</a>
                          </li>
                          <li>
                            <a href="#">Art</a>
                          </li>
                          <li>
                            <a href="#">Kids</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-9 stretch-card grid-margin">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm-4 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                <img
                                  src={url + "/images/dashboard/home_4.jpg"}
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="badge-positioned">
                                <span class="badge badge-danger font-weight-bold">
                                  Flash news
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-8  grid-margin">
                            <h2 class="mb-2 font-weight-600">
                              South Korea’s Moon Jae-in sworn in vowing to
                              address North
                            </h2>
                            <div class="fs-13 mb-2">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p class="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-4 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                <img
                                  src={url + "/images/dashboard/home_5.jpg"}
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="badge-positioned">
                                <span class="badge badge-danger font-weight-bold">
                                  Flash news
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-8  grid-margin">
                            <h2 class="mb-2 font-weight-600">
                              No charges over 2017 Conservative battle bus cases
                            </h2>
                            <div class="fs-13 mb-2">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p class="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an
                            </p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-4">
                            <div class="position-relative">
                              <div class="rotate-img">
                                <img
                                  src={url + "/images/dashboard/home_6.jpg"}
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="badge-positioned">
                                <span class="badge badge-danger font-weight-bold">
                                  Flash news
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-8">
                            <h2 class="mb-2 font-weight-600">
                              Kaine: Trump Jr. may have committed treason
                            </h2>
                            <div class="fs-13 mb-2">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                            <p class="mb-0">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" data-aos="fade-up">
                  <div class="col-sm-12 grid-margin">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-lg-8">
                            <div class="card-title">Video</div>
                            <div class="row">
                              <div class="col-sm-6 grid-margin">
                                <div class="position-relative">
                                  <div class="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_7.jpg"}
                                      alt="thumb"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <div class="badge-positioned w-90">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <span class="badge badge-danger font-weight-bold">
                                        Lifestyle
                                      </span>
                                      <div class="video-icon">
                                        <i class="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-sm-6 grid-margin">
                                <div class="position-relative">
                                  <div class="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_8.jpg"}
                                      alt="thumb"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <div class="badge-positioned w-90">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <span class="badge badge-danger font-weight-bold">
                                        National News
                                      </span>
                                      <div class="video-icon">
                                        <i class="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-6 grid-margin">
                                <div class="position-relative">
                                  <div class="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_9.jpg"}
                                      alt="thumb"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <div class="badge-positioned w-90">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <span class="badge badge-danger font-weight-bold">
                                        Lifestyle
                                      </span>
                                      <div class="video-icon">
                                        <i class="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-sm-6 grid-margin">
                                <div class="position-relative">
                                  <div class="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_10.jpg"}
                                      alt="thumb"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <div class="badge-positioned w-90">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <span class="badge badge-danger font-weight-bold">
                                        National News
                                      </span>
                                      <div class="video-icon">
                                        <i class="mdi mdi-play"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="card-title">Latest Video</div>
                              <p class="mb-3">See all</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-bottom pb-2">
                              <div class="div-w-80 mr-3">
                                <div class="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_11.jpg"}
                                    alt="thumb"
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 class="font-weight-600 mb-0">
                                Apple Introduces Apple Watch
                              </h3>
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                              <div class="div-w-80 mr-3">
                                <div class="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_12.jpg"}
                                    alt="thumb"
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 class="font-weight-600 mb-0">
                                SEO Strategy & Google Search
                              </h3>
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                              <div class="div-w-80 mr-3">
                                <div class="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_13.jpg"}
                                    alt="thumb"
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 class="font-weight-600 mb-0">
                                Cycling benefit & disadvantag
                              </h3>
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                              <div class="div-w-80 mr-3">
                                <div class="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_14.jpg"}
                                    alt="thumb"
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 class="font-weight-600">
                                The Major Health Benefits of
                              </h3>
                            </div>
                            <div class="d-flex justify-content-between align-items-center pt-3">
                              <div class="div-w-80 mr-3">
                                <div class="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_15.jpg"}
                                    alt="thumb"
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <h3 class="font-weight-600 mb-0">
                                Powerful Moments of Peace
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" data-aos="fade-up">
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="card-title">Sport light</div>
                            <div class="row">
                              <div class="col-xl-6 col-lg-8 col-sm-6">
                                <div class="rotate-img">
                                  <img
                                    src={url + "/images/dashboard/home_16.jpg"}
                                    alt="thumb"
                                    class="img-fluid"
                                  />
                                </div>
                                <h2 class="mt-3 text-primary mb-2">
                                  Newsrooms exercise..
                                </h2>
                                <p class="fs-13 mb-1 text-muted">
                                  <span class="mr-2">Photo </span>10 Minutes ago
                                </p>
                                <p class="my-3 fs-15">
                                  Lorem Ipsum has been the industry's standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took
                                </p>
                                <a
                                  href="#"
                                  class="font-weight-600 fs-16 text-dark"
                                >
                                  Read more
                                </a>
                              </div>
                              <div class="col-xl-6 col-lg-4 col-sm-6">
                                <div class="border-bottom pb-3 mb-3">
                                  <h3 class="font-weight-600 mb-0">
                                    Social distancing is ..
                                  </h3>
                                  <p class="fs-13 text-muted mb-0">
                                    <span class="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p class="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                                <div class="border-bottom pb-3 mb-3">
                                  <h3 class="font-weight-600 mb-0">
                                    Panic buying is forcing..
                                  </h3>
                                  <p class="fs-13 text-muted mb-0">
                                    <span class="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p class="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                                <div class="border-bottom pb-3 mb-3">
                                  <h3 class="font-weight-600 mb-0">
                                    Businesses ask hundreds..
                                  </h3>
                                  <p class="fs-13 text-muted mb-0">
                                    <span class="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p class="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                                <div>
                                  <h3 class="font-weight-600 mb-0">
                                    Tesla's California factory..
                                  </h3>
                                  <p class="fs-13 text-muted mb-0">
                                    <span class="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                  <p class="mb-0">
                                    Lorem Ipsum has been the industry's
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="card-title">Sport light</div>
                                <div class="border-bottom pb-3">
                                  <div class="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_17.jpg"}
                                      alt="thumb"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <p class="fs-16 font-weight-600 mb-0 mt-3">
                                    Kaine: Trump Jr. may have
                                  </p>
                                  <p class="fs-13 text-muted mb-0">
                                    <span class="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                </div>
                                <div class="pt-3 pb-3">
                                  <div class="rotate-img">
                                    <img
                                      src={url + "/images/dashboard/home_18.jpg"}
                                      alt="thumb"
                                      class="img-fluid"
                                    />
                                  </div>
                                  <p class="fs-16 font-weight-600 mb-0 mt-3">
                                    Kaine: Trump Jr. may have
                                  </p>
                                  <p class="fs-13 text-muted mb-0">
                                    <span class="mr-2">Photo </span>10 Minutes
                                    ago
                                  </p>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="card-title">Celebrity news</div>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="border-bottom pb-3">
                                      <div class="row">
                                        <div class="col-sm-5 pr-2">
                                          <div class="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_19.jpg"}
                                              alt="thumb"
                                              class="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div class="col-sm-7 pl-2">
                                          <p class="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p class="fs-13 text-muted mb-0">
                                            <span class="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p class="mb-0 fs-13">
                                            Lorem Ipsum has been
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="border-bottom pb-3 pt-3">
                                      <div class="row">
                                        <div class="col-sm-5 pr-2">
                                          <div class="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_20.jpg"}
                                              alt="thumb"
                                              class="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div class="col-sm-7 pl-2">
                                          <p class="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p class="fs-13 text-muted mb-0">
                                            <span class="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p class="mb-0 fs-13">
                                            Lorem Ipsum has been
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="border-bottom pb-3 pt-3">
                                      <div class="row">
                                        <div class="col-sm-5 pr-2">
                                          <div class="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_21.jpg"}
                                              alt="thumb"
                                              class="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div class="col-sm-7 pl-2">
                                          <p class="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p class="fs-13 text-muted mb-0">
                                            <span class="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p class="mb-0 fs-13">
                                            Lorem Ipsum has been
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="pt-3">
                                      <div class="row">
                                        <div class="col-sm-5 pr-2">
                                          <div class="rotate-img">
                                            <img
                                              src={url + "/images/dashboard/home_22.jpg"}
                                              alt="thumb"
                                              class="img-fluid w-100"
                                            />
                                          </div>
                                        </div>
                                        <div class="col-sm-7 pl-2">
                                          <p class="fs-16 font-weight-600 mb-0">
                                            Online shopping ..
                                          </p>
                                          <p class="fs-13 text-muted mb-0">
                                            <span class="mr-2">Photo </span>10
                                            Minutes ago
                                          </p>
                                          <p class="mb-0 fs-13">
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
              <div class="footer-top">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-5">
                      <img
                        src={url + "/images/logo.svg"}
                        class="footer-logo"
                        alt=""
                      />
                      <h5 class="font-weight-normal mt-4 mb-5">
                        Newspaper is your news, entertainment, music fashion
                        website. We provide you with the latest breaking news
                        and videos straight from the entertainment industry.
                      </h5>
                      <ul class="social-media mb-3">
                        <li>
                          <a href="#">
                            <i class="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="mdi mdi-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="mdi mdi-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-4">
                      <h3 class="font-weight-bold mb-3">RECENT POSTS</h3>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="footer-border-bottom pb-2">
                            <div class="row">
                              <div class="col-3">
                                <img
                                  src={url + "/images/dashboard/home_1.jpg"}
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="col-9">
                                <h5 class="font-weight-600">
                                  Cotton import from USA to soar was American
                                  traders predict
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="footer-border-bottom pb-2 pt-2">
                            <div class="row">
                              <div class="col-3">
                                <img
                                  src={url + "/images/dashboard/home_2.jpg"}
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="col-9">
                                <h5 class="font-weight-600">
                                  Cotton import from USA to soar was American
                                  traders predict
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div>
                            <div class="row">
                              <div class="col-3">
                                <img
                                  src={url + "/images/dashboard/home_3.jpg"}
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="col-9">
                                <h5 class="font-weight-600 mb-3">
                                  Cotton import from USA to soar was American
                                  traders predict
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <h3 class="font-weight-bold mb-3">CATEGORIES</h3>
                      <div class="footer-border-bottom pb-2">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="mb-0 font-weight-600">Magazine</h5>
                          <div class="count">1</div>
                        </div>
                      </div>
                      <div class="footer-border-bottom pb-2 pt-2">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="mb-0 font-weight-600">Business</h5>
                          <div class="count">1</div>
                        </div>
                      </div>
                      <div class="footer-border-bottom pb-2 pt-2">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="mb-0 font-weight-600">Sports</h5>
                          <div class="count">1</div>
                        </div>
                      </div>
                      <div class="footer-border-bottom pb-2 pt-2">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="mb-0 font-weight-600">Arts</h5>
                          <div class="count">1</div>
                        </div>
                      </div>
                      <div class="pt-2">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="mb-0 font-weight-600">Politics</h5>
                          <div class="count">1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-bottom">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="d-sm-flex justify-content-between align-items-center">
                        <div class="fs-14 font-weight-600">
                          © 2020 @{" "}
                          <a
                            href="https://www.bootstrapdash.com/"
                            target="_blank"
                            class="text-white"
                          >
                            {" "}
                            BootstrapDash
                          </a>
                          . All rights reserved.
                        </div>
                        <div class="fs-14 font-weight-600">
                          Handcrafted by{" "}
                          <a
                            href="https://www.bootstrapdash.com/"
                            target="_blank"
                            class="text-white"
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
  displayStories();
  </>
};

export default Home;
