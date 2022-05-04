import { useEffect, useState } from "react";
import {
  Button,
  Autocomplete,
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

const RManageNews = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});

  const [filter, setFilter] = useState("");

  const [thumbnail, setThumbnail] = useState("");

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };
  
  const newsCategories = [
    "Sports",
    "Politics",
    "World",
    "Lifestyle",
    "Entertainment",
  ];
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
    fetch(url + "/news/delete/" + id, { method: "DELETE" })
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

//   const approveNews = (id) => {
//     fetch(url + "/news/update/" + id, {
//       method: "PUT",
//       body: JSON.stringify({ approvenews: true }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         fetchData();
//       });
//   };
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

  const displayNews = () => {
    if (!loading) {
      return NewsArray.map((news, i) => (
        <Accordion key={news._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
           
          >
            <h4>{news.title}</h4>
          </AccordionSummary>
          <AccordionDetails>
            <img src={url + "/" + news.thumbnail} height="200" />
            <br></br>
            <br></br>
            <h5>{news.summary}</h5>

            <h5>{news.category}</h5>
            <Stack direction="row" spacing={2}>
            <br></br>
            <br></br>
              
              <Fab
                variant="extended"
                size="small"
                color="primary"
                onClick={(e) => deleteNews(news._id)}
               
              aria-label="add"
              >
                <DeleteRoundedIcon sx={{ mr: 1}} />
              
              </Fab>
              <Tooltip title="Update News Article">
                <Fab
                  size="medium"
                  color="success"
                  onClick={(e) => {
                    setUpdateFormdata(news);
                    setShowUpdateForm(true);
                  }}
                  aria-label="add"
                >
                  <Edit
                  variant="extended"
                  size="small"
                  sx={{ color: green[30] }}   />
                </Fab>
              </Tooltip>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ));
    }
  };

  const submitNews = (values) => {
    // values.thumbnail = thumbnail;
    console.log(values);

    fetch(url + "/news/update/" + values._id, {
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
          text: "News Updated Successfully",
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
      .max(50, "Too Long!")
      .required("Title is Required"),
    category: Yup.string().required("Category is Required"),
    summary: Yup.string().required("News Summary is Required"),
    tags: Yup.string().required("News Tags is Required"),
  });

  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <div>
          <Card>
            <CardContent sx={{ width: 640 }}>
              <Formik
                initialValues={updateFormdata}
                onSubmit={submitNews}
                validationSchema={validationSchema}
               
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

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label1">
                          Category
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-label1"
                          id="category"
                          name="category"
                          label="Category"
                          value={values.category}
                          error={Boolean(errors.category)}
                          helperText={errors.category}
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
                          {newsCategories.map((category) => (
                            <MenuItem value={category}>
                              {category}
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
                          value={values.thumbnail}
                          error={Boolean(errors.thumbnail)}
                          helperText={errors.thumbnail}
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

  return (
    <div className="newsmanage">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="manage-news"></div>
     
     <TextField sx={{ borderRadius:'16px'}}
       className="w-50 mt-5 "
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

     <br></br>
     <br></br>
     <br></br>
  

      {displayNews()}

      {updateForm()}
    </div>
  );
};

export default RManageNews;
