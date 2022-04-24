import { useEffect, useState } from "react";
import {  Autocomplete,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from "@mui/material/Stack";
import Fab from '@mui/material/Fab';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import { Formik } from "formik";
import Swal from "sweetalert2";
import { Edit, TitleSharp, Category, Newspaper } from "@mui/icons-material";



const ManageReporters= () => {
  const [ReporterArray, setReporterArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormdata, setUpdateFormdata] = useState({});

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/reporter/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReporterArray(data);
        setLoading(false);
        
      });
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

  useEffect(() => {
    fetchData();
  }, []);

  const displayReporters = () => {
    if (!loading) {
      return ReporterArray.map((reporter, i) => (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <h4>{reporter.name}</h4>
          </AccordionSummary>
          <img src={url + "/" + reporter.thumbnail} height="200" />
          <br></br>
            <br></br>
         

          <AccordionDetails>
        <h2>{reporter.email}</h2>
        <h2>{reporter.password}</h2>
        <h2>{reporter.gender}</h2>
        <h2>{reporter.number}</h2>
        <h2>{reporter.age}</h2>
          
          
          


          </AccordionDetails>
          <Stack direction="row" spacing={2}>
          <Fab
             disabled={reporter.approvereporter}
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => approveReporter(reporter._id)}
              aria-label="add"
            >
               < BeenhereRoundedIcon sx={{ mr: 1 }} />
              {reporter.approvereporter ? "Approved" : "Approve Reporter"}
              
           
            </Fab>


            <Fab
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => deleteReporter(reporter._id)}
              aria-label="add"
            >
              < DeleteRoundedIcon sx={{ mr: 1 }} />
              Delete 
            </Fab>

        </Stack>

          </Accordion>

      

          
          
        

       
      ));
    }
  };
  const submitNews = (values) => {
    // values.thumbnail = thumbnail;
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

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Manage Reporters</h1>
      {displayReporters()} 
    </div>
  );
};

export default ManageReporters; 