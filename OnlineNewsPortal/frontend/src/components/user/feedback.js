import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import { TextField,
  Card,
  CardContent,
  TextareaAutosize,
  CardMedia,
  Grid,
  Container,

} from "@mui/material";
import Swal from "sweetalert2";
import TitleSharpIcon from "@mui/icons-material/TitleSharp";

import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from '@mui/icons-material/Send';


const Feedback = () => {
  const url = app_config.api_url;

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  // const img1="image1.jpg"
  const feedbackForm = {
    user: currentUser._id,
    name:"",
    text:"",
    suggestion:"",
    compliment:"",
  };

  const feedbackSubmit = (values) => {
    console.log(values);

    fetch(url + "/feedback/add", {
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
          text: "Feedback added Successfully",
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "failed",
          text: " failed",
        });
      }

      return res.json();
    });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.user) {
      errors.user = "Required";
    } else if (!/^[A-Za-z]+/i.test(values.user)) {
      errors.user = "Invalid User";
    }

    return errors;
  };

  

  return (
    <div>
    <Container maxWidth="xl">
        <Card className="mt-4" sx={{ display: "flex", ml: 2 }}>
          <Grid container>
            <Grid item xs={6} md={7}>
              <CardMedia
                component="img"
                height="650"
                image={url + "/images/feedback.jpg"}
              />
            </Grid>
    
    <Formik initialValues={feedbackForm} onSubmit={feedbackSubmit}>
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
        
          <h3 className="card- header">   &nbsp; Your FeedBack  </h3>
          
          <h6> We would like your feedback to improve our news portal.</h6>
          <div className="mb-4">
          <TextField
           className="w-100 mt-3"
           id="name"
            label="name"
            type="text"
             variant="outlined"
             onChange={handleChange}
             value={values.name}
             error={errors.name} />
          </div>
          <div className="mb-4">
          <h6> Please select your feedback category below:</h6>
          <TextField 
          id="suggestion" 
          placeholder="Suggestion"
           variant="filled"
            /> &nbsp; &nbsp;&nbsp;
              <TextField 
              className="mb-4"
              
              id="compliment" 
              placeholder="Compliment"
               variant="filled"
                />
          
          </div>
     
           <div className="card-body">
            <div className="mb-4">
            <h6> Please  leave your feedback below. </h6>
            <TextareaAutosize
            classname="w-100 mt-3"
            
            aria-label="maximum height"
            placeholder="Give ur feedback here..."
            variant ="outlined"

          
            style={{ width: 500  ,  height: 200}}
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
          </div>


             
            
            <button
            
              type="submit"
              className=" w-100 mt -3 btn btn-primary"
              color="success"
              variant="contained"

              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SendIcon
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
              Send Feedback
            </button>
          </div>
        </form>
      )}
      
    </Formik>
    </Grid>
    </Card>
    </Container>
    </div>
   
  
  );
};

export default Feedback;