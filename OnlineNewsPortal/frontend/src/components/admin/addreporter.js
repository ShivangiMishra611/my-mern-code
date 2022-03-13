// import "./news.css";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";

const  AddReporter = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  // const img1="image1.jpg"
  const reporterForm = {
    name :"",
  username: "",
  password: "",
  age: "",
  thumbnail: "",
  };

  const reporterSubmit = (values) => {
    values.thumbnail = thumbnail;
    console.log(values);

    fetch(url + "/reporter/add", {
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
      <Formik initialValues={reporterForm} onSubmit={reporterSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="card">
              <h5 className="card-header">Add Reporter</h5>
              <div className="card-body">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="title"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">
                    Username
                  </label>
                  <input
                    className="form-control"
                    id="title"
                    onChange={handleChange}
                    value={values.username}
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    id="title"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">
                    Age
                  </label>
                  <input
                    className="form-control"
                    id="title"
                    onChange={handleChange}
                    value={values.age}
                  />
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

export default AddReporter;
