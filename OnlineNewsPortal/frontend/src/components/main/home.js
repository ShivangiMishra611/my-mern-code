// import "../../static/css/bootstrap.min.css";
import "./home.css";
import { NavLink, useNavigate } from "react-router-dom";
import format from "date-fns/format";

import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";
import React from "react";
import TimeAgo from "javascript-time-ago";

const Home = () => {
  const url = app_config.api_url;
  const timeAgo = new TimeAgo("en-US");
  const [newsArray, setNewsArray] = useState([]);
  const [sportsArray, setSportsArray] = useState([]);
  const [businessArray, setBusinessArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);
  const [worldArray, setWorldArray] = useState([]);
  // const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sLoading, setSLoading] = useState(true);
  const [BLoading, setBLoading] = useState(true);
  const [ELoading, setELoading] = useState(true);
  const [WLoading, setWLoading] = useState(true);
  const navigate = useNavigate();
  const categories = [
    "Sports",

    "World",
    "Lifestyle",
    "Entertainment",
    "Health",
    "Business",
    "Education",
    "Technology",
  ];

  const fetchData = () => {
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };

  const fetchSportsData = () => {
    fetch(url + "/news/sports")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSportsArray(data);
        setSLoading(false);
      });
  };

  const fetchBusinessData = () => {
    fetch(url + "/news/business")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBusinessArray(data);
        setBLoading(false);
      });
  };

  const showEducationData = () => {
    if (!ELoading) {
      return (
        <div className="col-sm-6">
          <div className="card-title">Education News</div>
          <div className="border-bottom pb-3">
            <div
              className="rotate-img"
              onClick={(e) =>
                navigate("/main/viewnews/" + educationArray[0]._id)
              }
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + educationArray[0].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={educationArray[0].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) =>
                  navigate("/main/viewnews/" + educationArray[0]._id)
                }
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(educationArray[0].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13 mb-0"
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Education{" "}
              </span>{" "}
              {timeAgo.format(new Date(educationArray[0].createdAt))}
            </p>
          </div>
          <div className="border-bottom pb-3">
            <div
              className="rotate-img"
              onClick={(e) =>
                navigate("/main/viewnews/" + educationArray[1]._id)
              }
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + educationArray[1].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={educationArray[1].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) =>
                  navigate("/main/viewnews/" + educationArray[1]._id)
                }
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(educationArray[1].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13  mb-0"
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Education
              </span>{" "}
              {timeAgo.format(new Date(educationArray[1].createdAt))}
            </p>
          </div>
          <div className="border-bottom pb-3">
            <div
              className="rotate-img"
              onClick={(e) =>
                navigate("/main/viewnews/" + educationArray[2]._id)
              }
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + educationArray[2].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={educationArray[2].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) =>
                  navigate("/main/viewnews/" + educationArray[2]._id)
                }
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(educationArray[2].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13  mb-0"
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Education
              </span>{" "}
              {timeAgo.format(new Date(educationArray[2].createdAt))}
            </p>
          </div>
        </div>
      );
    }
  };

  const showWorldData = () => {
    if (!WLoading) {
      return (
        <div className="col-sm-6">
          <div className="card-title">World News</div>
          <div className="border-bottom pb-3">
            <div
              className="rotate-img"
              onClick={(e) => navigate("/main/viewnews/" + worldArray[0]._id)}
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + worldArray[0].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={worldArray[0].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) => navigate("/main/viewnews/" + worldArray[0]._id)}
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(worldArray[0].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13 mb-0"
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                World{" "}
              </span>{" "}
              {timeAgo.format(new Date(worldArray[0].createdAt))}
            </p>
          </div>
          <div className="border-bottom pb-3">
            <div
              className="rotate-img"
              onClick={(e) => navigate("/main/viewnews/" + worldArray[1]._id)}
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + worldArray[1].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={worldArray[1].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) => navigate("/main/viewnews/" + worldArray[1]._id)}
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(worldArray[1].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13  mb-0"
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                World
              </span>{" "}
              {timeAgo.format(new Date(worldArray[1].createdAt))}
            </p>
          </div>
          <div className="border-bottom pb-3">
            <div
              className="rotate-img"
              onClick={(e) => navigate("/main/viewnews/" + worldArray[2]._id)}
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + worldArray[2].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={worldArray[2].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) => navigate("/main/viewnews/" + worldArray[2]._id)}
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(worldArray[2].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13  mb-0"
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                World
              </span>{" "}
              {timeAgo.format(new Date(worldArray[2].createdAt))}
            </p>
          </div>
        </div>
      );
    }
  };

  const showBusinessData = () => {
    if (!BLoading) {
      return (
        <div className="col-xl-6 col-lg-6 col-sm-6">
          <div className="card-title">Business</div>
          <div className="border-bottom pb-3 mb-3">
            <div
              className="rotate-img"
              onClick={(e) =>
                navigate("/main/viewnews/" + businessArray[0]._id)
              }
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + businessArray[0].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={businessArray[0].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) =>
                  navigate("/main/viewnews/" + businessArray[0]._id)
                }
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(businessArray[0].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13 mb-1 "
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Sports
              </span>
              {timeAgo.format(new Date(businessArray[0].createdAt))}
            </p>
          </div>
          <div className="border-bottom pb-3 mb-3">
            <div
              className="rotate-img"
              onClick={(e) =>
                navigate("/main/viewnews/" + businessArray[1]._id)
              }
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + businessArray[1].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={businessArray[1].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) =>
                  navigate("/main/viewnews/" + businessArray[1]._id)
                }
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(businessArray[1].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13 mb-1 "
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Sports
              </span>
              {timeAgo.format(new Date(businessArray[1].createdAt))}
            </p>
          </div>
          <div className="border-bottom pb-3 mb-3">
            <div
              className="rotate-img"
              onClick={(e) =>
                navigate("/main/viewnews/" + businessArray[2]._id)
              }
              style={{
                cursor: "pointer",

                fontWeight: "bolder",
              }}
            >
              <img
                src={url + "/" + businessArray[2].thumbnail}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <Tooltip title={businessArray[2].title}>
              <p
                className="fs-16 font-weight-600 mb-0 mt-3"
                onClick={(e) =>
                  navigate("/main/viewnews/" + businessArray[2]._id)
                }
                style={{
                  cursor: "pointer",
                  color: "#950000",

                  fontWeight: "bolder",
                }}
              >
                {truncate(businessArray[2].title, 25)}
              </p>
            </Tooltip>
            <p
              className="fs-13 mb-1 "
              style={{
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <span
                className="mr-2"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Sports
              </span>
              {timeAgo.format(new Date(businessArray[2].createdAt))}
            </p>
          </div>
        </div>
      );
    }
  };

  const fetchEducationData = () => {
    fetch(url + "/news/education")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEducationArray(data);
        setELoading(false);
      });
  };

  const fetchWorldData = () => {
    fetch(url + "/news/world")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorldArray(data);
        setWLoading(false);
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
    fetchSportsData();
    fetchWorldData();
    fetchBusinessData();
    fetchEducationData();
  }, []);

  const truncate = (text, n) => {
    return text.substring(0, n) + "...";
  };

  const displaySports = () => {
    if (!sLoading) {
      return (
        <div className="row" data-aos="fade-up">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8 col-sm-6">
                        <div className="card-title">Sports</div>
                        <div className="border-bottom pb-3 mb-3">
                          <div
                            className="rotate-img"
                            onClick={(e) =>
                              navigate("/main/viewnews/" + sportsArray[0]._id)
                            }
                            style={{
                              cursor: "pointer",

                              fontWeight: "bolder",
                            }}
                          >
                            <img
                              src={url + "/" + sportsArray[0].thumbnail}
                              alt="thumb"
                              className="img-fluid"
                            />
                          </div>
                          <Tooltip title={sportsArray[0].title}>
                            <p
                              className="fs-16 font-weight-600 mb-0 mt-3"
                              onClick={(e) =>
                                navigate("/main/viewnews/" + sportsArray[0]._id)
                              }
                              style={{
                                cursor: "pointer",
                                color: "#950000",

                                fontWeight: "bolder",
                              }}
                            >
                              {truncate(sportsArray[0].title, 25)}
                            </p>
                          </Tooltip>
                          <p
                            className="fs-13 mb-1"
                            style={{
                              color: "black",
                              fontWeight: "bolder",
                            }}
                          >
                            <span
                              className="mr-2"
                              style={{
                                color: "black",
                                fontWeight: "bolder",
                              }}
                            >
                              {sportsArray[0].category}
                            </span>
                            {timeAgo.format(new Date(sportsArray[0].createdAt))}
                          </p>
                        </div>
                        <div className="border-bottom pb-3 mb-3">
                          <div
                            className="rotate-img"
                            onClick={(e) =>
                              navigate("/main/viewnews/" + sportsArray[1]._id)
                            }
                            style={{
                              cursor: "pointer",

                              fontWeight: "bolder",
                            }}
                          >
                            <img
                              src={url + "/" + sportsArray[1].thumbnail}
                              alt="thumb"
                              className="img-fluid"
                            />
                          </div>
                          <Tooltip title={sportsArray[1].title}>
                            <p
                              className="fs-16 font-weight-600 mb-0 mt-3"
                              onClick={(e) =>
                                navigate("/main/viewnews/" + sportsArray[1]._id)
                              }
                              style={{
                                cursor: "pointer",
                                color: "#950000",

                                fontWeight: "bolder",
                              }}
                            >
                              {truncate(sportsArray[1].title, 25)}
                            </p>
                          </Tooltip>
                          <p
                            className="fs-13 mb-1 "
                            style={{
                              color: "black",
                              fontWeight: "bolder",
                            }}
                          >
                            <span
                              className="mr-2"
                              style={{
                                color: "black",
                                fontWeight: "bolder",
                              }}
                            >
                              Sports
                            </span>
                            {timeAgo.format(new Date(sportsArray[1].createdAt))}
                          </p>
                        </div>

                        <div className="border-bottom pb-3 mb-3">
                          <div
                            className="rotate-img"
                            onClick={(e) =>
                              navigate("/main/viewnews/" + sportsArray[2]._id)
                            }
                            style={{
                              cursor: "pointer",

                              fontWeight: "bolder",
                            }}
                          >
                            <img
                              src={url + "/" + sportsArray[2].thumbnail}
                              alt="thumb"
                              className="img-fluid"
                            />
                          </div>
                          <Tooltip title={sportsArray[2].title}>
                            <p
                              className="fs-16 font-weight-600 mb-0 mt-3"
                              onClick={(e) =>
                                navigate("/main/viewnews/" + sportsArray[2]._id)
                              }
                              style={{
                                cursor: "pointer",
                                color: "#950000",

                                fontWeight: "bolder",
                              }}
                            >
                              {truncate(sportsArray[2].title, 25)}
                            </p>
                          </Tooltip>
                          <p
                            className="fs-13 mb-1 "
                            style={{
                              color: "black",
                              fontWeight: "bolder",
                            }}
                          >
                            <span
                              className="mr-2"
                              style={{
                                color: "black",
                                fontWeight: "bolder",
                              }}
                            >
                              Sports
                            </span>
                            {timeAgo.format(new Date(sportsArray[2].createdAt))}
                          </p>
                        </div>
                      </div>

                      {showBusinessData()}
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="row">
                      {showEducationData()}
                      {showWorldData()}
                      {/* <div className="col-sm-6">
                        <div className="card-title">Celebrity news</div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="border-bottom pb-3">
                              <div className="row">
                                <div className="col-sm-5 pr-2">
                                  <div className="rotate-img">
                                    <img
                                      src={
                                        url + "/images/dashboard/home_19.jpg"
                                      }
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
                                    <span className="mr-2">Photo </span>
                                    10 Minutes ago
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
                                      src={
                                        url + "/images/dashboard/home_20.jpg"
                                      }
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
                                    <span className="mr-2">Photo </span>
                                    10 Minutes ago
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
                                      src={
                                        url + "/images/dashboard/home_21.jpg"
                                      }
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
                                    <span className="mr-2">Photo </span>
                                    10 Minutes ago
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
                                      src={
                                        url + "/images/dashboard/home_22.jpg"
                                      }
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
                                    <span className="mr-2">Photo </span>
                                    10 Minutes ago
                                  </p>
                                  <p className="mb-0 fs-13">
                                    Lorem Ipsum has been
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const displayStories = () => {
    if (!loading) {
      return (
        <div className="container-scroller">
          <div className="main-panel">
            <div className="flash-news-banner">
              <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    
<br></br>
<br></br>

<div className="d-flex justify-content-between align-items-center">
                          <h6
                            className="custom"
                            style={{
                              cursor: "pointer",
                            
                            }}
                            onClick={(e) => navigate("/main/lucknownews")}
                          >
                            MY CITY
                          </h6>
                        </div>
                      </div>
                     
                        <div className="d-flex justify-content-between align-items-center">
                          <h6
                            className="custom font-weight-600"
                            style={{
                              cursor: "pointer",
                             
                            }}
                            onClick={(e) => navigate("/main/topstories/Sports")}
                          >
                            SPORTS
                          </h6>
                        </div>
                      
                     
                        <div className="d-flex justify-content-between align-items-center">
                          <h6
                            className="custom font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) => navigate("/main/topstories/World")}
                          >
                            WORLD
                          </h6>
                        </div>

                        
                        <div className="d-flex justify-content-between align-items-center">
                        <h6
                          className="custom font-weight-600"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={(e) =>
                            navigate("/main/topstories/Lifestyle")
                          }
                        >
                          LIFESTYLE
                        </h6>
                      </div>


                      
                      <div className="d-flex justify-content-between align-items-center">
                      <h6
                        className="custom font-weight-600"
                        style={{
                          cursor: "pointer",
                          
                        }}
                        onClick={(e) =>
                          navigate("/main/topstories/Entertainment")
                        }
                      >
                        ENTERTAINMENT
                      </h6>
                    </div>
                    

                      
                      <div className="d-flex justify-content-between align-items-center">
                      <h6
                        className="custom font-weight-600"
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={(e) =>
                          navigate("/main/topstories/Health")
                        }
                      >
                        HEALTH
                      </h6>
                    </div>
                    





                      




                        <div className="d-flex justify-content-between align-items-center">
                        <h6
                          className="custom font-weight-600"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={(e) =>
                            navigate("/main/topstories/Business")
                          }
                        >
                          BUSINESS
                        </h6>
                      </div>
                      

                     
                        <div className="d-flex justify-content-between align-items-center">
                          <h6
                            className="custom font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) =>
                              navigate("/main/topstories/Education")
                            }
                          >
                            EDUCATION
                          </h6>
                        </div>
                      

                     
                        <div className="d-flex justify-content-between align-items-center">
                          <h6
                            className="custom font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) =>
                              navigate("/main/topstories/Technology")
                            }
                          >
                            TECHNOLOGY
                          </h6>
                        

                 
                     
              <ul className="social-media mb-3">
              <li>
              <a href="https://www.facebook.com/summertrainingandinternship2022/"  target="_blank">
                  <i className=" fab fa-facebook"></i>
                </a>
              </li>
              <li>
              <a href="https://in.linkedin.com/company/summertrainingandinternship2022/"  target="_blank">
                  <i className="fab  fa-linkedin"></i>
                </a>
              </li>
             
             
             
              <li>
                <a href="https://www.instagram.com/rajpootnikita18/"  target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>

              </li>
            </ul>
            &nbsp;&nbsp;


                     
                    
                    <p className="mb-0"></p>
                  </div>
                  <div className="d-flex">
                    <span className="custom1">
                      {format(new Date(), "PPPP")}
                    </span>
                    {/* <span className="text-danger">30°C,London</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="container">
                <div className="img-slider" data-aos="fade-up">
                  <div className="row">
                    <div className="col-xl-8 stretch-card grid-margin">
                      <div className="position-relative">
                        <video
                          src={url + "/images/breakning_news.mp4"}
                          style={{ height: "100%" }}
                          controls
                          className="img-fluid"
                          autoPlay
                        ></video>

                        <div
                          className="banner-content"
                          onClick={(e) =>
                            navigate("/main/viewnews/" + newsArray[0]._id)
                          }
                        ></div>
                      </div>
                    </div>

                    <div className="col-xl-4 stretch-card grid-margin">
                      <div className="card bg-dark text-white">
                        <div className="card-body">
                          <h2>Latest news</h2>

                          <div className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                            <div className="pr-3">
                              <Tooltip title={newsArray[0].title}>
                                <h5
                                  onClick={(e) =>
                                    navigate(
                                      "/main/viewnews/" + newsArray[0]._id
                                    )
                                  }
                                  style={{
                                    cursor: "pointer",

                                    fontWeight: "bolder",
                                  }}
                                >
                                  {truncate(newsArray[0].title, 30)}
                                </h5>
                              </Tooltip>
                              <div className="fs-12">
                                <span className="mr-2">
                                  {newsArray[0].category}
                                </span>
                                {timeAgo.format(
                                  new Date(newsArray[0].createdAt)
                                )}
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
                              <Tooltip title={newsArray[1].title}>
                                <h5
                                  onClick={(e) =>
                                    navigate(
                                      "/main/viewnews/" + newsArray[1]._id
                                    )
                                  }
                                  style={{
                                    cursor: "pointer",

                                    fontWeight: "bolder",
                                  }}
                                >
                                  {truncate(newsArray[1].title, 30)}
                                </h5>
                              </Tooltip>
                              <div className="fs-12">
                                <span className="mr-2">
                                  {newsArray[1].category}
                                </span>
                                {timeAgo.format(
                                  new Date(newsArray[1].createdAt)
                                )}
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
                              <Tooltip title={newsArray[2].title}>
                                <h5
                                  onClick={(e) =>
                                    navigate(
                                      "/main/viewnews/" + newsArray[2]._id
                                    )
                                  }
                                  style={{
                                    cursor: "pointer",

                                    fontWeight: "bolder",
                                  }}
                                >
                                  {truncate(newsArray[2].title, 30)}
                                </h5>
                              </Tooltip>
                              <div className="fs-12">
                                <span className="mr-2">
                                  {newsArray[2].category}
                                </span>
                                {timeAgo.format(
                                  new Date(newsArray[2].createdAt)
                                )}
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
                </div>
                <div className="row" data-aos="fade-up">
                  <div className="col-lg-3 stretch-card grid-margin">
                    <div className="card">
                   



                      <div className="categories " >
                        <h2>Category</h2>
                        <ul className="vertical-menu">
                          <li>
                            <NavLink
                              className="nav-link"
                              to="/main/lucknownews"
                            >
                              MYCITY
                            </NavLink>
                          </li>
                          
                          {categories.map((category) => (
                            <li>
                              <NavLink
                                className="nav-link"
                                to={"/main/topstories/" + category}
                              >
                                {category.toUpperCase()}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 stretch-card grid-margin">
                    <div className="card">
                      <div className="card-body">
                        {newsArray
                          .slice(0, 6)
                          .map(
                            ({
                              _id,
                              title,
                              thumbnail,
                              category,
                              summary,
                              createdAt,
                            }) => (
                              <div className="row">
                                <div className="col-sm-4 grid-margin">
                                  <div className="position-relative">
                                    <div className="rotate-img">
                                      <img
                                        src={url + "/" + thumbnail}
                                        alt="thumb"
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="logo">
                                      <span className="badge badge-danger font-weight-bold">
                                     
                                        <h3>Trusted News Tribune</h3>
                                        
                                        
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-8  grid-margin">
                                  <Tooltip title={title}>
                                    <h2
                                      className="mb-2 font-weight-600"
                                      style={{
                                        cursor: "pointer",
                                        color: "#950000",
                                        fontWeight: "bolder",
                                        "&:hover": {
                                          color: "red",
                                        },
                                      }}
                                      onClick={(e) =>
                                        navigate("/main/viewnews/" + _id)
                                      }
                                    >
                                      {truncate(title, 65)}
                                    </h2>
                                  </Tooltip>
                                  <div
                                    className="fs-13 mb-2"
                                    style={{
                                      color: "black",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    <span
                                      className="mr-2"
                                      style={{
                                        color: "black",
                                        fontWeight: "bolder",
                                      }}
                                    >
                                      {category}{" "}
                                    </span>
                                    {timeAgo.format(new Date(createdAt))}
                                  </div>
                                  <p
                                    className="mb-0"
                                    style={{
                                      color: "black",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    {truncate(summary, 100)}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>

                {displaySports()}
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
                            <i className=" fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab  fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
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
                              <div className="rotate-img col-3">
                                <img
                                  src={url + "/" + newsArray[6].thumbnail}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-9">
                                <Tooltip title={newsArray[6].title}>
                                  <h5
                                    className="font-weight-600"
                                    onClick={(e) =>
                                      navigate(
                                        "/main/viewnews/" + newsArray[6]._id
                                      )
                                    }
                                    style={{
                                      cursor: "pointer",

                                      fontWeight: "bolder",
                                    }}
                                  >
                                    {truncate(newsArray[6].title, 45)}
                                  </h5>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="footer-border-bottom pb-2 pt-2">
                            <div className="row">
                              <div className="rotate-img col-3">
                                <img
                                  src={url + "/" + newsArray[3].thumbnail}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-9">
                                <Tooltip title={newsArray[3].title}>
                                  <h5
                                    className="font-weight-600"
                                    onClick={(e) =>
                                      navigate(
                                        "/main/viewnews/" + newsArray[3]._id
                                      )
                                    }
                                    style={{
                                      cursor: "pointer",

                                      fontWeight: "bolder",
                                    }}
                                  >
                                    {truncate(newsArray[3].title, 45)}
                                  </h5>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div>
                            <div className="row">
                              <div className="rotate-img col-3">
                                <img
                                  src={url + "/" + newsArray[4].thumbnail}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>

                              <div className="col-9">
                                <Tooltip title={newsArray[4].title}>
                                  <h5
                                    className="font-weight-600"
                                    onClick={(e) =>
                                      navigate(
                                        "/main/viewnews/" + newsArray[4]._id
                                      )
                                    }
                                    style={{
                                      cursor: "pointer",

                                      fontWeight: "bolder",
                                    }}
                                  >
                                    {truncate(newsArray[4].title, 45)}
                                  </h5>
                                </Tooltip>
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
                          <h5
                            className="mb-0 font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) => navigate("/main/lucknownews")}
                          >
                            MY CITY
                          </h5>
                        </div>
                      </div>
                      <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5
                            className="mb-0 font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) => navigate("/main/topstories/Sports")}
                          >
                            SPORTS
                          </h5>
                        </div>
                      </div>
                      <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5
                            className="mb-0 font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) => navigate("/main/topstories/World")}
                          >
                            WORLD
                          </h5>
                        </div>
                      </div>

                      <div className=" footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5
                            className="mb-0 font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) =>
                              navigate("/main/topstories/Education")
                            }
                          >
                            EDUCATION
                          </h5>
                        </div>
                      </div>
                      <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5
                            className="mb-0 font-weight-600"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={(e) =>
                              navigate("/main/topstories/Technology")
                            }
                          >
                            TECHNOLOGY
                          </h5>
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
                          © 2022 @{" "}
                          <a
                            href="https://www.bootstrapdash.com/"
                            target="_blank"
                            className="text-white"
                          >
                            {" "}
                          </a>
                          All rights reserved.
                        </div>
                        <div className="fs-14 font-weight-600">
                          Handcrafted by{" "}
                          <a
                            href="https://www.bootstrapdash.com/"
                            target="_blank"
                            className="text-white"
                          >
                            TNT
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          //{" "}
        </div>
      );
    }
  };

  return <>{displayStories()}</>;
};

export default Home;
