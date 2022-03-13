import "./news.css";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";

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
                  <label for="exampleFormControlInput1" className="form-label">
                    News Title
                  </label>
                  <input
                    className="form-control"
                    id="title"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">
                    Add Category
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="category"
                    onChange={handleChange}
                    value={values.category}
                  >
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="mb-3">
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
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Add News
                  </label>
                  <textarea
                    className="form-control"
                    id="summary"
                    rows="5"
                    onChange={handleChange}
                    value={values.summary}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Add Tags
                  </label>
                  <textarea
                    className="form-control"
                    id="tags"
                    rows="3"
                    onChange={handleChange}
                    value={values.tags}
                  ></textarea>
                </div>

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

                <button type="submit" className="btn btn-primary" >
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
