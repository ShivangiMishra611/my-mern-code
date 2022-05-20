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
  Tooltip,
  CardActions,
 
  Typography
} from "@mui/material";
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
        <Card  classname="">
        
        <header className="stories-header">
          <Typography className="text-center text-white" variant="h2">
            Trusted News Tribune
          </Typography>
          
        
            
          </header>
  
        
       


       
  
  
        <Card className="cardview" sx={{ maxWidth: 900, ml:23,mt:1, }}>
        
      
         
          <CardMedia
            component="img"
            height="350"
            image={url + "/" + newsData.thumbnail}
            alt="sports news"
          />

         
          <CardContent>

      
           
            <Tooltip title={newsData.title}>
                  <h2
                    component="div"
                    variant="h5"
                   
                    style={{
                      cursor: "pointer",
                      color: "#950000",
                      fontWeight: "bolder",
                    }}
                  >
                     {newsData.title}
                   
                  </h2>
                </Tooltip>
          </CardContent>
          <CardActions disableSpacing>
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
            <h5
                    component="div"
                    variant="h5"
                   
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                     {newsData.summary}
                   
                  </h5>
            </CardContent>
          </Collapse>
        </Card>
      
        </Card>
        
      
      );
    }
  };

  return <div>{displayNews()}</div>;
};

export default ViewNews;
