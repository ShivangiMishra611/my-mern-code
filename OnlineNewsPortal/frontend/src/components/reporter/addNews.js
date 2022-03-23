import "./news.css";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,TextareaAutosize
} from "@mui/material";

const AddNews = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  // const img1="image1.jpg"
  const newsForm = {
    title: "",
    summary: "",
    category: "",
    subCategory: "",
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
                <div className="mb-3">
                  {/* <label for="exampleFormControlInput1" className="form-label">
                    News Title
                  </label> */}
                  <TextField
                    className="w-100 mt-3"
                    placeholder="Title"
                    label="Title"
                    variant="outlined"
                    id="title"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>

                <FormControl fullWidth>
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
                <br></br><br></br>


                <FormControl fullWidth>
                <InputLabel id="category">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    name="category"
                    value={values.category}
                    label="Category"
                    onChange={handleChange}
                  >
                    {newsCategories.map((category) => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br></br><br></br>

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

                <div className="mb-3">
                  

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
                  
                </div>
                <br></br>

                <div className="mb-3">
                  
                  <TextareaAutosize
                    maxRows={4}
                    id="tags"
                    rows="5"
                    onChange={handleChange}
                    value={values.tags}
                    aria-label="Add Tags"
                    placeholder="Add Tags"
                    style={{ width: 640 }}
                  />
                  
                </div>
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
