import { useEffect, useState } from "react";

import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  Typography,
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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import { Formik } from "formik";
import Swal from "sweetalert2";
import { Edit } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import * as Yup from "yup";

const ManageUsers = () => {
  const [UsersArray, setUsersArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});

  const [filter, setFilter] = useState("");

  const [thumbnail, setThumbnail] = useState("");

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsersArray(data);
        setLoading(false);
      });
  };

  const deleteUsers = (id) => {
    fetch(url + "/user/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("User Successfully Deleted!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const approveUsers = (id) => {
    fetch(url + "/user/update/" + id, {
      method: "PUT",
      body: JSON.stringify({ approveusers: true }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
      });
  };
  const filternews = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ username }) => {
          return username.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setUsersArray(filtered);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayUsers = () => {
    if (!loading) {
      return UsersArray.map((user, i) => (
        <Accordion key={user._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>{user.name}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <h3>{user.username}</h3>

            <h3>{user.age}</h3>

            <h3>{user.email}</h3>

            <h3>{user.password}</h3>

            <Stack direction="row" spacing={2}>
              {/* <Fab
             disabled={user.approveusers}
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => approveUsers(user._id)}
              aria-label="add"
            >
               < BeenhereRoundedIcon sx={{ mr: 1 }} />
              {user.approveusers ? "Approved" : "Approve Users"}
              
           
            </Fab> */}

              <Fab
                variant="extended"
                size="small"
                color="primary"
                onClick={(e) => deleteUsers(user._id)}
                aria-label="add"
              >
                <DeleteRoundedIcon sx={{ mr: 1 }} />
              </Fab>
              <Tooltip title="Update News Article">
                <Fab
                  size="medium"
                  color="success"
                  onClick={(e) => {
                    setUpdateFormdata(user);
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
  const submitUsers = (values) => {
    // values.thumbnail = thumbnail;
    console.log(values);

    fetch(url + "/user/update/" + values._id, {
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
          text: "Users Updated Successfully",
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
      .required("Name is Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("UserName is Required"),

    age: Yup.string().required("Age is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Contact is Required"),
  });
  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <div>
          <Card>
            <CardContent sx={{ width: 640 }}>
              <Formik
                initialValues={updateFormdata}
                onSubmit={submitUsers}
                // validationSchema={validationSchema}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mt-3"
                      placeholder="Name"
                      label="name"
                      variant="outlined"
                      id="name"
                      onChange={handleChange}
                      value={values.name}
                      error={Boolean(errors.name)}
                      helperText="Enter your name please"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon
                              sx={{ color: "active.active", mr: 1, my: 0.5 }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      className="w-100 mt-3"
                      placeholder="username"
                      label="username"
                      variant="outlined"
                      id="username"
                      onChange={handleChange}
                      value={values.username}
                      error={Boolean(errors.username)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon
                              sx={{ color: "active.active", mr: 1, my: 0.5 }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      helperText="Enter your Username please"
                    />
                    <TextField
                      className="w-100 mt-3"
                      placeholder="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      id="email"
                      onChange={handleChange}
                      value={values.email}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon
                              sx={{ color: "active.active", mr: 1, my: 0.5 }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      className="w-100 mt-3"
                      placeholder="Password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                      error={Boolean(errors.password)}
                      helperText="Enter your Password please"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockIcon
                              sx={{ color: "active.active", mr: 1, my: 0.5 }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      className="w-100 mt-3"
                      placeholder="Re -enterPassword"
                      label="ConfirmPassword"
                      type="password"
                      variant="outlined"
                      id="confirmPassword"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      error={errors.confirmPassword}
                      helperText={Boolean(errors.confirmPassword)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOpenIcon
                              sx={{ color: "active.active", mr: 1, my: 0.5 }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      className="w-100 mt-3"
                      placeholder="Age"
                      label="Age"
                      type="number"
                      variant="outlined"
                      id="age"
                      onChange={handleChange}
                      value={values.age}
                      error={Boolean(errors.age)}
                      helperText="Enter your correct age please"
                    />
                    <TextField
                      className="w-100 mt-3"
                      placeholder="Contact"
                      label="Contact"
                      variant="outlined"
                      id="number"
                      onChange={handleChange}
                      value={values.number}
                      error={Boolean(errors.number)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ContactPhoneIcon
                              sx={{ color: "active.active", mr: 1, my: 0.5 }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      helperText="Enter your Contact no. please"
                    />

                    <Button
                      type="submit"
                      className="btn btn-primary"
                      color="success"
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
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />

      <header className="users-back">
        <Typography className="text-center text-white" variant="h5">
          Trusted News Tribune
        </Typography>
        <Typography className="text-center text-white" variant="h2">
          Manage Users
        </Typography>
        <div className="col-6 mx-auto">
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
             }} />
            <Button variant="contained" onClick={filternews} type="Submit">
              Search
            </Button>
          </div>
        </div>
        <br></br>

        {displayUsers()}
        {updateForm()}
      </header>
    </div>
  );
};

export default ManageUsers;
