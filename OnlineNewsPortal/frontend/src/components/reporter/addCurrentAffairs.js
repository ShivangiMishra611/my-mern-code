
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useState } from "react";
import app_config from "../../config";
import TitleSharpIcon from "@mui/icons-material/TitleSharp";
import * as Yup from "yup";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CategoryIcon from "@mui/icons-material/Category";

import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Autocomplete,
  Card,
  Grid,
  CardContent,
  CardMedia,
  InputAdornment,
  Chip,
  Container,
  Typography,
} from "@mui/material";
// import CurrentAffairs from "../main/currentAffairs";

const CurrentAffairs = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");

  const newsForm = {
    title: "",

    category: "",
    subCategory: "",
    summary: "",
    thumbnail: "",
    tags: "",
  };

  const newsCategories = [
   "National",
   "International"
    
  ];

  const [tags, setTags] = useState([]);
  const img1 = "ADDNEWS.jpeg";

  const newsSubmit = (values) => {
    values.thumbnail = thumbnail;
    console.log(values);


    fetch(url + "/news/add", {
      method: "POST",
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
          text: "News Added Successfully",
        });
      }
      return res.json();
      
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
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Title is Required"),
    category: Yup.string().required("Category is Required"),
    summary: Yup.string().required("News Summary is Required"),
    tags: Yup.string().required("News Tags is Required"),
  });

  return (
    <div className="addrep-bg">
      <Container maxWidth="lg">
      <div className="add-news-top">
        <Typography variant="h2" sx={{fontWeight : 900}}>ADD CURRENT AFFAIRS</Typography>
      </div>
      <Card>
      
      <CardContent>
        
        
          <Formik
            initialValues={newsForm}
            onSubmit={newsSubmit}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
               
                <div className="card-body">
                  
                  <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}  >
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
                    </Grid>
                    <Grid item sm={6} xs={12}  >
                    <FormControl fullWidth className="mt-3">
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
                      helperText="Category is required"
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
                      {newsCategories.map((category) => (
                        <MenuItem value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                    </Grid>
                  </Grid>


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
                     
                      onChange={uploadThumbnail}
                    />
                  </div>

                  <button type="submit" className="w-100 btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </CardContent>
    </Card>
      </Container>
    </div>
  );
};

export default CurrentAffairs;
