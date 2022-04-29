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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import { styled } from '@mui/material/styles';

const ViewNews = () => {
    const id = useParams();
    const url = app_config.api_url;
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
   
      const [expanded, setExpanded] = React.useState(false);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };


    const fetchData = () => {
        fetch(url + "/news/getbyid/"+id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
           
          });
      };
    
      const refreshData = () => {
       
        fetch(url + "/news/approvenews")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
          });
      };
      
    





    
    return(
        <div>
          <Grid justifyContent="center">
           <Card  className="cardview" sx={{ maxWidth: 700 ,mt:5}} >
            <h1>Display News</h1>
      <CardMedia
        component="img"
        height="350"
        image={url + "/images/EDITORIAL2.jpg"}
        alt="sports news"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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
         
          <Typography paragraph>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
           
          </Typography>
          <Typography paragraph>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
           
          </Typography>
          <Typography paragraph>
           
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    </Grid>

        </div>
    );

};

export default  ViewNews