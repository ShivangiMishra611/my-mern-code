import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Stack from "@mui/material/Stack";
import Fab from '@mui/material/Fab';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';

const ManageUsers = () => {
  const [UsersArray, setUsersArray] = useState([]);
  const [loading, setLoading] = useState(true);

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

           <h3>{user.email}</h3>

           <h3>{user.password}</h3>
          </AccordionDetails>
          <Stack direction="row" spacing={2}>
          <Fab
             disabled={user.approveusers}
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => approveUsers(user._id)}
              aria-label="add"
            >
               < BeenhereRoundedIcon sx={{ mr: 1 }} />
              {user.approveusers ? "Approved" : "Approve Users"}
              
           
            </Fab>


            <Fab
              variant="extended"
              size="small"
              color="primary"
              onClick={(e) => deleteUsers(user._id)}
              aria-label="add"
            >
              < DeleteRoundedIcon sx={{ mr: 1 }} />
              Delete Users
            </Fab>
           
           
          </Stack>
        </Accordion>
      ));
    }
  };

  return (
    <div className="manage-users">
      <Toaster position="top-right" reverseOrder={false} />

      {displayUsers()}
    </div>
  );
};

export default ManageUsers;
