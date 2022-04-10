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
            <Typography>{user.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{user.username}</Typography>

            <Typography>{user.email}</Typography>

            <Typography>{user.password}</Typography>
          </AccordionDetails>
          <Stack direction="row" spacing={2}>
            <Button
              disabled={user.approveusers}
              variant="contained"
              color="error"
              onClick={(e) => approveUsers(user._id)}
            >
              {user.approveusers ? "Approved" : "Approve Users"}
              <i class="fa-solid fa-thumbs-up"></i>
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={(e) => deleteUsers(user._id)}
            >
              Delete Users
              
            </Button>
          </Stack>
        </Accordion>
      ));
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />

      {displayUsers()}
    </div>
  );
};

export default ManageUsers;
