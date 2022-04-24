import { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import BeenhereRoundedIcon from "@mui/icons-material/BeenhereRounded";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { Edit, TitleSharp, Category, Newspaper } from "@mui/icons-material";
import TitleSharpIcon from "@mui/icons-material/TitleSharp";

import NewspaperIcon from "@mui/icons-material/Newspaper";
import CategoryIcon from "@mui/icons-material/Category";


const ManageCurrentAffairs = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});

  const [filter, setFilter] = useState("");

  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));
  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("sm")]: {
  //       width: "12ch",
  //       "&:focus": {
  //         width: "20ch",
  //       },
  //     },
  //   },
  // }));

  const fetchData = () => {
    fetch(url + "/newscurrent/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };
  const newsCategories = [
    "National",
    "International",
   
  ];

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
              Delete News
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
                  <Edit sx={{ margin: 1 }} />
                </Fab>
              </Tooltip>
          </Stack>
        </Accordion>
      ));
    }
  };
  const submitNews = (values) => {
    // values.thumbnail = thumbnail;
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
  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <div>
          <Card>
            <CardContent sx={{ width: 640 }}>
              <Formik
                initialValues={updateFormdata}
                onSubmit={submitNews}
               
              >
                {({ values, handleChange, handleSubmit, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <h5 className="card-header">Add Current Affairs</h5>

                    <div className="card-body">
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Title"
                        label="Title"
                        variant="outlined"
                        id="title"
                        onChange={handleChange}
                        value={values.title}
                        error={Boolean(errors.title)}
                        helperText={errors.title}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <TitleSharpIcon
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

                      <FormControl fullWidth>
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
                                <CategoryIcon
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
                      </FormControl>
                      <br></br>
                      <br></br>

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
                              <NewspaperIcon
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
                              variant="outlined"
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
                          value={values.thumbnail}
                          error={Boolean(errors.thumbnail)}
                          helperText={errors.thumbnail}
                          onChange={uploadThumbnail}
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      <button
                        onClick={(e) => setShowUpdateForm(false)}
                        type="button"
                        className="btn btn-primary"
                      >
                        Cancel
                      </button>
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

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="title-current"></div>
     
      <TextField
        className="w-50 mt-5"
        label="Search Here"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "active.active", mr: 1, my: 0.5 }} />
            </InputAdornment>
          ),
        }}
      />

      <Fab
        className="w-30 mt-5"
        variant="extended"
        color="primary"
        aria-label="add"
        type="submit"
        onClick={filternews}
      >
        Search
      </Fab>

      {displayNews()}
      {updateForm()}
    </div>
  );
};

export default ManageCurrentAffairs;
