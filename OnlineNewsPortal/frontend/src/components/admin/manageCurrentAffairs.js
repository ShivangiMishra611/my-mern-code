import { useEffect, useState } from "react";
import {
  Autocomplete,
  Card,
  CardContent,
  Chip,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Grid,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import BeenhereRoundedIcon from "@mui/icons-material/BeenhereRounded";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { Edit, TitleSharp, Category, Newspaper } from "@mui/icons-material";
import { green } from '@mui/material/colors';
import * as Yup from "yup";
const ManageCurrentAffairs = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [masterArray, setMasterArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});

  const [filter, setFilter] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const url = app_config.api_url;

  
 

  const fetchData = () => {
    fetch(url + "/newscurrent/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setMasterArray(data);
        setLoading(false);
      });
  };
  // const newsCategories = [
  //   "National",
  //   "International",
   
  // ];
  const uploadThumbnail = (e) => {
    console.log("file selected");

    let file = e.target.files[0];
    console.log(file.name);
    setThumbnail(file.name);
    let form = new FormData();
    form.append("myfile", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: form }).then(
      (res) => {
        console.log(res.status);
      }
    );
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

  const filternews = () => {
    fetch(url + "/newscurrent/getall")
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
            <br></br>
            
          </AccordionSummary>
          <AccordionDetails>
            <img src={url + "/" + newscurrent.thumbnail} height="200" />
            <br></br>
            
            <h5>{newscurrent.summary}</h5>

            {/* <h5>{newscurrent.categorystate}</h5> */}
         
            <h5>{newscurrent.createdAt}</h5>

          
         
          <Stack direction="row" spacing={2}>
            <Fab
              disabled={newscurrent.approvenews}
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => approveNews(newscurrent._id)}
              aria-label="add"
            >
              <BeenhereRoundedIcon sx={{ mr: 1 }} />
              {newscurrent.approvenews ? "Approved" : "Approve News"}
            </Fab>

            <Fab
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => deleteNews(newscurrent._id)}
              aria-label="add"
            >
              <DeleteRoundedIcon sx={{ mr: 1 }} />
              
            </Fab>
            <Tooltip title="Update News Article">
                <Fab
                  size="medium"
                  color="success"
                  onClick={(e) => {
                    setUpdateFormdata(newscurrent);
                    setShowUpdateForm(true);
                  }}
                  aria-label="add"
                >
                  <Edit 
                  variant="extended"
                  size="small"
                  sx={{ color: green[30] }} />
                </Fab>
              </Tooltip>
          </Stack>
          </AccordionDetails>
        </Accordion>
      ));
    }
  };
  
  const submitNews = (values) => {
    values.thumbnail = thumbnail;
    console.log(values);

    fetch(url + "/newscurrent/update/" + values._id, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Current Affairs Updated Successfully",
        });
        fetchData();
        setShowUpdateForm(false);
      }
      return res.json();
    });
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("Title is Required"),
    // categorystate: Yup.string().required("Category is Required"),
    summary: Yup.string().required("News Summary is Required"),
    tags: Yup.string().required("News Tags is Required"),
  });
  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <div>
          <Card>
            <CardContent sx={{ width: 700}}>
              <Formik
                initialValues={updateFormdata}
                onSubmit={submitNews}
                // validationSchema={validationSchema}
               
              >
                {({ values, handleChange, handleSubmit, errors }) => (
                  <form onSubmit={handleSubmit}>
                   

                    <div className="card-body">
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Title"
                        label="Title"
                        variant="outlined"
                        id="title"
                        type="text"
                        onChange={handleChange}
                        value={values.title}
                        error={Boolean(errors.title)}
                        helperText={errors.title}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <TitleSharp
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <br></br>
                      <br></br>

                      {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label1">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label1"
                          id="categorystate"
                          name="categorystate"
                          label="Categorystate"
                          value={values.categorystate}
                          error={Boolean(errors.categorystate)}
                          helperText={errors.categorystate}
                          onChange={handleChange}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Category
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        >
                          {newsCategories.map((categorystate) => (
                            <MenuItem value={categorystate}>
                              {categorystate}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                      {/* <br></br>
                      <br></br> */}

                      <TextField
                        className="w-100 mt-3"
                        label="Add News"
                        multiline
                        rows={4}
                        variant="outlined"
                        id="summary"
                        onChange={handleChange}
                        value={values.summary}
                        error={Boolean(errors.summary)}
                        helperText={errors.summary}
                        aria-label="Add News"
                        placeholder="Add News"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Newspaper
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <br></br>
                      <br></br>

                      <Autocomplete
                        className="mt-5"
                        multiple
                        id="tags"
                        options={["crime", "politics", "sports"].map(
                          (topic) => topic
                        )}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="filled"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            id="tags"
                            value={values.tags}
                            error={Boolean(errors.tags)}
                            helperText={errors.tags}
                            onChange={handleChange}
                            {...params}
                            variant="filled"
                            label="Add Relevant Tags"
                          />
                        )}
                      />

                      <br></br>
                      <br></br>

                      <div className="mb-3">
                        <label for="formFile" class="form-label">
                          Add Image
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="thumbnail"
                         
                          onChange={uploadThumbnail}
                        />
                      </div>

                      <Button type="submit" className="btn btn-primary"
                      color="success"
                      variant="contained">
                        Submit
                      </Button>
                      <Button
                        onClick={(e) => setShowUpdateForm(false)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      );
    }
  };
  const filterByDate = (e) => {
    const selDate = e.target.value;

    const filtered = masterArray.filter((newscurrent) => {
      const newsDate = new Date(newscurrent.createdAt);
      return newsDate.getDate() == selDate;
    });
    setNewsArray(filtered);
  };
  const filterByMonth = (e) => {
    const selDate = e.target.value;

    const filtered = masterArray.filter((newscurrent) => {
      const newsDate = new Date(newscurrent.createdAt);
      return newsDate.getMonth() == selDate;
    });
    console.log(filtered);
    setNewsArray(filtered);
  };

  const filterByYear = (e) => {
    const selYear = e.target.value;
    console.log(e.target.value);

    const filtered = masterArray.filter((newscurrent) => {
      const newsDate = new Date(newscurrent.createdAt);
      // console.log(newsDate.getFullYear());
      return newsDate.getFullYear() == selYear;
    });
    console.log(filtered);
    setNewsArray([...filtered]);
    console.log(NewsArray);
  };


  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
     
      <header className="current-back">
      <Grid container spacing={5}>
        <Grid item md={6}>
        <a className="navbar-brand" href="#">
        <img src={url + "/images/logoo.png"} alt="" width="50" height="35" />
      </a>
       
      
       
        <Typography className="text-center text-white" variant="h2"  sx={{ml:50,mt:1}}>
          Manage Current Affairs
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
            }}/>
            <Button variant="contained"  onClick={filternews}
            type="submit" align="center" >Search
            
            </Button>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <br></br>
          </Grid>
          <Grid item md={2}  sx={{mt: 35}}>
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

            <Grid item md={2} sx={{mt: 35}}>
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
                "Dec"].map((mon, i) => (
                  <option value={i}>{mon}</option>
                ))}
              </select>
            </Grid>
            <Grid item md={2} sx={{mt: 35}}>
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
       



  

      {displayNews()}
      {updateForm()}
      </header>
    </div>
    
  );
};

export default ManageCurrentAffairs;
