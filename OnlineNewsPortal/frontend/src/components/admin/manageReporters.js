import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  InputAdornment,
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
import { Edit } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import * as Yup from "yup";
import { green } from "@mui/material/colors";

const ManageReporters = () => {
  const [ReporterArray, setReporterArray] = useState([]);
  const [masterArray, setMasterArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});
  const [filter, setFilter] = useState("");

  const [thumbnail, setThumbnail] = useState("");

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/reporter/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReporterArray(data);
        setMasterArray(data);
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

    fetch(url + "/util/uploadfile", { method: "PUT", body: form }).then(
      (res) => {
        console.log(res.status);
      }
    );
  };

  const deleteReporter = (id) => {
    fetch(url + "/reporter/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("Reporter Successfully Deleted!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const approveReporter = (id) => {
    fetch(url + "/reporter/update/" + id, {
      method: "PUT",
      body: JSON.stringify({ approvereporter: true }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
      });
  };
  const filternews = () => {
    fetch(url + "/reporter/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setReporterArray(filtered);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayReporters = () => {
    if (!loading) {
      return ReporterArray.map((reporter, i) => (
        <Accordion key={reporter._id}>
          <AccordionSummary
            sx={{ ml: 2, mr: 3 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4>{reporter.name}</h4>
          </AccordionSummary>
          <AccordionDetails>
            <img src={url + "/" + reporter.thumbnail} height="200" />
            <br></br>
            <br></br>
            <h2>{reporter.email}</h2>
            <h2>{reporter.password}</h2>
            <h2>{reporter.gender}</h2>
            <h2>{reporter.number}</h2>
            <h2>{reporter.age}</h2>

            <Stack direction="row" spacing={2}>
              {/* <Fab
                disabled={reporter.approvereporter}
                variant="extended"
                size="small"
                color="primary"
                onClick={(e) => approveReporter(reporter._id)}
                aria-label="add"
              >
                <BeenhereRoundedIcon sx={{ mr: 1 }} />
                {reporter.approvereporter ? "Approved" : "Approve Reporter"}
              </Fab> */}

              <Fab
                variant="extended"
                size="small"
                color="primary"
                onClick={(e) => deleteReporter(reporter._id)}
                aria-label="add"
              >
                <DeleteRoundedIcon sx={{ mr: 1 }} />
              </Fab>
              <Tooltip title="Update News Article">
                <Fab
                  size="medium"
                  color="success"
                  onClick={(e) => {
                    setUpdateFormdata(reporter);
                    setShowUpdateForm(true);
                  }}
                  aria-label="add"
                >
                  <Edit
                    variant="extended"
                    size="small"
                    sx={{ color: green[30] }}
                  />
                </Fab>
              </Tooltip>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ));
    }
  };
  const submitReporter = (values) => {
    values.thumbnail = thumbnail;
    console.log(values);

    fetch(url + "/reporter/update/" + values._id, {
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
          text: "Reporters Updated Successfully",
        });
        fetchData();
        setShowUpdateForm(false);
      }
      return res.json();
    });
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("FullName is Required"),
    gender: Yup.string().required("Gender is Required"),
    // number: Yup.number()
    // .min(6)
    // .max(10)
    // .required("Number is Required"),
    age: Yup.string().required("Age is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
  });
  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <div>
          <Card>
            <CardContent sx={{ width: 640 }}>
              <Formik
                initialValues={updateFormdata}
                onSubmit={submitReporter}
                // validationSchema={validationSchema}
              >
                {({ values, handleChange, handleSubmit, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Name"
                        label="Name"
                        variant="outlined"
                        id="name"
                        type="text"
                        onChange={handleChange} 
                        value={values.name}
                        // error={Boolean(errors.name)}
                        // helperText={errors.name}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <AccountCircleIcon
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
                    </div>

                    <div className="mb-3">
                      <TextField
                        className="w-100 mt-3"
                        placeholder="email"
                        label="Email"
                        variant="outlined"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                        // error={errors.email}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EmailIcon
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        // helperText={errors.email}
                      />
                    </div>

                    <div className="mb-3">
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        // error={errors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <KeyIcon
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        // helperText={errors.password}
                      />

                      <div className="mb-3">
                        <TextField
                          className="w-100 mt-3"
                          placeholder="Password"
                          label="Confirm Password"
                          type="password"
                          variant="outlined"
                          id="confirmpassword"
                          onChange={handleChange}
                          value={values.confirmpassword}
                          // error={errors.confirmpassword}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <KeyIcon
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          // helperText={errors.confirmpassword}
                        />
                        <div className="mb-3">
                          {/* <RadioGroup  
                          aria-labelledby="demo-radio-buttons-group-label"
                          label="Gender"
                          id="gender"
                          defaultValue="female"
                          name="gender"
                        >
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="other" control={<Radio />} label="Others" />
                    
                              onChange={handleChange}
                              value={values.gender}
                              error={errors.gender}
                              type="text"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <WcIcon
                                      sx={{
                                        color: "active.active",
                                        mr: 1,
                                        my: 0.5,
                                      }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              helperText={errors.gender}
                              </RadioGroup> */}
                        </div>
                        <div className="mb-3">
                          <TextField
                            className="w-100 mt-3"
                            placeholder="Contact"
                            label="Contact"
                            variant="outlined"
                            id="number"
                            type="number"
                            onChange={handleChange}
                            value={values.number}
                            // error={errors.number}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <CallIcon
                                    sx={{
                                      color: "active.active",
                                      mr: 1,
                                      my: 0.5,
                                    }}
                                  />
                                </InputAdornment>
                              ),
                            }}
                            // helperText={errors.number}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <TextField
                          className="w-100 mt-3"
                          placeholder="Age"
                          label="Age"
                          variant="outlined"
                          id="age"
                          type="number"
                          onChange={handleChange}
                          value={values.age}
                          // error={errors.age}
                          // helperText={errors.age}
                        />
                      </div>

                      <div className="mb-3">
                        <label HtmlFor="formFile" className="form-label">
                          Add Image
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="thumbnail"
                          onChange={uploadThumbnail}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="btn btn-primary"
                        color="primary"
                        variant="contained"
                      >
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
    <div className="rep-back">
      <Toaster position="top-right" reverseOrder={false} />

      <header className="reporters">
        <Typography className="text-center text-white" variant="h5">
          Trusted News Tribune
        </Typography>
        <Typography className="text-center text-white" variant="h2">
          Manage Reporters
        </Typography>
        <div className="col-6 mx-auto">
          <div className="input-group mt-5">
            {/* <TextField
              sx={{ borderRadius: "16px" }}
              className="w-50 mt-5 "
              label="Search Here"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                    />
                  </InputAdornment>
                ),
              }}
            /> */}
            <input
              className="form-control"
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
              }}
            />
            <Button variant="contained" onClick={filternews} type="submit">
              Search
            </Button>
          </div>
        </div>
        <br></br>
       

        {displayReporters()}
        {updateForm()}
      </header>
    </div>
  );
};

export default ManageReporters;
