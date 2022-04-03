import "./news.css";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useState } from "react";
import app_config from "../../config";
import TitleSharpIcon from "@mui/icons-material/TitleSharp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CategoryIcon from "@mui/icons-material/Category";
import StyleIcon from "@mui/icons-material/Style";
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
} from "@mui/material";

const AddNews = () => {
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
    "Sports",
    "Politics",
    "World",
    "Lifestyle",
    "Entertainment",
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
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.category) {
      errors.category = "Required";
    }

    if (!values.summary) {
      errors.summary = "Required";
    }

    if (!values.tags) {
      errors.tags = "Required";
    }
    return errors;
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={9}>
          <Grid container>
            <Grid item md={6} xs={6}>
              <Card className="mt-5" sx={{ dizsplay: "flex", width: 1300 }}>
                <CardMedia
                  component="img"
                  height="600"
                  sx={{ width: 600, m: 1 }}
                  image={url + "/images/news_reporting.webp"}
                />
                <Grid item xs={6} md={8}>
                  <CardContent sx={{ width: 600 }}>
                    <Formik
                      initialValues={newsForm}
                      onSubmit={newsSubmit}
                      validate={validate}
                    >
                      {({ values, handleChange, handleSubmit, errors }) => (
                        <form onSubmit={handleSubmit}>
                          <h5 className="card-header">Add News</h5>

                          <div className="card-body">
                            <TextField
                              className="w-100 mt-3"
                              placeholder="Title"
                              label="Title"
                              variant="outlined"
                              id="title"
                              onChange={handleChange}
                              value={values.title}
                              error={errors.title}
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
                                id="category"
                                name="category"
                                label="Category"
                                value={values.category}
                                error={errors.category}
                                helperText={errors.category}
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
                            <br></br>
                            <br></br>

                            <TextField
                              className="w-100 mt-3"
                              label="Add News"
                              multiline
                              variant="outlined"
                              id="summary"
                              onChange={handleChange}
                              value={values.summary}
                              error={errors.summary}
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
                              multiple
                              id="tags-outlined"
                              error={errors.tags}
                              helperText={errors.tags}
                              options={tags}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <StyleIcon
                                      sx={{
                                        color: "active.active",
                                        mr: 1,
                                        my: 0.5,
                                      }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              getOptionLabel={(option) => option}
                              filterSelectedOptions
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="filterSelectedOptions"
                                  placeholder="Favorites"
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

                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </CardContent>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </div>
  );
};

export default AddNews;
