import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from "@mui/material/Stack";



const ManageReporters= () => {
  const [ReporterArray, setReporterArray] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <Typography>{reporter.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>{reporter.email}</Typography>
          <Typography>{reporter.password}</Typography>
          <Typography>{reporter.gender}</Typography>
          <Typography>{reporter.number}</Typography>
          <Typography>{reporter.age}</Typography>
          <Typography>{reporter.thumbnail}</Typography>
          
          


          </AccordionDetails>
          <Stack direction="row" spacing={2}>
          <Button
            disabled={reporter.approvereporter}
            variant="contained"
            color="error"
            onClick={(e) => approveReporter(reporter._id)}
          >
            {reporter.approvereporter ? "Approved" : "Approve Reporter"}
            <i class="fa-solid fa-thumbs-up"></i>
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={(e) => deleteReporter(reporter._id)}
          >
            Delete Reporter
            
          </Button>
        </Stack>

          </Accordion>

      

          
          
        

       
      ));
    }
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