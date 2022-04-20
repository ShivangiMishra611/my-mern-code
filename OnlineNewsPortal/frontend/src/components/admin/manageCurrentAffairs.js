import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Stack from "@mui/material/Stack";
import Fab from '@mui/material/Fab';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const ManageCurrentAffairs = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  

  const fetchData = () => {
    fetch(url + "/newscurrent/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };

  const deleteNews = (id) => {
    fetch(url + "/newscurrent/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("News Successfully Deleted!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const approveNews = (id) => {
    fetch(url + "/newscurrent/update/" + id, {
      method: "PUT",
      body: JSON.stringify({ approvenews: true }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayNews = () => {
    if (!loading) {
      return NewsArray.map((newscurrent, i) => (
        <Accordion key={newscurrent._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4>{newscurrent.title}</h4>
            <br></br>
          </AccordionSummary>
          <AccordionDetails>
            <img src={url + "/" + newscurrent.thumbnail} height="200" />
            <br></br>
            <br></br>
            <h5>{newscurrent.summary}</h5>

            <Typography>{newscurrent.categorystate}</Typography>
          </AccordionDetails>
          <Stack direction="row" spacing={2}>
            
            <Fab
             disabled={newscurrent.approvenews}
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => approveNews(newscurrent._id)}
              aria-label="add"
            >
               < BeenhereRoundedIcon sx={{ mr: 1 }} />
              {newscurrent.approvenews ? "Approved" : "Approve News"}
              
           
            </Fab>


            <Fab
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => deleteNews(newscurrent._id)}
              aria-label="add"
            >
              < DeleteRoundedIcon sx={{ mr: 1 }} />
              Delete News
            </Fab>

           
          </Stack>
        </Accordion>
      ));
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="title-current">

      </div>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>


      {displayNews()}
    </div>
  );
};

export default ManageCurrentAffairs;
