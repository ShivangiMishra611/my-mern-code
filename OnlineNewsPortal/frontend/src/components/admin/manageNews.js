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

const ManageNews = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };

  const deleteNews = (id) => {
    fetch(url + "/news/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("News Successfully Deleted!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const approveNews = (id) => {
    fetch(url + "/news/update/" + id, {
      method: "PUT",
      body: JSON.stringify({ approvenews: true }),
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

  const displayNews = () => {
    if (!loading) {
      return NewsArray.map((news, i) => (
        <Accordion key={news._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            img={news.thumbnail}
          >
            <Typography>{news.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{news.summary}</Typography>

            <Typography>{news.category}</Typography>
          </AccordionDetails>
          <Stack direction="row" spacing={2}>
            <Button
              disabled={news.approvenews}
              variant="contained"
              color="error"
              onClick={(e) => approveNews(news._id)}
            >
              {news.approvenews ? "Approved" : "Approve News"}
              <i class="fa-solid fa-thumbs-up"></i>
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={(e) => deleteNews(news._id)}
            >
              Delete News
              
            </Button>
          </Stack>
        </Accordion>
      ));
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />

      {displayNews()}
    </div>
  );
};

export default ManageNews;
