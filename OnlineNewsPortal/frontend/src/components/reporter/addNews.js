import "./news.css";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useState } from "react";
import app_config from "../../config";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  TextareaAutosize,Autocomplete
} from "@mui/material";

const AddNews = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  // const img1="image1.jpg"
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

  return (
    <div>
      <Formik initialValues={newsForm} onSubmit={newsSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="card">
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
                    onChange={handleChange}
                  >
                    {newsCategories.map((category) => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br></br>
                <br></br>

                {/* <FormControl fullWidth>
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    value={values.category}
                    label="Category"
                    onChange={handleChange}
                  >
                    {newsCategories.map((category) => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br></br>
                <br></br> */}

                {/* <div className="mb-3">
                  <label for="exampleFormControlInput3" className="form-label">
                    Add SubCategory
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleChange}
                    value={values.subCategory}
                    id="subCategory"
                  >
                    <option selected>Sub Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div> */}

                <TextareaAutosize
                  maxRows={4}
                  id="summary"
                  rows="5"
                  onChange={handleChange}
                  value={values.summary}
                  aria-label="Add News"
                  placeholder="Add News"
                  style={{ width: 640 }}
                />

                <br></br>
                <br></br>

                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={tags}
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
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddNews;
