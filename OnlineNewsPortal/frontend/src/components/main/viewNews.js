import { useParams } from "react-router-dom";
import app_config from "../../config";
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const ViewNews = () => {
  const { id } = useParams();
  const url = app_config.api_url;

  const [newsData, setNewsData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fetchData = () => {
    fetch(url + "/news/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setNewsData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const displayNews = () => {
    if (!loading) {
      return (
        <Card className="cardview" sx={{ maxWidth: 700, mt: 5 }}>
          <h1>Display News</h1>
          <CardMedia
            component="img"
            height="350"
            image={url + "/" + newsData.thumbnail}
            alt="sports news"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {newsData.title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>{newsData.summary}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    }
  };

  return <div>{displayNews()}</div>;
};

export default ViewNews;
