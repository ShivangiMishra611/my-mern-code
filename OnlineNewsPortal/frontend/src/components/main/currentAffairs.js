import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  CardActions,
  Container,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";

import "./currentAffairs.css";

const CurrentAffairs = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categorystate } = useParams();
  const navigate = useNavigate();

  const newsCategories = ["National", "International"];

  const filterTopStories = (data) => {
    Date.prototype.removeDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() - days);
      return date;
    };
    const filtered = data.filter((newscurrent) => {
      return new Date(newscurrent.createdAt) >= new Date().removeDays(1);
    });

    console.log(filtered);
    return filtered;
  };

  const url = app_config.api_url;

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/newscurrent/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (categorystate) {
          applyFilter(filterTopStories(data), categorystate);
        } else {
          setNewsArray(filterTopStories(data));
        }
        setLoading(false);
      });
  };

  const refreshData = (filter) => {
    setLoading(true);
    fetch(url + "/newscurrent/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        applyFilter(filterTopStories(data), filter);
      });
  };
  const applyFilter = (data, filter) => {
    const filteredArray = data.filter((newscurrent) => {
      return filter.toLowerCase() == newscurrent.categorystate.toLowerCase();
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const truncate = (text, n) => {
    return text.substring(0, n) + "...";
  };

  const displayCategories = () => {
    return newsCategories.map((categorystate) => (
      <Button
        variant="outlined"
        size="medium"
        onClick={(e) => refreshData(categorystate)}
      >
        {categorystate}
      </Button>
    ));
  };

  const displaynews = () => {
    if (!loading) {
      return newsArray.map((newscurrent) => (
        <Card className="mt-5">
          <Grid container>
            <Grid item xs={6} md={4}>
              <CardMedia
                component="img"
                height="250"
                image={url + "/" + newscurrent.thumbnail}
                alt={newscurrent.title}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <CardContent>
                <Tooltip title={newscurrent.title}>
                  <h2
                    component="div"
                    variant="h5"
                    onClick={(e) =>
                      navigate("/main/viewnews/" + newscurrent._id)
                    }
                    style={{
                      cursor: "pointer",
                      color: "#950000",
                      fontWeight: "bolder",
                    }}
                  >
                    {truncate(newscurrent.title, 65)}
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
                  {truncate(newscurrent.summary, 100)}
                </h4>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => navigate("/main/viewnews/" + newscurrent._id)}
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

  return (
    <div>
      <header className="caffairs-header">
        <Typography className="text-center text-white" variant="h5">
          Trusted News Tribune
        </Typography>
        <Typography className="text-center text-white" variant="h2">
          Current Affairs
        </Typography>
        <div className="col-6 mx-auto">
          <div className="input-group mt-5">
            <input className="form-control" />
            <Button variant="contained">Search</Button>
          </div>
        </div>
        <br></br>
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
      </header>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={9}>
            {displaynews()}
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CurrentAffairs;
