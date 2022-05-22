import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  Typography,
  CardActions,
  Container,
  InputAdornment,
  
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";
import {  useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import "./topstories.css";

const ViewArchieve = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [masterArray, setMasterArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const newsCategories = [
    "Sports",
    "Politics",
    "World",
    "Lifestyle",
    "Entertainment",
    "Health",
    "Business",
    "Education",
    "Technology",
    "Jobs",
  ];

  const newssubCategories = [];

  const url = app_config.api_url;

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setMasterArray(data);
        setLoading(false);
      });
  };

  const refreshData = (filter) => {
    setLoading(true);
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        applyFilter(data, filter);
      });
  };

  const applyFilter = (data, filter) => {
    const filteredArray = data.filter((news) => {
      return filter.toLowerCase() == news.category.toLowerCase();
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
  };
  const filternews = () => {
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ title }) => {
          return title.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setNewsArray(filtered);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const truncate = (text, n) => {
    return text.substring(0, n) + "...";
  };

  const displayCategories = () => {
    return newsCategories.map((category) => (
      <Button
       color="primary"
        variant="contained"
        size="medium"
        onClick={(e) => refreshData(category)}
      >
        {category}
      </Button>
    ));
  };

  const displaynews = () => {
    if (!loading) {
      return NewsArray.map((news) => (
        <Card className="mt-5">
          <Grid container>
            <Grid item xs={6} md={4}>
              <CardMedia
                component="img"
                height="250"
                image={url + "/" + news.thumbnail}
                alt={news.title}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <CardContent>
              <h5>{news.createdAt}</h5>
              <Tooltip title={news.title}>
                  <h2
                    component="div"
                    variant="h5"
                    onClick={(e) => navigate("/main/viewnews/" + news._id)}
                    style={{
                      cursor: "pointer",
                      color: "#950000",
                      fontWeight: "bolder",
                    }}
                  >
                    {truncate(news.title, 65)}
                  </h2>
                </Tooltip>
                <h4
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{
                    cursor: "pointer",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  {truncate(news.summary, 100)}
                </h4>
                
              </CardContent>
              <CardActions>
              <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => navigate("/main/viewnews/" + news._id)}
                >
                  Learn More
                  </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      ));
    }
  };

  const filterByDate = (e) => {
    const selDate = e.target.value;

    const filtered = masterArray.filter((news) => {
      const newsDate = new Date(news.createdAt);
      return newsDate.getDate() == selDate;
    });
    setNewsArray(filtered);
  };
  const filterByMonth = (e) => {
    const selDate = e.target.value;

    const filtered = masterArray.filter((news) => {
      const newsDate = new Date(news.createdAt);
      return newsDate.getMonth() == selDate;
    });
    console.log(filtered);
    setNewsArray(filtered);
  };

  const filterByYear = (e) => {
    const selYear = e.target.value;
    console.log(e.target.value);

    const filtered = masterArray.filter((news) => {
      const newsDate = new Date(news.createdAt);
      // console.log(newsDate.getFullYear());
      return newsDate.getFullYear() == selYear;
    });
    console.log(filtered);
    setNewsArray([...filtered]);
    console.log(NewsArray);
  };
  

  return (
    <div className="" >
   
      <header className="archieve-header">
      <Grid container spacing={5}>
        <Grid item md={6}>
        <a className="navbar-brand" href="#">
            <img src={url + "/images/logoo.png"} alt="" width="50" height="35" />
          </a>

 
        <Typography className="text-center text-white" variant="h2" sx={{ml:74}}>
        News 
      </Typography>

    
    <Typography className="text-center text-white" variant="h2" sx={{ml:66}}>
      Archieves
    </Typography>
   
      <div className="input-group mt-5">
        <input className="form-control"
        value={filter}
        label="Search Here"
        onChange={(e) => setFilter(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{ color: "active.active", mr: 1, my: 0.5 }}
              />
            </InputAdornment>
          ),
        }}
         />
        <Button variant="contained" onClick={filternews} type="submit">Search</Button>
      
    </div>
    </Grid>
   
    <Grid item md={2} sx={{mt:25}}>
              <select
                class="form-select mt-5"
                aria-label="Default select example"
                onChange={filterByYear}
              >
                <option selected>Select a Year</option>
                {[2021, 2022].map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
            </Grid>

            <Grid item md={2} sx={{mt:25}}>
              <select
                class="form-select mt-5"
                aria-label="Default select example"
                onChange={filterByMonth}
              >
                <option selected>Select a Month</option>
                {[ "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",].map((mon, i) => (
                  <option value={i}>{mon}</option>
                ))}
              </select>
            </Grid>
            <Grid item md={2} sx={{mt:25}}>
              <select
                class="form-select mt-5"
                aria-label="Default select example"
                onChange={filterByDate}
              >
                <option selected>Select a Date</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                  <option value={date}>{date}</option>
                ))}
              </select>
            </Grid>
            </Grid>
    <Container>
          <div className="category-header">
            <Box
              sx={{
                "& button": { m: 1 },
                display: "flex",
                justifyContent: "space-between",
               
              }}
            >
              {displayCategories()}
            </Box>
          </div>
        </Container>
     
   


       
              
           
      
      <Container>
        <Grid container spacing={3}>
          <Grid item md={9}>
            {displaynews()}
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Container>
      </header>
    </div>
  );
};

export default ViewArchieve;